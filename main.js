let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Actuaria en formación, con  especial interés por la programación y el análisis de datos')
  .pauseFor(200)
  .deleteChars(10)
  .start();
