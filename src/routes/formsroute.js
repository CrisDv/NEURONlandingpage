const express = require('express');
const router = express.Router();
var path = require('path');
// DataModel
const Registro = require('../model/modelform');

// ADD a new Data
router.post('/', async (req, res) => {
  const { nombre, mail, NoContacto, NombreEmpresa, TipoEmpresa } = req.body;
  const regist = new Registro({nombre, mail, NoContacto, NombreEmpresa, TipoEmpresa});
  await regist.save();
res.send({status:"saved"})
});

module.exports = router;