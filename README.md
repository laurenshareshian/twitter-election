This app follows twitter feeds for the 2018 Midterm Election Politicians.


Once logged in, a user will be able to personalize their issue searches (gun control, reproductive rights, etc.) for the senators in their state races.

A user will need to get developer keys from Twitter and then insert them into a config.js file inside their server folder in the form:

module.exports = {
  consumer_key: 'XXXXX',
  consumer_secret: 'XXXXX',
  access_token: 'XXXXXXX',
  access_token_secret: 'XXXXXXXX'
};

A user also needs a .env in this same location with info:

PORT=3000
DATABASE_URL=postgres://localhost:5432/{Database name}
