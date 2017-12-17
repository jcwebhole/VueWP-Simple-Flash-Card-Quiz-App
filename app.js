const backend_endpoint = 'http://nqub8.com/projects/wpdemo';
const vm = new Vue({
  el: '#app',
  data: {
    results: [
    ],
    result: [],
    category:0,
    quiz:'',
    err:'',
    score: 0,
    ans: '',
    max: 5,
    counter: 0,
  },
    computed: {
      cards: function (){
        shuffled = this.results.sort(() => .5 - Math.random());// shuffle  
        return shuffled.slice(0,this.max); //get sub-array of first n elements AFTER shuffle
      }
  },
  methods: {
    getQuiz: function (event) {
    event.preventDefault();
    quiz=document.getElementById('quiz').value;
    this.results=[];
    //alert(quiz);
    console.log(backend_endpoint + "/wp-json/wp/v2/categories?slug="+quiz);
    axios.get(backend_endpoint + "/wp-json/wp/v2/categories?slug="+quiz)
    .then(response => {this.category = response.data[0].id
      console.log(backend_endpoint + "/wp-json/wp/v2/posts?categories="+this.category)
      axios.get(backend_endpoint + "/wp-json/wp/v2/posts?_embed&categories="+this.category)
      .then(response => {this.results = response.data; this.err=''; this.result = this.cards[0];})
      .catch( error => { console.log(error)});
    })
    .catch( error => { this.err = '404 Quiz Not Found!'})
    },
      rnd: function (event) {
        event.preventDefault();
        //alert('x');
        //location.reload();
        if(this.result){
          index = this.cards.indexOf(this.result);
          console.log(index);
          if(index!=-1) this.cards.splice(index,1);
        }
        if(!this.ans && this.result.title.rendered && this.result.id){
          console.log('No input: Correct answer is ' + this.result.title.rendered);
        }
        if(this.ans && this.result.title.rendered){
        //alert(this.ans);
        if(this.ans.toLowerCase()==this.result.title.rendered.toLowerCase()) {
          this.score++;
          console.log('Correct! It is ' + this.result.title.rendered);
        } else {
          console.log('Wrong: Correct answer is ' + this.result.title.rendered);
        }
        this.ans ='';
        } 
        this.result=this.cards[Math.floor(Math.random() * this.cards.length)];
        //if(this.result.title.rendered=="No more cards") location.reload();
        if(this.cards.length<=0) this.result=[];
        //this.score++;
        this.counter++;
        // this.ans.focus();
      },
      restart: function (event) {
        event.preventDefault();
        location.reload();
      }
  }

});