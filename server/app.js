
const express = require('express')
const cors = require('cors');
const app = express()

const port = 3000;
app.use(cors());

const gameArray = require('./data');



app.get('/', (req, res) => res.send('it works'));

app.get('/games', (req, res) => {
  console.log(gameArray)
  res.send(gameArray);
})


app.get('/games/:id', (req, res) => {
  console.log(gameArray)
  res.send(gameArray);
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
