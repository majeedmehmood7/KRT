import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AdduserModal from './UserModal';
import TransitionsModal from './Modal';

function createData(name, username, type, wareHouse, protein) {
  return { name, username, type, wareHouse, protein };
}

const rows = [
  createData('Frozen yoghurt', 'user1', 'Type A', 'Warehouse 1', 4.0),
  createData('Ice cream sandwich', 'user2', 'Type B', 'Warehouse 2', 4.3),
  createData('Eclair', 'user3', 'Type C', 'Warehouse 3', 6.0),
  createData('Cupcake', 'user4', 'Type A', 'Warehouse 1', 4.3),
  createData('Gingerbread', 'user5', 'Type B', 'Warehouse 2', 3.9),
];

export default function BasicTable() {
  const handleResetClick = (row) => {
    // Handle reset logic for the specific row
    console.log(`Reset clicked for row: ${row.name}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <TableContainer component={Paper} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        
            <h1 align='center'>Users</h1>
            <div>
            <TransitionsModal/>
            <h2>Add User</h2>
            </div>
           
          <TableRow>
            <TableCell align='center'>Name</TableCell>
            <TableCell align="center">Username</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">WareHouse</TableCell>
            <TableCell align="center">Reset</TableCell>
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
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.wareHouse}</TableCell>
              <TableCell align="right">
                <Button variant="outlined" onClick={() => handleResetClick(row)}>
                  Reset
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</div>
  );
}
