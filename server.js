const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor activo');
});

app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});


// Colo este código acá porque no entiendo del todo el ejercicio pero de igual forma lo adjunto como prueba de la realización del mismo//

//app.post('/reporte', (req, res) => {
//  const mensaje = req.body.mensaje;
//  res.json({ //
    //estado: "Reporte recibido",
    //mensaje: mensaje//
  // }); //
// }); //
