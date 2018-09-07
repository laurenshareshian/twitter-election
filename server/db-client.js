// As we move to into deployment, this value will not
// be hard-coded, but instead come from environment configuration
//const DATABASE_URL = 'postgres://localhost:5432/election';
const DATABASE_URL = 'postgres://yaymmkodtdujxh:bce4b71943d7b6e6ecc45a2ff5ac8d932a97108d96ecce0d117ac2c83dd680ac@ec2-54-221-237-246.compute-1.amazonaws.com:5432/dfi2t4t12hfr2h';
const pg = require('pg');
const Client = pg.Client;

const client = new Client(DATABASE_URL);
client.connect()
  .then(() => console.log('connected to db', DATABASE_URL))
  .catch(err => console.error('connection error', err));

client.on('error', err => {
  console.error('\n**** DATABASE ERROR ****\n\n', err);
});

module.exports = client;