const express = require('express')

const app = express()

// creates http server, listening to requests on port 3001
app.listen(3001, () => {
  console.log('App running in port 3001')
})

const recipes = [
  { id: 1, name: 'Lasagna', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Pasta', price: 35.0, waitTime: 20 },
  { id: 3, name: 'Steak', price: 65.0, waitTime: 30 },
]

app
  .get('/', function (_req, res) {
    res.send('navigate to /recipes to see recipes')
  })
  .get('/recipes', function (_req, res) {
    // like .send, but explicitly shows that response is json
    res.json(recipes);
  })

