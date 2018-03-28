const express = require('express');
const app = express();
const path = require('path');

app.use('/public', express.static('public'));
app.use('/vendor', express.static('node_modules'));

app.use(require('body-parser').json());

//any route with api sends to api folder
app.use('/api', require('./routes'));

app.get('/', (req,res,next)=>{
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err,req,res,next)=>{
  console.log(`***there was an error: ${err.message}***`);
  res.status(err.status || 500).send(err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`You are connected to port ${port}`));