<template id="state-form">

    <form @submit.prevent="handleSubmit">
      <div class="flex-box">
        <div class="flex-one">
          <label>
            Choose a state election<br>
            <select v-model="choice.state" required>
              <option disabled value="">Please select a state</option>
              <option
                v-for="state in states"
                :key="state.id"
                :value="state.id">
                {{state.name}}
              </option>
            </select>
            <br>
          </label>
        </div>
        <div class="flex-two">
          <label>
            Choose an issue <br>
            <select v-model="choice.issue" required>
            <option disabled value="">Please select an issue</option>
            <option
                v-for="issue in issues"
                :key="issue.id"
                :value="issue.id">
                {{issue.name}}
            </option>
            </select>
            <br>
          </label>
        </div>
        <div class="button-container">
          <button type="submit">Search</button>
        </div>
      </div>
    </form>

</template>

<script>

const initChoices = () => {
  return {
    state: '',
    issue: '',
  };
};

export default {
  props: {
    states: Array,
    issues: Array,
    onAdd: Function
  },
  data() {
    return {
      choice: initChoices(),
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.choice);
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

/* .button-container {
  margin-top: 50px;
  text-align:center;
} */
.flex-box{
  display:flex;
}
</style>