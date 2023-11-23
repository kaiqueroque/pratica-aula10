import React, { useState } from 'react';
import { Container, FormControl, Input, FormHelperText, Button, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';

const Login = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassord ] = useState('')

  return (
    <>
      <Container maxWidth='sm' maxHei style={{
                                              background: '#fff',
                                              boxShadow: 'red',
                                              padding: 32,
                                              borderRadius: 16,
                                              marginTop: 64,
                                              alignItems: 'center'
                                            }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ margin: '0 auto', marginBottom: 40 }} sx={{ width: 100, height: 100 }}/>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Input id="email" aria-describedby="email_helper_text" value={email} onChange={e => { setEmail(e.target.value) }} />
            <FormHelperText id="email_helper_text">E-mail</FormHelperText>
          </FormControl>
        </Grid>
        
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Input id="password" aria-describedby="password_helper_text" value={password} onChange={e => { setPassord(e.target.value) }} />
            <FormHelperText id="password_helper_text">Senha</FormHelperText>
          </FormControl>
        </Grid>

        <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button size="small" variant="text" style={{ color: '#90caf9'}}>
            Ainda não tenho conta
          </Button>

          <Button size="large" variant="contained">
            Login
          </Button>
        </div>
      </Container>
    </>
  )
}

export default Login;