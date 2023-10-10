import {Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from '@mui/material';
import React from 'react';


const AppTable = ({columns, customers, lineClick, tableParams}) => {
  return (
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
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={'rowTab' + row.id}
                    onClick={() => {
                      handleCustomerInd(customers.findIndex((x) => x.id === row.id));
                      handleModal();
                    }}
                  >
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
  />;
)
  ;
};

export default AppTable;
