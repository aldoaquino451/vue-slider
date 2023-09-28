/*
  1. Salvo in dati in data(){return{}} con tutte le informazioni per ogni immagine 
  2. Per l'immagine principale inserisco nel tag img le varibili richiamate con la direttiva v-bind, verrà stampata l'immagine in base al counter
  3. Per le thumbs faccio la stessa cosa ma le ciclo contemporaneamente tutte e cinque con la direttiva v-for così che vengano stampate tutte insieme
*/

const { createApp } = Vue

createApp ({

  data() {
    return {
      images: [
        {
          source: './img/cyberpunk.jpg',
          title: 'Cyberpunk 2077',
          text: 'Cyberpunk 2077 è un videogioco sparatutto in prima persona di genere action RPG e open world, sviluppato da CD Projekt RED e pubblicato da CD Projekt',
        }, 
        {
          source: './img/elder-ring.webp',
          title: 'Elder Ring',
          text: 'E\' un videogioco action RPG sviluppato dalla software house giapponese FromSoftware e pubblicato da Bandai Namco Entertainment. Il videogioco, diretto da Hidetaka Miyazaki, è stato realizzato in collaborazione con George R. R. Martin, autore statunitense di fantasy noto soprattutto per il ciclo di romanzi Cronache del ghiaccio e del fuoco.',
        }, 
        {
          source: './img/zelda.jpg',
          title: 'The Legend of Zelda: Breath of the Wild',
          text: 'E\' un videogioco action-adventure del 2017, sviluppato da Nintendo EPD e pubblicato da Nintendo per Nintendo Switch e Wii U. Si tratta del diciottesimo capitolo della celebre saga di videogiochi The Legend of Zelda.',
        }, 
        {
          source: './img/last-of-us.jpg',
          title: 'The Last of Us Parte II',
          text: 'E\' un videogioco di avventura dinamica, a sfondo post-apocalittico, sviluppato dalla casa di produzione Naughty Dog in esclusiva per PlayStation 4. È il sequel di The Last of Us e si svolge cinque anni dopo quest\'ultimo.',
        },
        {
          source: './img/portal.jpg',
          title: 'Portal 2',
          text: 'Portal 2 è un videogioco rompicapo, pubblicato nel 2011 da Valve Corporation per varie piattaforme',
        },
      ],

      counter: 0
    }
  },

  methods: {
    netxPrev(isNetx) {
      const max = this.images.length - 1;
      isNetx ? this.counter++ : this.counter--;
      if ( this.counter >  max )  this.counter = 0;
      if ( this.counter < 0)      this.counter = max; 
    }
    
  },

  // mounted() {
    // this.loggare()

  //   // console.log(this.imageArr)
  // }


}).mount('#app')