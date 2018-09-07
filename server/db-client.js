// As we move to into deployment, this value will not
// be hard-coded, but instead come from environment configuration
//const DATABASE_URL = 'postgres://localhost:5432/election';
const DATABASE_URL = 'postgres://dujbduluhcsqsf:fd8a1593b2c4b79d008f5cc8c8c2226605254c2c418d1e4a0adcab26d7f33d82@ec2-184-72-247-70.compute-1.amazonaws.com:5432/d3igvnbs8abcvm';
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