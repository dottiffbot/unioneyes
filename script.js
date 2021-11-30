let eyes;
let pixelNum = 7;
let startX = 0;
let startY = 0;


function preload(){
    eyes = loadImage('./assets/eyes.jpg')
}
function setup(){
  eyes.loadPixels();
  // eyes.resize(windowWidth, 0);
  eyes.updatePixels();

}

function draw(){

  for(let startY = 0; startY < eyes.height; startY++){
    for (let startX = 0; startX < eyes.width; startX++){
      
      let index = (startX+ startY* eyes.width) *4;
      
      let r = eyes.pixels[index];
      let g = eyes.pixels[index +1];
      let b = eyes.pixels[index + 2];
      
      fill(r, g, b)
      rectMode(CENTER);
      rect(startX, startY, pixelNum , pixelNum);
  }
  startX = startX + pixelNum - 1
}

startY = startY + pixelNum - 1

}