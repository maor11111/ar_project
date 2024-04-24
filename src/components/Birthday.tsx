import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('NISSIM', 'HOW r u ', 1,1 ,),
  createData('REUT','qqq', <img src={'../public/qqq.svg'}  />, 1),
  createData('HADAR', 'qqqq', 1, 1),
  createData('MAOR', 'qqqq', 1, 1),
  createData('NATAN', 'qqq', 1, 1),
];

export default function Birthday() {
  return (
    <div>
        <img src={'../public/qqq.svg'}  />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell >Name</TableCell>
            <TableCell align="right">Text</TableCell>
            <TableCell align="right">Animation</TableCell>
            <TableCell align="right">Voice</TableCell>
            
  
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  );
}
