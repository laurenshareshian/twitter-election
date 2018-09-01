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
          <button type="submit">Add</button>
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
    onAdd: {
      type: Function,
    }
  },
  data() {
    return {
      states: null,
      choice: initChoices(),
      issues: null,
    };
  },
  created() {
    this.states = [
      { id: 1, name: 'Arizona', pol1: 'Republican Rep. Martha McSally', pol2: 'Democratic Rep. Kyrsten Sinema', twitter1: 'RepMcSally', twitter2: 'RepSinema' },
      { id: 2, name: 'California', pol1: 'Democratic incumbent Dianne Feinstein', pol2: 'Democratic challenger State Sen. Kevin de Leon', twitter1: 'SenFeinstein', twitter2: 'kdeleon' },
      { id: 3, name: 'Florida', pol1: 'Democratic incumbent Sen. Bill Nelson', pol2: 'Republican Gov. Rick Scott', twitter1: 'SenBillNelson', twitter2: 'FLGovScott' },
      { id: 4, name: 'Indiana', pol1: 'Democratic incumbent Sen. Joe Donnelly', pol2: 'Republican Mike Braun', twitter1: 'SenDonnelly', twitter2: 'braun4indiana' },
      { id: 5, name: 'Minnesota', pol1: 'Incumbent Democrat Tina Smith', pol2: 'Sen. Karin Housley', twitter1: 'SenTinaSmith', twitter2: 'KarinHousley' },
      { id: 6, name: 'Missouri', pol1: 'Incumbent Democrat Claire McCaskill', pol2: 'Republican State Attorney General Josh Hawley', twitter1: 'McCaskillOffice', twitter2: 'HawleyMO' },
      { id: 7, name: 'Montana', pol1: 'Incumbent Democrat Jon Tester', pol2: 'Republican Matthew Rosendale', twitter1: 'SenatorTester', twitter2: 'MattRosendale' },
      { id: 8, name: 'Nevada', pol1: 'Incumbent Republican Dean Heller', pol2: 'Democrat U.S. Rep. Jacky Rosen', twitter1: 'SenDeanHeller', twitter2: 'RepJackyRosen' },
      { id: 9, name: 'North Dakota', pol1: 'Incumbent Democrat Heidi Heitkamp', pol2: 'Republican U.S. Rep. Kevin Cramer', twitter1: 'SenatorHeitkamp', twitter2: 'RepKevinCramer' },
      { id: 10, name: 'Ohio', pol1: 'Incumbent Democrat Sherrod Brown', pol2: 'Republican U.S. Rep. Jim Renacci', twitter1: 'SenSherrodBrown', twitter2: 'RepJimRenacci' },
      { id: 11, name: 'Tennessee', pol1: 'Republican Rep. Marsha Blackburn', pol2: 'Democrat Phil Bredesen', twitter1: 'MarshaBlackburn', twitter2: 'PhilBredesen' },
      { id: 12, name: 'Texas', pol1: 'Incumbent Ted Cruz', pol2: 'Democratic U.S. Rep. Beto O’Rourke', twitter1: 'tedcruz', twitter2: 'RepBetoORourke' },
      { id: 13, name: 'Utah', pol1: 'Republican Mitt Romney', pol2: 'Democrat Jenny Wilson', twitter1: 'MittRomney ‏', twitter2: 'JennyWilsonUT' },
      { id: 14, name: 'Virgina', pol1: 'Incumbent Democrat Tim Kaine', pol2: 'Republican Corey Stewart', twitter1: 'timkaine', twitter2: 'CoreyStewartVA' },
      { id: 15, name: 'West Virgina', pol1: 'Incumbent Democrat Joe Manchin', pol2: 'Republican State Attorney General Patrick Morrisey', twitter1: 'Sen_JoeManchin', twitter2: 'MorriseyWV' },
      { id: 16, name: 'Wisconsin', pol1: 'Incumbent Democrat Tammy Baldwin', pol2: 'Republican Leah Vukmir', twitter1: 'tammybaldwin', twitter2: 'LeahVukmir' }
    ];

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
      console.log(this.choice);
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