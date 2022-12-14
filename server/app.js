const express = require('express')
const cors = require('cors');
const app = express()
const gameArray = require('./data');

const port = 3000;
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('hello');
});

app.get('/games', (req, res) => {
  res.status(200).send(gameArray);
})

app.get('/games/lucky', (req, res) => {
  let randomGame = gameArray[Math.floor(Math.random()*gameArray.length)];
  res.status(200).send(randomGame);
})

app.get('/games/:name', (req, res) => {
  const name = req.params.name.toLowerCase()
  const game = gameArray.filter(ele => ele.name.toLowerCase().includes(name));
  res.status(200).send(game);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
