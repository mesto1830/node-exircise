import http from 'http'
import fs from 'fs'


http.createServer((req, res) => {
  if(req.url == '/' && req.method == 'GET){
    res.end(fs.readFileSync('index.html'))
  }
}).listen(3000, () => {
  console.log('Server is running...')
})
