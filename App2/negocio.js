const datos = require('./data');

function listarPersonas() {
  return datos.obtenerPersonas();
}

function agregarPersona(nombre, apellido, edad) {
  if (!nombre || !apellido || edad === undefined) {
    throw new Error('Nombre, apellido y edad son requeridos');
  }
  const persona = { nombre, apellido, edad };
  return datos.agregarPersona(persona);
}

function eliminarPersona(nombre) {
  if (!nombre) throw new Error('Nombre requerido');
  const eliminada = datos.eliminarPersona(nombre);
  if (!eliminada) throw new Error('Persona no encontrada');
  return eliminada;
}

function modificarPersona(nombre, nuevosDatos) {
  if (!nombre) throw new Error('Nombre requerido para modificar');
  const modificada = datos.modificarPersona(nombre, nuevosDatos);
  if (!modificada) throw new Error('Persona no encontrada');
  return modificada;
}

module.exports = {
  listarPersonas,
  agregarPersona,
  eliminarPersona,
  modificarPersona
};
