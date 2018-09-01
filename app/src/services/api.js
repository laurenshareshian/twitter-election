export default {
  // new tweets from twitter
  getTweets() {
    return fetch('http://localhost:3000/api/tweets', {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  // directly from my json, not from twitter
  getOldTweets() {
    return fetch('http://localhost:3000/api/oldtweets', {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  addTweet(tweet) {
    return fetch('http://localhost:3000/api/tweets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tweet)
    })
      .then(response => response.json());
  }
};
