/* eslint-disable no-use-before-define */
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const daySelector = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: "49%",
    },
  },
}));

const stretchType = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
    float: "left"
  },
}));

const tableStyle = makeStyles(theme => ({
    root: {

    }
}))

const boxStyle = makeStyles(theme => ({
    root:{
        overflow: "auto",
        width: "49%",
        float: "left",
        borderRightWidth: "1%"
    }
}));

function createData(name, progress, goal) {
  return { name, progress, goal};
}

const rows = [
  createData('Calf Stretch', 1, 100),
];



export default function FormPropsTextFields() {
  const classes = daySelector();
  const classes2 = stretchType();
  const table = tableStyle();
  const box = boxStyle();

  return (
    <Box className = {box.root}>
        <TableContainer className={table.root}>
          <Table size="small" float = "left">
            <TableHead>
              <TableRow>
                <TableCell>Activity Type</TableCell>
                <TableCell align="right">Progress</TableCell>
                <TableCell align="right">Goal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.progress}</TableCell>
                  <TableCell align="right">{row.goal}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>  
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
              />
            )}
          />
        </div>
        <Button variant = "contained">Submit</Button>
    </Box> 
  );
}

const days = [
  { title: 'Sunday'},
  { title: 'Monday'},
  { title: 'Tuesday'},
  { title: 'Wednesday'},
  { title: 'Thursday'},
  { title: 'Friday'},
  { title: 'Saturday'},
  { title: 'Everyday'}
];