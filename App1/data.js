let productos = [];

function obtenerProductos() {
  return productos;
}

function agregarProducto(producto) {
  productos.push(producto);
  return producto;
}

function eliminarProducto(nombre) {
  const index = productos.findIndex(p => p.nombre === nombre);
  if (index !== -1) {
    const eliminado = productos.splice(index, 1);
    return eliminado[0];
  }
  return null;
}

function modificarProducto(nombre, nuevosDatos) {
    const producto = productos.find(p => p.nombre === nombre);
    if (!producto) return null;
  
    if (nuevosDatos.precio !== undefined) {
      producto.precio = nuevosDatos.precio;
    }
    if (nuevosDatos.descripcion !== undefined) {
      producto.descripcion = nuevosDatos.descripcion;
    }
    return producto;
  }
  
  module.exports = {
    obtenerProductos,
    agregarProducto,
    eliminarProducto,
    modificarProducto
  };
