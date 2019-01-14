const express = require('express');
const helpers = require('./helpers');

const app = express();

app.use((req, res, next) => {
  res.set({
    'Content-Type': 'application/json',
    'X-XSS-Protection': '1; mode=block',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'deny',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  });
  next();
});

app.get('/', (req, res) => {
  const readStream = helpers.fileReader(req.fileName || 'part1');
  readStream.on('open', () => readStream.pipe(res));
  readStream.on('error', err => res.end(err));
});

app.listen(3000, () => console.log('reading on port 3000..'));
