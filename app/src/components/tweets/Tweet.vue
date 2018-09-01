<template id="tweet-template">
  <article>
      <p>{{tweet['created_at'].substring(4,10)}}: {{tweet['text']}}</p>
  </article>
</template>

<script>
export default {
  props: ['tweet'],
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
