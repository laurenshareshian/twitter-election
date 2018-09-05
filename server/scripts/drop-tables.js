const client = require('../db-client');
require('dotenv').config();

client.query(`
    DROP TABLE IF EXISTS states;
    DROP TABLE IF EXISTS issues;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });