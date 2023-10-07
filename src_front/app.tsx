import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Route, Routes, Navigate, useNavigate} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  ListItemText,
  CssBaseline, ListItemButton,
} from '@mui/material';
import Clients from '@pages/clients';
import Index from '@pages/index';

interface iSection {
  section_name: string,
  url: string,
}

const sections: iSection[] = [
  {section_name: 'Клиенты', url: 'clients'},
];

const App: React.FC = () => {
  const navigate = useNavigate();

  const drawerWidth: number = 240;

  return (
    <Box sx={{flexGrow: 1}}>

      <CssBaseline/>
      <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
        <Toolbar>
          <Typography variant="h6" noWrap onClick={() => navigate('/')}>
            PC Expert CRM
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          'width': drawerWidth,
          'flexShrink': 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
      >
        <Toolbar/>
        <List>
          {sections.map((item, index) => (
            <ListItemButton
              key={index + item.section_name}
              onClick={() => navigate('/clients')}
            >
              <ListItemText primary={item.section_name}/>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Toolbar/>
      <Routes>
        <Route path={'/clients'} element={<Clients/>}/>
        <Route path={'/'} element={<Index/>}/>
      </Routes>
    </Box>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
);
