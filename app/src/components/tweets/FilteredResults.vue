<template id="filter">
    <div v-if="displayReady">
        <h3> @{{screenName}} </h3>
        <Tweet v-for="(tweet, index) in filteredTweets"
        :key="index"
        :tweet="tweet">
        </Tweet>
    </div>
</template>

<script>
import api from '../../services/api';
import Tweet from './Tweet';

export default {
  props: {
    screenName: String
  },
  data() {
    return { 
      filteredTweets: null,
    };
  },
  components: {
    Tweet
  },
  computed: {
    displayReady() {
      if(!this.filteredTweets){
        return null;
      }
      else {
        return true;
      }
    }
  },
  created() {
    api.getOldTweets()
    // api.getTweets({ screenName: this.screenName })
      .then(tweets => {
        console.log('screenname', this.screenName);
        this.tweets = tweets;
      })
      .then(() => this.filterTweets(this.tweets));
  },
  methods: {
    filterTweets(tweets) {
      console.log('inside filter ');
      this.filteredTweets = [];
      for(let i = 0; i < tweets.length; i++){
        let tweet = tweets[i];

        let words = tweet.text.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').split(' ');
        if(words.some(r=> ['gun', 'guns', 'nra'].indexOf(r) >= 0)){
          this.filteredTweets.push({ text: tweet.text, created_at: tweet.created_at });
        }
      }
    }
  },
};
</script>

<style>
.add-tweet {
  width: 300px;
  text-align: left;
  margin: auto;
}
label {
  display: block;
}
</style>