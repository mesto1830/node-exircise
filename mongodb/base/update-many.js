const express = require('express')
const app = express()
const cors = require('cors')
const db = require('../db')
const Users = require('../usersSchema.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', async(req, res) => {
 await Users.updateMany({},{salery:6000},{multi: true})
  const result = await Users.find({})
  res.json(result)
})

app.listen(3000, () => {
  console.log('Server is running...')
})
