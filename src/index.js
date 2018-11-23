import "p5";

import "./style.css";

window.setup = () => {
  createCanvas(windowWidth, windowHeight);
  frameRate(3);
};

window.draw = () => {
  background(156);
};

window.windowResized = () => {
  resizeCanvas(windowWidth, windowHeight);
};
