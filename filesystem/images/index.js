const fs = require('fs')
fs.readdir('static/uploads', (err, files) => {
  if (err) throw err;
  for (let file of files) 
  fs.unlink('./static/uploads/' + file, (err) => {
      if (err) throw err;
  })
  // return fs.rmdir('static/uploads', (err) => {
  //   if (err) throw err;
  //   console.log('folder is deleted');
  // })
})