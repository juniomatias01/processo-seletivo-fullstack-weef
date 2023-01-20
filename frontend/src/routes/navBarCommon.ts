// material icon
import AddIcon from '@material-ui/icons/Add';
import ShopIcon from '@material-ui/icons/Shop';
import ViewListIcon from '@material-ui/icons/ViewList';
import PeopleIcon from '@material-ui/icons/People';

// configs
import { PATH_NAME, DRAWER_MENU_LABEL } from 'configs';

export const navBarCommon = [
  {
    subheader: 'Events',
    items: [
      {
        title: 'Event',
        icon: ShopIcon,
        href: PATH_NAME.EVENT,
        label: DRAWER_MENU_LABEL.EVENT,
        items: [
          {
            title: 'Add Event',
            icon: AddIcon,
            href: PATH_NAME.EVENT_ADD,
            label: DRAWER_MENU_LABEL.EVENT_ADD,
          },
          {
            title: 'List Event',
            icon: ViewListIcon,
            href: PATH_NAME.EVENT_LIST,
            label: DRAWER_MENU_LABEL.EVENT_LIST,
          },
        ],
      },
    ],
  },
  {
    subheader: 'Users',
    items: [
      {
        title: 'Users',
        icon: PeopleIcon,
        href: PATH_NAME.USERS,
        label: DRAWER_MENU_LABEL.USERS,
      },
    ],
  },
];
