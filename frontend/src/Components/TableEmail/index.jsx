import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Navigate, useNavigate } from 'react-router-dom';

const columns = [
  { id: 'emailFrom', label: 'De', minWidth: "auto" },
  { id: 'emailTo', label: 'Para', minWidth: "auto" },
  { id: 'subject', label: 'Assunto', minWidth: "auto" },
  { id: 'sendDateEmail', label: 'Data de envio', minWidth: "auto" },
];

export default function StickyHeadTable({ data }) {
  let navigate = useNavigate();
  const rows = data
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handlePageDetail = async (data) => {
    navigate('/infinity/detail', { state: data })
  }


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ borderRadius: "15px" }}>
      <TableContainer sx={{ maxHeight: 350 }} >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: 700, fontFamily: "'Quicksand', sans-serif" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell onClick={() => handlePageDetail(row)} key={column.id} align={column.align} style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "0.9rem", cursor: "pointer" }}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
