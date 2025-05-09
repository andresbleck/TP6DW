const express = require('express');
const app = express();
const negocio = require('./negocio');

app.use(express.json());

app.get('/productos', (req, res) => {
  const lista = negocio.listarProductos();
  res.json(lista);
});

app.post('/productos', (req, res) => {
  try {
    const { nombre, precio, descripcion } = req.body;
    const producto = negocio.agregarProducto(nombre, precio, descripcion);
    res.status(201).json(producto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put('/productos/:nombre', (req, res) => {
    try {
      const { nombre } = req.params;
      const { precio, descripcion } = req.body;
      const actualizado = negocio.modificarProducto(nombre, { precio, descripcion });
      res.json({ mensaje: 'Producto actualizado', producto: actualizado });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

app.delete('/productos/:nombre', (req, res) => {
  try {
    const { nombre } = req.params;
    const eliminado = negocio.eliminarProducto(nombre);
    res.json({ mensaje: 'Producto eliminado', producto: eliminado });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
