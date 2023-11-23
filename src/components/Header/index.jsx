import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

 
function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Aula prática 10
            </Typography>

            <Button size="medium" variant="text" style={{ color: '#e3f2fd'}} href="/tarefas">
              Lista de tarefas
            </Button>
            <Button variant="contained" href="/login">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
 
export default Header;