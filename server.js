const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/add', (request, response)=>{
  // console.log(request.query.value)
  const answer = request.query.value.split(' ').map((number)=>{
    return parseInt(number.trim(),10);
  }).reduce((a,b)=>{return a + b},0);
  response.send(JSON.stringify({answer}));
});

app.get('/subtract', (request, response)=>{
  console.log('SUBTRACTING', request.query)
  const numberArray = request.query.value.split(' ').map((number)=>{
    return parseInt(number,10);
  });
  response.send(JSON.stringify({answer: numberArray[0] - numberArray[1]}));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})