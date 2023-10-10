import React, {useEffect, useState} from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from '@mui/material';
import axios from 'axios';
import {iCustomer} from '@types';
import CustomerModal from '@modals/customer';

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
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [customers, setCustomers] = useState<iCustomer[]>([]);
  const [customerInd, setCustomerInd] = useState<number | null>(null);


  useEffect(() => {
    axios.get('http://localhost:8080/admin/getCustomers')
        .then((r) => setCustomers(r.data))
        .catch((e) => console.log(e));
  }, []);

  // Обновление страницы
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Обновление ID для отображения внутри модального окна
  const handleCustomerInd = (ind: number): void => {
    setCustomerInd(ind);
  };

  // Обновление состояния модального окна
  const handleModal = () => {
    setOpenModal(openModal == false);
  };

  // Обновление массива клиентов
  const handleCustomers = (updatedProps: Partial<iCustomer>) => {
    const customerNew = {...customers.find((x) => x.id == customerInd), ...updatedProps};
    const customersNew = [...customers];
    customersNew[customerInd] = {...customerNew};
    setCustomers(customersNew);
  };

  // Обновление строк на странице
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
      />
      <CustomerModal
        openModal={openModal}
        setOpenModal={handleModal}
        customers={customers}
        setCustomers={handleCustomers}
        customerInd={customerInd}
      />
    </Paper>
  );
};

export default Clients;
