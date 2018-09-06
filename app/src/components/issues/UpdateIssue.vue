<template>
  <section>
    <h2>Edit issue</h2>
    <IssueForm 
      label="Edit"
      :issue="issue"
      :onEdit="handleEdit"/>
  </section>
</template>

<script>
import UpdateIssueForm from './UpdateIssueForm.vue';
import { getIssueById, updateIssue } from '../../services/api';
export default {
  components: { 
    UpdateIssueForm 
  },
  data() {
    return {
      issue: null,
    };
  },
  created() {
    getIssueById(this.$route.params.id)
      .then(issue => {
        this.issue = issue;
      });
  },
  methods: {
    handleEdit(issue) {
      updateIssue(issue)
        .then(added => {
          this.$router.push(`/issues/${added.id}`);
        });
    }
  }
};
</script>

<style scoped>
h2 {text-align: center;}
</style>