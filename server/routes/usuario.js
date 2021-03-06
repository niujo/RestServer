const express = require('express');
const Usuario = require('../models/usuario')
const app = express('express');

app.get('/usuario', function (req, res) {
    res.json('get Usuario api rest');
  })
  
  app.post('/usuario', function (req, res) {
    
      let body =req.body;
      console.log(body);
      let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: body.password,
        role: body.role
      });
      console.log(body);
      console.log("object");
      usuario.save((err,usuarioDB)=>{
        if (err) {
          return res.status(400).json({
            ok:false,
            err
          });
        }
        res.json({
          ok:true,
          usuario:usuarioDB
        })
      })
    })
  
  app.put('/usuario/:id', function (req, res) {
     let id= req.params.id;   
      res.json({
        id
      });
    });
  
  app.delete('/usuario', function (req, res) {
      res.json('delete Usuario');
    })

    module.exports = app;