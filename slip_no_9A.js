const express = require('express');
const multer = require('multer');
const upload = multer({
  dest: 'uploads/' 
}); 

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/slipno_09_a.html');
});


app.post('/', upload.single('upload'), (req, res) => {
  res.redirect('/');
});

app.listen(3030);