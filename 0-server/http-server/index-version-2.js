import http from 'http'
import fs from 'fs'

const server = http.createServer((req, res) => {
  if(req.method == 'GET'){
    res.end(fs.readFileSync('index.html'))
  }
})

server.listen(3000, () => {
  console.log('Server is running...')
})