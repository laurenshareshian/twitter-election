<template>
<section>
  <ChoicesForm :states="states"
               :issues="issues"
               :on-add="handleAdd"> </ChoicesForm>
  <Politicians :state="state"
              :pol1="pol1"
              :pol2="pol2"></Politicians>
  <div class="filtered-results">
    <FilteredResults :screen-name="screenName1"
                     :tweets="tweets1"
                     :search-terms="searchTerms">
                     </FilteredResults>
    <FilteredResults :screen-name="screenName2"
                     :tweets="tweets2"
                     :search-terms="searchTerms">
                     </FilteredResults>
    <Loading :loading="loading"> </Loading>
  </div>
</section>
</template>

<script>

import ChoicesForm from './ChoicesForm.vue';
import Politicians from './Politicians.vue';
import Loading from './Loading.vue';
import FilteredResults from './FilteredResults.vue';
import api from '../../services/api';

export default {
  data() {
    return { 
      states: [], // all state election options
      issues: [], // all issue options
      searchTerms: [], // search terms for the chosen issue
      stateChoice: null, // index of user's state election choice
      issueChoice: null, // index of user's issue choice
      state: null, // user's state choice
      pol1: null, // politician 1 of state election
      pol2: null, // politician 2 of state election
      screenName1: null, // screenname 1 of state election
      screenName2: null, // screenname 2 of state election
      tweets1: [],
      tweets2: [],
      loading: false

    };
  },
  created() {
    api.getStates()
      .then(states => {
        this.states = states;
      });
    api.getIssues()
      .then(issues => {
        this.issues = issues;
      });
  },
  components: { 
    ChoicesForm,
    Politicians,
    FilteredResults,
    Loading
  },
  methods: {
    handleAdd(choice) {
      this.stateChoice = choice.state;
      this.issueChoice = choice.issue;
      this.findPoliticians();
      this.findScreenName();
      this.findIssues();
      this.loading = true;
      api.getTweets({ screenName: this.screenName1 })
        .then(tweets => {
          this.tweets1 = tweets;
        });
      api.getTweets({ screenName: this.screenName2 })
        .then(tweets => {
          this.tweets2 = tweets;
          this.loading = false;
        });
      return choice;
    }, 
    findPoliticians(){
      this.state = this.states[this.stateChoice - 1].name;
      this.pol1 = this.states[this.stateChoice - 1].pol1;
      this.pol2 = this.states[this.stateChoice - 1].pol2;
    },
    findScreenName() {
      this.screenName1 = this.states[this.stateChoice - 1].twitter1;
      this.screenName2 = this.states[this.stateChoice - 1].twitter2;
    },
    findIssues() {
      this.searchTerms = this.issues[this.issueChoice - 1].searchterms;
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