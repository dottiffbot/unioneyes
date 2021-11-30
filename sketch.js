
let martin;
let garaje;
let phrase;

let gradient;
let gradient2;

let eyes;
let vScale = 6;
let startX = 0;
let startY = 0;
let green = "#C9FD4E";

let workers;
let txt = "the workers are watching";

const workHours = document.querySelector("input.work")
const restHours = document.querySelector("input.rest")
const playHours = document.querySelector("input.play")

const lineOne = document.querySelector("input.line1")
const lineTwo = document.querySelector("input.line2")

let generate;



function preload(){

	garaje = loadFont('./assets/garaje.otf');


}

function setup(){

	createCanvas(windowWidth, windowHeight);
	textFont(garaje);
	textAlign(CENTER, CENTER);
	textSize(25);
	enterText();

	gradient = createRadialGradient(100, 200, width/2, height/2);
	gradient.colors(0.5, "white",0.75, "grey",1, "black");
	// gradient = createConicGradient(20, width/2, height/2.5);
	// gradient.colors(0, "#D08BFE", 0.5, "#019267", 0.75, green, 1, "#7302E3");


	// vScale = workHours.value;


    eyes = createCapture(VIDEO);
    eyes.size(width/vScale, height/vScale);
    eyes.hide();

    generate = createButton("generate");
    generate.mousePressed(saveSticker);

}

function saveSticker(){

	saveCanvas('unioneyes', 'png');
}
function mousePressed (){
	saveSticker();

}


function draw(){

background("#707070");

	// fill("#D08BFE");
	fillGradient(gradient);
	stroke(255);
	strokeWeight(3);
	ellipse(width/2, height/2, 600, 400);

/* eyes video*/


  push();
  translate(400, 255);
  eyes.loadPixels();
  loadPixels();
  
  
  for(let y = 0; y < eyes.height/4; y++){
    for (let x = 0; x < eyes.width; x++){
      
      let index = (eyes.width - x + 1 + (y * eyes.width)) *4;
      
      let r = eyes.pixels[index];
      let g = eyes.pixels[index +1];
      let b = eyes.pixels[index + 2];
  
      // bright = (r + b + g) /3;
      fill(r, g, b)
      noStroke();
      rect(x*vScale/2.75, y * vScale, vScale, vScale, 50);
    
    }

}
  pop();



  // let arcLength = 0;
  // workers = new Array(txt.length);

  // for(let i = 0; i < workers.length; i++){
  // 	// let currentChar = workers.charAt(i);
  // 	let w = textWidth(currentChar);

  // 	arcLength += w/2;
  // 	let theta = PI + arcLength /r;

  // 	push()

  // 	translate(r * cos(theta), r * sin(theta));
  // 	rotate(theta + PI/2);

  // 	fill(green)
  // 	noStroke()
  // 	text(currentChar, 0, 0);
  // 	pop()

  // 	arcLength += w/2;
  // }

  fill(green);
  noStroke();

  text(txt, 640, height -100);

/* pixel grid text */

	const gridTile = 10;

	for (let x = 0; x < 120; x++){

		for(let y = 0; y < 60; y++){


			const wave = workHours.value * 0.01
			// const wave = int(map(mouseX, 0, width, 1, height))

			const distortionX = sin(frameCount * wave + x * 0.5 + y * 0.1) * restHours.value/2
			const distortionY = cos(frameCount * wave + x * 0.5 + y * 1 ) * playHours.value/4

			const sx = x * gridTile + distortionX;
			const sy = y * gridTile + distortionY;
			const sw = gridTile;
			const sh = gridTile;

			const dx = x * gridTile;
			const dy = y * gridTile;
			const dw = gridTile;
			const dh = gridTile;

			    image(phrase, dx, dy, dw, dh, sx, sy, sw, sh);

		}

	}


}


function enterText(){

	phrase = createGraphics(windowWidth, windowHeight);
	const inputPhrase = lineOne.value + "\n" + lineTwo.value;


	phrase.textFont(garaje);
	phrase.textAlign(CENTER, CENTER);
	phrase.fill("#FD5908");

	phrase.strokeWeight(1);
	phrase.stroke("black");
	phrase.textSize(80);
	phrase.textLeading(80);
	phrase.text(inputPhrase, windowWidth/2, windowHeight/2);

}



function onWindowResize(){
	resizeCanvas(windowWidth, windowHeight);
}

lineOne.addEventListener("input", function (){
	enterText()
})

lineTwo.addEventListener("input", function(){
	enterText()
})
