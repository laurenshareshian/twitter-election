<template>
  <div>
    <nav class="tiles">
      <NavLink to="/issues/list">list issues</NavLink>
      &nbsp;
      <NavLink to="/issues/new">add issue</NavLink>
      &nbsp;
      <NavLink to="/issues/edit">update issue</NavLink>
      &nbsp;
    </nav>
    <RouterView 
      :issues="issues"
      :on-add="handleAdd"
    ></RouterView>
  
  </div>
</template>

<script>
import { addIssue, getIssues } from '../../services/api';
import NavLink from './NavLink';
export default {
  data() {
    return { 
      issues: null
    };
  },
  created() {
    getIssues()
      .then(issues => {
        this.issues = issues;
      });
  },
  components: {
    NavLink
  },
  methods: {
    handleAdd(issue) {
      return addIssue(issue)
        .then(saved => {
          this.issues.push(saved);
          this.$router.push('/issues/list');
        });
    }
  }
};
</script>

<style scoped>
.tiles {
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
pre {
  text-align: left;
}

.router-link-exact-active {
  margin: none !important;
}

</style>