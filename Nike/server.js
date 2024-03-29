const express = require('express');
const app = express();
const path = require('path');

app.listen(8080, function(){
  console.log('listening on 8080')
})

app.use(express.static(path.join(__dirname, '/build')));

app.get('/', function(request, response){
  response.sendFile(path.join(__dirname, './build/index.html'));
})

app.get('/product', function(request, response){
  response.json({name : 'Nike shoes'})
})

app.get('*', function(request, response){
  response.sendFile(path.join(__dirname, './build/index.html'));
})
