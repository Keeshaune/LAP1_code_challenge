
const express = require('express')
const cors = require('cors');
const app = express()

const port = 3000;
app.use(cors());

const gameArray = require('./data');



app.get('/', (req, res) => res.send('it works'));

app.get('/games', (req, res) => {
  res.send(gameArray);
})

app.get('/games/lucky', (req, res) => {
  let randomGame = gameArray[Math.floor(Math.random()*gameArray.length)];
  res.send(randomGame);
 })

 app.get('/games/:name', (req, res) => {
  const name = req.params.name
  const game = gameArray.filter(ele => ele.name.toLowerCase().includes(name.toLowerCase()));
  res.status(200).send(game);
 })

//  ele.name.toLowerCase() == name.toLowerCase()










app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
