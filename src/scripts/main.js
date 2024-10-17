import "../styles/styles.css";
//import "@picocss/pico/css/pico.min.css";
import Aos from "aos";
import "aos/dist/aos.css";

import Particles from "particlesjs";
console.log("Imported", Particles);
var particles = Particles.init({
  selector: ".background",
  color: ["magenta", "#7c4478", "pink", "orange", "teal", "#0033a0"],
  connectParticles: false,
  sizeVariation: 1000,
  maxParticles: 1000,
  responsive: [
    {
      breakpoint: 800,
      options: {
        color: "#00C9B1",
        maxParticles: 80,
        connectParticles: false,
      },
    },
  ],
});

console.log("Running?", particles);
console.log("What?");
console.log("Hello world, from main.js!");

Aos.init()
 