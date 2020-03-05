/* eslint-disable no-use-before-define */
import React, {Fragment} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const useStyles2 = makeStyles(theme => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();
  const classes2 = useStyles2();

  return (
    <Fragment>
      <form className={classes2.root} noValidate autoComplete="off">
        <div>
          <TextField label="Stretch Type"/>
        </div>
      </form>

      <div className={classes.root}>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={days}
          getOptionLabel={option => option.title}
          filterSelectedOptions
          renderInput={params => (
            <TextField
              {...params}
              variant="outlined"
              label="Days"
              placeholder="Favorites"
            />
          )}
        />
      </div>
    </Fragment>
  );
}

const days = [
  { title: 'Sunday'},
  { title: 'Monday'},
  { title: 'Tuesday'},
  { title: 'Wednesday'},
  { title: 'Thursday'},
  { title: 'Friday'},
  { title: 'Saturday'}
];