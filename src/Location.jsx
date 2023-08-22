import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TransitionsModal from './Modal';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'provinces', headerName: 'Provinces', width: 130 },
  { field: 'district', headerName: 'District Name', width: 130 },
  { field: 'city', headerName: 'City', width: 130 },
  { field: 'villages', headerName: 'Villages', width: 130 },
  {
    field: 'editButton',
    headerName: 'Edit',
    sortable: false,
    width: 100,
    renderCell: (params) => (
      <Button startIcon={<EditIcon />}>
        {/* Edit */}
      </Button>
    ),
  },
  {
    field: 'deleteButton',
    headerName: 'Delete',
    sortable: false,
    width: 100,
    renderCell: (params) => (
      <Button startIcon={<DeleteIcon />}>
        {/* Delete */}
      </Button>
    ),
  },
];

const rows = [
  { id: 1, provinces: 'Province A', district: 'District X', city: 'City One', villages: '35 Villages' },
  { id: 2, provinces: 'Province B', district: 'District Y', city: 'City Two', villages: '42 Villages' },
  // ... other rows ...
];

export default function Location() {
  return (
    <div>
      <h1>Location</h1>
      <div>
        <TransitionsModal />
      </div>
      <div
        style={{
          height: 600,
          width: '100%',
          display: 'flex',
          justifyContent: '',
          alignItems: 'center',
          background: 'white',
        }}
      >
        <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
      </div>
    </div>
  );
}
