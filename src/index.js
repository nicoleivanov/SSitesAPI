const express = require('express');
const app = express();
const knex = require('knex');
const knexConfig = require('../knexfile');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const db = knex(knexConfig);

app.use(bodyParser.json());
app.use(morgan('combined'));

app.get('/', (req, res) => res.send('Hello World SSitesAPI'));

app.get('/sites/:id', (req, res, next) => {
  return db
    .select('name')
    .from('sites')
    .where({ id: req.params.id })
    .first()
    .then(site => {
      const { name } = site;
      res.send(site.name);
    });
});

app.listen(8000, () => console.log('SSitesAPI listening on port 8000'));
