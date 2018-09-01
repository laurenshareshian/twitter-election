<template id="issues-form">
    <div>
        <form @submit.prevent="handleSubmit">
        <label>
            What issue do you care about? <br>
            <select v-model="issueChoice" required>
            <option disabled value="">Please select an issue</option>
            <option
                v-for="issue in issues"
                :key="issue.id"
                :value="issue.name">
                {{issue.name}}
            </option>
            </select>
            <br>
        </label>
        
        <label>
            <button type="submit">Add</button>
        </label>
        </form>
    </div>
</template>

<script>
export default {
  props: {
    state: String,
    onAdd: {
      type: Function,
    }
  },
  data() {
    return {
      issues: null,
      issueChoice: null
    };
  },
  created() {
    this.issues = [
      { id: 1, name: 'Gun Control', searchTerms: ['gun', 'guns', 'nra', 'shooting'] },
      { id: 2, name: 'Environment', searchTerms: ['climate', 'pollution', 'water', 'warming', 'environment'] },
      { id: 3, name: 'Womens Health', searchTerms: ['abortion', 'abortions', 'reproductive', 'parenthood'] },
      { id: 4, name: 'Economy', searchTerms: ['economy', 'trade', 'manufacturing'] },
      { id: 5, name: 'Defense', searchTerms: ['defense', 'army', 'troops', 'navy'] }
    ];
  },
  methods: {
    handleSubmit() {
      console.log(this.issueChoice);
      this.onAdd(this.issueChoice);
    }
  }
};
</script>

<style scoped>
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
    margin-top: 5px;
    padding: 10px;
    font-weight: 600;
    box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
    transition: all .2s ease-in-out;
}
button:hover {
    transform: scale(1.1); 
}
</style>