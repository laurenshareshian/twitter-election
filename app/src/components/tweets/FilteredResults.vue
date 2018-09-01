<template id="filter">
    <div v-if="display">
          {{display}}
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

const initIssues = () => {
  return {
    name: '',
    searchterms: ''
  };
};


export default {
  props: {
    screenName: String,
    issueChoice: Number
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
    display() {
      if(!this.screenName || !this.issues[this.issueChoice - 1]) {
        return null;
      }
      const search = Object.assign({}, this.issues[this.issueChoice - 1]).searchterms;
      console.log(search);
      return search;
    },
  },
  created() {
    api.getIssues()
      .then(issues => {
        this.issues = issues;
      });
    api.getOldTweets()
    // api.getTweets({ screenName: this.screenName })
      .then(tweets => {
        this.tweets = tweets;
      })
      .then(() => this.filterTweets(this.tweets));
  },
  methods: {
    filterTweets(tweets) {
      this.filteredTweets = [];
      for(let i = 0; i < tweets.length; i++){
        let tweet = tweets[i];
        let words = tweet.text.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').split(' ');
        if(words.some(r=> ['gun', 'guns', 'nra'].indexOf(r) >= 0)){
          this.filteredTweets.push({ text: tweet.text, created_at: tweet.created_at });
        }
      }
    }
  }
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