const datos = require('./data');

function listarProductos() {
  return datos.obtenerProductos();
}

function agregarProducto(nombre, precio, descripcion) {
  if (!nombre || !precio || !descripcion) {
    throw new Error('Nombre, precio y descripción son requeridos');
  }
  const producto = { nombre, precio, descripcion };
  return datos.agregarProducto(producto);
}

function eliminarProducto(nombre) {
  if (!nombre) {
    throw new Error('Nombre requerido para eliminar el producto');
  }
  const resultado = datos.eliminarProducto(nombre);
  if (!resultado) {
    throw new Error('Producto no encontrado');
  }
  return resultado;
}

function modificarProducto(nombre, nuevosDatos) {
    if (!nombre) throw new Error('Nombre requerido para modificar el producto');
    const modificado = datos.modificarProducto(nombre, nuevosDatos);
    if (!modificado) throw new Error('Producto no encontrado');
    return modificado;
  }
  
  module.exports = {
    listarProductos,
    agregarProducto,
    eliminarProducto,
    modificarProducto
  };
  
