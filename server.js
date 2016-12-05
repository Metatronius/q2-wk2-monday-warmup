'use strict';

const express = require('express'),
  app = express(),
  port = process.env.PORT || 8000,
  path = require('path');

app.use(express.static('public'));
app.use((req, res) =>
{
  const servedFile = path.join(__dirname, 'public', '404.html');
  res.sendFile(servedFile);
})

app.listen(port, () =>
{
  console.log('Listening on port', port);
})
