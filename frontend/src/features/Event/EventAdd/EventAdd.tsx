import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

function EventAdd() {
  return (
    <>
      <Grid container alignItems="center">
        <Grid item sm={12}>
          <h2>Add Event</h2>
        </Grid>
      </Grid>
      <Grid>
        <h3>Information</h3>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="outlined" label="Event Name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="outlined" label="Responsible" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="outlined" label="Responsible" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="outlined" label="City" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="outlined" label="State" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="outlined" label="Address" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="outlined" label="Complement" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="outlined" label="Email" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="outlined" label="Telephone" />
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid container justify="flex-end" className="my-20">
          <Button color="primary">Add More</Button>
        </Grid>
        <br />
        <Grid container item sm={12} md={12} justify="flex-end">
          <Button variant="outlined" color="primary" className="mr-20">
            Cancel
          </Button>
          <Button color="primary" variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default EventAdd;
