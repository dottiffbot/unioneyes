
let r;
let g;
let b;



function setup(){
	createCanvas(windowWidth, windowHeight);

}

function draw(){

	let r = random(255);
	let b = random(255);
	let g = random(255);

	fill(r,g,b);

	for (let x = 0; x < 20; x++){
		for (let y = 0; y < 20; y++){

			rext(x * 20, y *20, 20, 20);
		}
	}

}