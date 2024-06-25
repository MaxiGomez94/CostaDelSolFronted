import React, { useState } from 'react';
import { TextField, Button, MenuItem, Container, Typography, Box } from '@mui/material';
import'./Register.css'

const Register = () => { // Nombre del componente corregido
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dni: '',
    gender: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(formData);
  };

  return (
    <div className='img-register'>
      
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5"sx={{m:2}}>
          Registro
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="Nombre"
            name="firstName"
            autoComplete="fname"
            autoFocus
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Apellido"
            name="lastName"
            autoComplete="lname"
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Contraseña"
            name="password"
            type="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="dni"
            label="DNI"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            select
            id="gender"
            label="Género"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <MenuItem value="male">Masculino</MenuItem>
            <MenuItem value="female">Femenino</MenuItem>
            <MenuItem value="other">Otro</MenuItem>
          </TextField>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Registrarse
          </Button>
        </Box>
      </Box>
    </Container>
            </div>
  );
};

export default Register;
