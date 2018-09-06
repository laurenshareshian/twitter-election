<template>
  <div id="issues-app">
    <div class="issue" v-for="(issue, i) in issues" :key="issue.id">
      <!-- <button @click="handle(i)" class="issue__checkbox" ></button> -->
      <h3> {{issue.name}} </h3>
      <p class="issue__text">{{ issue.description}}</p>
    <div class="issue" v-for="searchterm in issue.searchterms" :key="issue.searchterm">
        <p> {{searchterm}} </p>
    </div>

    </div>
  </div>
</template>

<script>
import { updateIssue } from '../../services/api';
export default {
  props: ['issues'],
  methods: {
    handleUpdate() {
      console.log('hi');
    }
  }
};
</script>

<style scoped>

body {
    font-family: 'Open Sans';
}

h3 {
    font-family: 'Open Sans';
}

</style>