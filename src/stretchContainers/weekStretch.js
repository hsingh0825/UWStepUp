/* eslint-disable no-use-before-define */
import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const boxStyle = makeStyles(theme => ({
    root:{
        overflow: "auto",
        width: "49%",
        float: "right",
        borderLeftWidth: "1%"
    }
}));

function createData(name, day, goal) {
    var results = ["","","","","","",""];
    for(var i = 0; i <= day.length; i++){
        if(day[i]/goal === 1){
            results[i] = "Yes";
        }else{
            results[i] = "No";
        }
    }

    return {name, results}
}

const rows = [
    createData('Calf Stretch', [100,2,3,4,89,4,100], 100),
    createData('Hamstring Stretch', [2,4,7,10,4,6,10], 10)
]

export default function FormPropsTextFields() {
  const box = boxStyle();

  return (
    <Box className = {box.root}>
        <TableContainer>
            <Table size="small">
                <TableHead>
                <TableRow>
                    <TableCell>Stretch Type</TableCell>
                    <TableCell align="right">Sunday</TableCell>
                    <TableCell align="right">Monday</TableCell>
                    <TableCell align="right">Tuesday</TableCell>
                    <TableCell align="right">Wednesday</TableCell>
                    <TableCell align="right">Thursday</TableCell>
                    <TableCell align="right">Friday</TableCell>
                    <TableCell align="right">Saturday</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map(row => (
                    <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.results[0]}</TableCell>
                    <TableCell align="right">{row.results[1]}</TableCell>
                    <TableCell align="right">{row.results[2]}</TableCell>
                    <TableCell align="right">{row.results[3]}</TableCell>
                    <TableCell align="right">{row.results[4]}</TableCell>
                    <TableCell align="right">{row.results[5]}</TableCell>
                    <TableCell align="right">{row.results[6]}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
    </TableContainer>  
    </Box>
  );
}