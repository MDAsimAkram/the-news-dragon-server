const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');

const categoris = require('./data/categoris.json');
// news er data gula k load korbo...

const news = require('./data/news.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Dragon News is Running !!!')
})

//   akhn categoris er data gula na API er moto kore pass kore debo.

app.get('/categoris', (req, res) => {

  res.send(categoris);
})
// akhn news er data gula na API er moto kore pass kore debo...than show korbo
app.get('/news', (req, res) => {
  res.send(news);
})

// specifiq akta news k show korbo tar id dhore...
app.get('/news/:id', (req, res) => {
  const id = req.params.id;
 
  // akta news er moddhe aktai spacifiq id thakbe jeta karo sathe karo match korbe na
  const selectedNews = news.find(n => n._id === id);
  res.send(selectedNews);
})
// specifiq akta catagory dhore tar id dhore news tak show korbo tar id dhore...

app.get('/categoris/:id', (req, res) => {
  // id tak string theke number a convert kporbo
  const id = parseInt(req.params.id);

  // akhn akta sorto debo ..id jodi 0 hoy tahole sob news show hobe na hole akta id er news dekhabe

  if (id === 0) {
    res.send(news);
  }
  else {
    // akta category te onk gula news thakte pare..
    const categoryNews = news.filter(n => parseInt(n.category_id) === id);
    res.send(categoryNews);
  }
})

app.listen(port, () => {
  console.log(`Dragon News is Running on port ${port}`)
})
