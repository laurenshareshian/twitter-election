<template>
<section>
<ChoicesForm :on-add="handleAdd"> </ChoicesForm>
<Politicians :state="state"
             :pol1="pol1"
             :pol2="pol2"></Politicians>
</section>
</template>

<script>
import Tweet from './Tweet';
import ChoicesForm from './ChoicesForm.vue';
import Politicians from './Politicians.vue';
import api from '../../services/api';
export default {
  data() {
    return { 
      tweets: null,
      filtered_tweets: null,
      stateChoice: null,
      issueChoice: null,
      state: null,
      issue: null,
      pol1: null,
      pol2: null
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
  components: { 
    ChoicesForm,
    Politicians,
  },
  methods: {
    handleAdd(choice) {
      console.log(choice);
      this.stateChoice = choice.state;
      this.issueChoice = choice.issue;
      console.log('choice', choice);
      this.findPoliticians();
      this.findIssueKeywords();
      return choice;
    }, 
    findPoliticians(){
      this.state = this.states[this.stateChoice - 1].name;
      this.pol1 = this.states[this.stateChoice - 1].pol1;
      this.pol2 = this.states[this.stateChoice - 1].pol2;
      console.log(this.state, this.pol1, this.pol2);
    },
    findIssueKeywords(){
      this.issueKeywords = this.issues[this.issueChoice - 1].searchTerms;
      console.log(this.issueKeywords);
    },
    filterTweets(tweets) {
      let filtered_tweets = [];
      for(let i = 0; i < tweets.length; i++){
        let tweet = tweets[i].text;
        let words = tweet.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').split(' ');
        if(words.some(r=> ['gun', 'guns', 'nra'].indexOf(r) >= 0)){
          filtered_tweets.push(tweet);
        }
      }
      return filtered_tweets;
    }
  }
};
</script>

<style>
.flex-box{
  display: flex;
  justify-content: space-around;
}
</style>