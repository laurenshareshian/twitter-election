<template>
  <div v-if="issue">
  <IssueForm v-if="issue"
    :issue="issue"
    :onComplete="handleUpdate"
    :onCancel="backToDetail"
  />
  </div>
</template>

<script>
import IssueForm from './IssueForm.vue';
import { getIssueById, updateIssue } from '../../services/api';
export default {
  components: {
    IssueForm
  },
  data() {
    return {
      issue: null
    };
  },
  created() {
    getIssueById(this.$route.params.key)
      .then(issue => {
        this.issue = issue;
        console.log('issue', this.issue);
      });
  },

  methods: {
    handleUpdate(issue) {
      updateIssue(issue)
        .then(() => {
          this.backToDetail();
        });

    },
    backToDetail() {
      this.$router.push(`/issues/${this.issue.id}`);
    }
  }
};
</script>

<style>
</style>