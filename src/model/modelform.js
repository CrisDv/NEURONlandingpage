const mongoose = require('mongoose');
const { Schema } = mongoose;

const FormSchema = new Schema({
  nombre: { type: String, required: true },
  mail: { type: String, required: true },
  NoContacto: { type: String, required: true },
  NombreEmpresa: { type: String, required: true },
  TipoEmpresa: { type: String, required: true }
});

module.exports = mongoose.model('Registro', FormSchema);//dar el nombre de el modelo y la estructura