import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AdduserModal from './UserModal';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'Username', width: 130 },
  { field: 'type', headerName: 'Type', width: 130 },
  {
    field: 'updateButton',
    headerName: 'Update',
    sortable: false,
    width: 80,
    renderCell: (params) => (
      <Button startIcon={<EditIcon />}>
        {/* Update */}
        <BrowserRouter>
        <Routes>
          <Route path='/update' element={<AdduserModal/>}></Route>
        </Routes>
        </BrowserRouter>
      </Button>
    ),
  },
  {
    field: 'deleteButton',
    headerName: 'Delete',
    sortable: false,
    width: 80,
    renderCell: (params) => (
      <Button startIcon={<DeleteIcon />}>
        {/* Delete */}
      </Button>
    ),
  },
];

const rows = [
  { id: 1, type: 'Admin', username: 'Jon', warehouse: 35 },
  { id: 2, type: 'Admin', username: 'Cersei', warehouse: 42 },
  { id: 3, type: 'Lannister', username: 'Jaime', warehouse: 45 },
  { id: 4, type: 'Warehouse', username: 'Arya', warehouse: 16 },
  { id: 5, type: 'Incharge', username: 'Daenerys', warehouse: null },
  { id: 6, type: 'Admin', username: null, warehouse: 150 },
  { id: 7, type: 'Admin', username: 'Ferrara', warehouse: 44 },
  { id: 8, type: 'WareHouse', username: 'Rossini', warehouse: 36 },
  { id: 9, type: 'Admin', username: 'Harvey', warehouse: 65 },
];

export default function ItemTable() {
  return (
    <div>
      <h1>User Table</h1>
      <AdduserModal/>
      
      <div style={{ height: 600, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}  
          checkboxSelection
        />
      </div>
    </div>
  );
}
