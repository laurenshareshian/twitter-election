<template>
<section>
  <ChoicesForm :on-add="handleAdd"> </ChoicesForm>
  <Politicians :state="state"
              :pol1="pol1"
              :pol2="pol2"></Politicians>
  <div class="filtered-results">
    <FilteredResults :screen-name="screenName1"></FilteredResults>
    <FilteredResults :screen-name="screenName2"></FilteredResults>
  </div>
</section>
</template>

<script>

import ChoicesForm from './ChoicesForm.vue';
import Politicians from './Politicians.vue';
import FilteredResults from './FilteredResults.vue';
import api from '../../services/api';

export default {
  data() {
    return { 
      tweets: null,
      filteredTweets: null,
      stateChoice: null,
      issueChoice: null,
      state: null,
      issue: null,
      pol1: null,
      pol2: null,
      screenName1: null,
      screenName2: null
    };
  },
  created() {
    api.getStates()
      .then(states => {
        this.states = states;
        console.log('states', this.states);
      });
    api.getIssues()
      .then(issues => {
        this.issues = issues;
        console.log('issues', this.issues);
      });
  },
  components: { 
    ChoicesForm,
    Politicians,
    FilteredResults
  },
  methods: {
    handleAdd(choice) {
      this.stateChoice = choice.state;
      this.issueChoice = choice.issue;
      this.findPoliticians();
      this.findIssueKeywords();
      this.findScreenName();
      return choice;
    }, 
    findPoliticians(){
      this.state = this.states[this.stateChoice - 1].name;
      this.pol1 = this.states[this.stateChoice - 1].pol1;
      this.pol2 = this.states[this.stateChoice - 1].pol2;
    },
    findIssueKeywords(){
      this.issueKeywords = this.issues[this.issueChoice - 1].searchTerms;
    },
    findScreenName() {
      this.screenName1 = this.states[this.stateChoice - 1].twitter1;
      this.screenName2 = this.states[this.stateChoice - 1].twitter2;
    }
  }
};
</script>

<style>
.flex-box{
  display: flex;
  justify-content: space-around;
}

ul.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.filtered-results {
  display: flex;
}
</style>