const express = require('express');
const router = express.Router();
var path = require('path');
// DataModel
const Registro = require('../model/modelform');
// GET all data
router.get('/', async (req, res) => {
  const registros = await Registro.find();
  res.json(registros);
});

// GET ONE Data
router.get('/:id', async (req, res) => {
  const registros = await Registro.findById(req.params.id);
  res.json(registros);
});

// ADD a new Data
router.post('/', async (req, res) => {
  const { nombre, mail, NoContacto, NombreEmpresa, TipoEmpresa } = req.body;
  const regist = new Registro({nombre, mail, NoContacto, NombreEmpresa, TipoEmpresa});
  await regist.save();
res.send({status:"saved"})
});
/*
// UPDATE a new Data
router.put('/:id', async (req, res) => {
  const {nombre, mail, NoContacto, NombreEmpresa, TipoEmpresa } = req.body;
  const newTask = {nombre, mail, NoContacto, NombreEmpresa};
  await Task.findByIdAndUpdate(req.params.id, newTask);
  res.json({status: 'Task Updated'});
});

router.delete('/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({status: 'Task Deleted'});
});*/

module.exports = router;