import React, {useEffect, useState} from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from '@mui/material';
import axios from 'axios';
import {iCustomer} from '@types';

interface Column {
  id: 'name' | 'phone' | 'email';
  label: string;
  minWidth: number;
  align: 'center' | 'left' | 'right' | 'inherit' | 'justify';
}

const columns: readonly Column[] = [
  {id: 'name', label: 'ФИО', minWidth: 170, align: 'center'},
  {id: 'phone', label: 'Тел. номер', minWidth: 100, align: 'center'},
  {id: 'email', label: 'Эл. почта', minWidth: 170, align: 'center'},
];

const Clients = (): React.JSX.Element => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [customers, setCustomers] = useState<iCustomer[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8080/admin/getCustomers')
        .then((r) => setCustomers(r.data))
        .catch((e) => console.log(e));
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{width: '100%', overflow: 'hidden', height: '100%'}}>
      <TableContainer sx={{maxHeight: 'calc(100vh - 116px)'}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {
                columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{minWidth: column.minWidth}}
                    sx={{backgroundColor: '#f5f5f5', fontWeight: 'bold', color: '#000'}}
                  >
                    {column.label}
                  </TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={'rowTab' + row.id}>
                        {columns.map((column) => {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {row[column.id]}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })
            }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={customers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Clients;
