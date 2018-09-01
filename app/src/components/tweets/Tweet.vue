<template id="tweet-template">
  <article>
      {{tweet}}
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
