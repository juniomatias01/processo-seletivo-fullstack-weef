import axios, { AxiosRequestConfig, AxiosError } from 'axios';

// actions
import { setLoading } from 'actions/app.action';

export type IConfig = AxiosRequestConfig & {
  showSpinner?: boolean;
};

type IAxiosResponse = AxiosError & {
  config: {
    showSpinner?: boolean;
  };
};

function getAccessToken() {
  const accessToken = window.localStorage.getItem('accessToken');
  return accessToken;
}

const requestConfig: IConfig = {
  baseURL: process.env.REACT_APP_ENDPOINT_URL,
  timeout: 5000,
  showSpinner: false,
};

export const axiosInstance = axios.create(requestConfig);

const { CancelToken } = axios;
let cancel: any = null;

export default function initRequest(store: any) {
  let requestCount = 0;

  function decreaseRequestCount() {
    requestCount -= 1;
    if (requestCount === 0) {
      store.dispatch(setLoading(false));
    }
  }

  axiosInstance.interceptors.request.use(
    (config: IConfig) => {
      // cancel token
      if (cancel) {
        cancel(); // cancel request
      }
      config.cancelToken = new CancelToken(function executor(c) {
        cancel = c;
      });

      // show loading
      if (config.showSpinner) {
        requestCount += 1;
        store.dispatch(setLoading(true));
      }

      // add x-auth-token
      const accessToken = getAccessToken();
      if (accessToken) {
        // config.headers['x-auth-token'] = accessToken;
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error: IAxiosResponse) => {
      if (error.config.showSpinner) {
        decreaseRequestCount();
      }
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (res: any) => {
      if (res.config.showSpinner) {
        decreaseRequestCount();
      }
      return res;
    },
    (error: IAxiosResponse) => {
      if ((error && error.config.showSpinner) || error.code === 'ECONNABORTED') {
        decreaseRequestCount();
      }

      // handle request timeout
      if (error.code === 'ECONNABORTED') {
        store.dispatch(setLoading(false));
      }
      switch (error.response?.status) {
        case 400: {
          break;
        }
        case 500: {
          break;
        }
        default:
          break;
      }
      return Promise.reject(error);
    },
  );
}
