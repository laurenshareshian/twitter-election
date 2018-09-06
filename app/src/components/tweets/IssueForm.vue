<template>
  <section>
    {{issue}}
  </section>

</template>

<script>
export default {
  props: {
    issue: Object,
  },
  data() {
    return {
      id: '',
      name: '',
      search1: null,
      search2: null,
      search3: null
    };
  },
  computed: {
    isNew() {
      return this.issue === undefined;
    }
  },
  created() {
    const issue = this.issue;
    if(this.isNew) return;
    this.name = issue.name;
    this.search1 = issue.search1;
    this.search2 = issue.search2;
    this.search3 = issue.search3;
  },
  methods: {
    handleSubmit() {
      const issue = {
        name: this.name,
        search1: this.search1,
        search2: this.search2,
        search3: this.search3
      };
      if(!this.isNew) {
        issue.key = this.issue.key;
      }
      this.onComplete(issue);
    }
  }
};
</script>

<style>

section {
  font-family: 'Open Sans';
  padding-top: 50px;
}
.add-tweet {
  width: 500px;
  text-align: left;
  margin: auto;
}
label {
  display: block;
  margin: 20px;
}
form {
  background: white;
  padding: 30px;
  box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
}
p {
  text-align: center;
  text-transform: uppercase;
}
button {
    background: #fa504d;
    border: none;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 20px;
    font-weight: 600;
    box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
    transition: all .2s ease-in-out;
}
button:hover {
    transform: scale(1.1); 
}
</style>