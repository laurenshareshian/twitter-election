<template id="tweet-template">
<div class="tweet">
  <a v-bind:href="url">
    <p>{{tweet['created_at'].substring(4,10)}}: {{handleUrl()}}</p>
  </a>
  </div>
</template>

<script>
export default {
  props: {
    tweet: Object
  },
  data() {
    return {
      url: null
    };
  },
  created() {
    this.handleUrl();
  },
  methods: {
    handleUrl() {
      let reg = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
      this.url = this.tweet.text.match(reg)[0];
      return this.tweet.text.replace(reg, '');
    }

  }
};

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
.tweet {
  border: 2px black solid;
  margin: 40px;
}

a {
  font-family: 'Open Sans';
  text-decoration: none;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 40px;
  padding:10px;
  color:black;
}

p {
  padding: 10px;
}

</style>
