// a vue instance with data and methods sections
const app = Vue.createApp({
  mounted(){
      this.$refs.textEditor.focus()      
    },
  
    data() {
      return {  
        textEditor:'beyonce plays texas;',
        url:[], 
        errorConsole: ''

      }
    }, 
  methods:{
    evaluate
  }
  })

 app.mount('#app')


//  function
function evaluate() {
    const grammar = `
    
        sentenceOrEmptySentence = sentence/emptySentence
 
 sentence = (whitespace artist:artist whitespace action:action whitespace 
           video:video semicolon whitespace newline {return video})+
             
emptySentence = whitespace {return []}

  //  sentence parts / dictionary
  
        artist = "beyonce"/"queen"
        action = "plays"/"sings"     
        video = "texas" {return "https://www.youtube.com/embed/238Z4YaAr1g?autoplay=1&controls=0"} /     
        "Bohemian Rhapsody" {return "https://www.youtube.com/embed/fJ9rUzIMcZQ?autoplay=1&controls=0"}
        whitespace = (" ")*
        semicolon = ";"
        newline = ("\\n")*

    `
    try {
        const parser = peggy.generate(grammar);
        this.url = parser.parse(this.textEditor);
        this.errorConsole = '';
    } catch (error) {
        this.errorConsole = "Error:" + error.message
    }
}