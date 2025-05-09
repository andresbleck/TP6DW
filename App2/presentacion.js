const express = require('express');
const app = express();
const negocio = require('./negocio');

app.use(express.json());

app.get('/personas', (req, res) => {
  const lista = negocio.listarPersonas();
  res.json(lista);
});

app.post('/personas', (req, res) => {
  try {
    const { nombre, apellido, edad } = req.body;
    const persona = negocio.agregarPersona(nombre, apellido, edad);
    res.status(201).json(persona);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/personas/:nombre', (req, res) => {
  try {
    const { nombre } = req.params;
    const eliminada = negocio.eliminarPersona(nombre);
    res.json({ mensaje: 'Persona eliminada', persona: eliminada });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put('/personas/:nombre', (req, res) => {
  try {
    const { nombre } = req.params;
    const { apellido, edad } = req.body;
    const modificada = negocio.modificarPersona(nombre, { apellido, edad });
    res.json({ mensaje: 'Persona modificada', persona: modificada });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
