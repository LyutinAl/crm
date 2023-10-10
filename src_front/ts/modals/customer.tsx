import React, {useEffect, useState} from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from '@mui/material';
import {iCustomer} from '@types';
import axios from 'axios';

interface iProps {
  openModal: boolean;
  setOpenModal: () => void;
  customers: iCustomer[];
  setCustomers: (updatedProps: Partial<iCustomer>) => void;
  customerInd: number;
}

const CustomerModal: React.FC<iProps> = (
    {
      openModal,
      setOpenModal,
      customers,
      setCustomers,
      customerInd,
    },
) => {
  const customerInit: iCustomer = {
    id: 0,
    name: '',
    phone: '',
    email: '',
  };

  const [customer, setCustomer] =
    useState<iCustomer>(customerInit);
  const [activeFields, setActiveFields] =
    useState<boolean>(true);

  useEffect(() => {
    if (openModal) {
      setCustomer(customers[customerInd]);
      setActiveFields(true);
    } else setCustomer(customerInit);
  }, [openModal]);

  // Обновление клиента
  const handleCustomer = (updatedProps: Partial<iCustomer>) => {
    const customerNew = {...customers[customerInd], ...updatedProps};
    setCustomer(customerNew);
  };

  // Изменение состояния полей
  const handleActive = () => {
    setActiveFields(activeFields == false);
  };

  // Сохранение изменений
  const saveChange = () => {
    setCustomers({...customer});
    axios.put('http://localhost:8080/admin/updateCustomer', {...customer})
        .then((r) => console.log(r))
        .catch((e) => console.log(e));
    setOpenModal();
  };

  return (
    <>

      <Dialog open={openModal} onClose={() => setOpenModal()} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Данные клиента</DialogTitle>
        <Box
          marginLeft="auto"
          marginRight="24px"
          alignItems="right"
        >
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              console.log('OK');
            }}>
            Посмотреть заказы
          </Button>
        </Box>
        <DialogContent
          style={{paddingTop: '0px'}}
        >
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Имя"
            type="text"
            fullWidth
            disabled={activeFields}
            value={customer?.name}
            onChange={(e) => handleCustomer({name: e.target.value})}
          />
          <TextField
            margin="dense"
            name="phone"
            label="Телефон"
            type="phone"
            fullWidth
            disabled={activeFields}
            value={customer?.phone}
            onChange={(e) => handleCustomer({phone: e.target.value})}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            disabled={activeFields}
            value={customer?.email}
            onChange={(e) => handleCustomer({email: e.target.value})}
          />
        </DialogContent>
        <DialogActions
          style={{padding: '0px', marginBottom: '8px'}}
        >
          <Box
            display="flex"
            justifyContent="flex-end"
            marginRight='24px'
          >
            <Button
              onClick={() => setOpenModal()}
              variant="outlined"
              color="error"
              style={{marginRight: '8px'}}
            >
              Отмена
            </Button>
            <Button
              variant="outlined"
              color="success"
              disabled={activeFields}
              onClick={() => {
                saveChange();
                setOpenModal();
              }}
              style={{marginRight: '8px'}}
            >
              Сохранить
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="medium"
              disabled={activeFields == false}
              onClick={() => handleActive()}
            >
              Редактировать данные
            </Button>
          </Box>

        </DialogActions>
      </Dialog>
    </>
  );
};

export default CustomerModal;
