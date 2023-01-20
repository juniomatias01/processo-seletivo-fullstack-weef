import React from 'react';
import { useHistory } from 'react-router-dom';

// material core
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';

// atomic
import PaginationBase from 'components/molecules/PaginationBase';

// configs
import { PATH_NAME } from 'configs';

// helpersDRAWER_MENU_LABEL.PLAY_BACKGROUND
import { canAction } from 'helpers';

// hooks
import usePagination from 'hooks/usePagination';

function createData(
  eventStart: string,
  eventName: string,
  responsible: string,
  city: string,
  address: string,
  complement: string,
  email: string,
  phone: string,
  state: string,
) {
  return { eventStart, eventName, responsible, city, state, address, complement, email, phone };
}

const rows = [createData('lola', '159', '1', '1', '1', '1', '2', '3', '2')];

function EventList() {
  const history = useHistory();
  const { page, perPage, _changePage, _changePerPage } = usePagination();

  return (
    <div>
      {canAction('create', 'event') ? (
        <Grid container justify="flex-end">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => history.push(PATH_NAME.EVENT_ADD)}
          >
            Add Event
          </Button>
        </Grid>
      ) : null}
      <br />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Events</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Adress</TableCell>
              <TableCell align="right">State</TableCell>
              <TableCell align="right">City</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.eventStart}>
                <TableCell component="th" scope="row">
                  {row.eventStart}
                </TableCell>
                <TableCell align="right">{row.eventName}</TableCell>
                <TableCell align="right">{row.responsible}</TableCell>
                <TableCell align="right">{row.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationBase pageIndex={page} perPage={perPage} totalPage={50} changePage={_changePage} changePerPage={_changePerPage} />
    </div>
  );
}

export default EventList;
