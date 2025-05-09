let personas = [];

function obtenerPersonas() {
  return personas;
}

function agregarPersona(persona) {
  personas.push(persona);
  return persona;
}

function eliminarPersona(nombre) {
  const index = personas.findIndex(p => p.nombre === nombre);
  if (index !== -1) {
    return personas.splice(index, 1)[0];
  }
  return null;
}

function modificarPersona(nombre, nuevosDatos) {
  const persona = personas.find(p => p.nombre === nombre);
  if (!persona) return null;

  if (nuevosDatos.apellido !== undefined) {
    persona.apellido = nuevosDatos.apellido;
  }
  if (nuevosDatos.edad !== undefined) {
    persona.edad = nuevosDatos.edad;
  }
  return persona;
}

module.exports = {
  obtenerPersonas,
  agregarPersona,
  eliminarPersona,
  modificarPersona
};

