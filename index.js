const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');

const categoris =require ('./data/categoris.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon News is Running !!!')
  })

//   akhn categoris er data gula na API er moto kore pass kore debo.

app.get('/categoris' , (req , res) => {

    res.send(categoris);
}) 
  
  app.listen(port, () => {
    console.log(`Dragon News is Running on port ${port}`)
  })
