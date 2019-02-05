let currentSlide = 0;
let cube = [];
let mousePressText = [];
let go;
let canvas;
let enter;
let slide1go;
let cubeHide;
let line1;
let index = 0;
let index10 = 0;
let line2;
let words = ['sitting', 'clicking', 'reading', 'waiting', 'thinking', 'clicking', 'breathing', 'waiting', 'blinking', 'waiting', 'listening', 'sitting', 'waiting', 'sitting', 'sitting', ];
let plane1;
let x;
let y;
let backgroundColor;
let line3;
let index2;
let rotateSize;
let line4;
let line4Pos;
let line4PosGrow;
let planeMove;
let planeM;
let planeMtext;
let line5;
let line6;
let index3 = 0;
let index4 = 0;
let index5 = 0;
let helvetica;
let leftarrow = 0;
let rightarrow = 0;
let indexStrings = 0;
let index6 = 0;
let blackText;
let rectX;
let rectY;
let boxes;
let mirror;
let light;
let mirrorMove;
let words2 = ['writing', 'writing this', 'writing this string', 'on yellow sticky notes', 'writing this array', 'in yellow setup sections', 'wondering', 'what it would mean to feel whole', 'what it could feel to be whole', 'what i could be when we were whole', 'wondering how you look at me naked', 'do you see a set of parts', 'of an ikea wardrobe', 'bleached birch and middle class', 'yearning for the ordinary', ];

function preload() {
	helvetica1 = loadFont('light.otf');
	mirror = loadImage('mirror.jpg');
	motherboard = loadImage('motherboard.jpg');
	fence = loadImage('fence.jpg');
	helvetica = loadImage('helvetica.png', 200, 200);
	light = loadImage('light.jpg');

}

function setup() {

	canvas = createCanvas(600, 600, WEBGL);
	line4pos = 0;
	mirrorMove = false;
	line4posGrow = false;
	planeM = 0;
	rotateSize = HALF_PI;
	canvas.position(0, 0);
	for (let i = 0; i < 10; i++) {
		cube.push(new Cube())

	}
	
}

function draw() {
	background(255);


	if (currentSlide == 0) {
		slide0();
		donut();
		planeFloor();
	} else if (currentSlide == 1) {
		slide1();
		planeFloor();
	} else if (currentSlide == 2) {
		slide2();
	} else if (currentSlide == 3) {
		slide3();
	} else if (currentSlide == 4) {
		slide4();
	} else if (currentSlide == 5) {
		slide5();
	} else if (currentSlide == 6) {
		slide6();
	} else if (currentSlide == 7) {
		slide7();
	} else if (currentSlide == 8) {
		slide8();
	} else if (currentSlide == 9) {
		slide9();
	} else if (currentSlide == 10) {
		slide10();
	} else if (currentSlide == 11) {
		slide11();
	} else if (currentSlide == 12) {
		slide12();
	}
	 else if (currentSlide == 13) {
		slide13();
	}
	 else if (currentSlide == 14) {
		slide14();
	}
	
	 else if (currentSlide == 15) {
		slide15();
	}
	 else if (currentSlide == 16) {
		slide16();
	}



}

function keyPressed() {

	if (keyCode === LEFT_ARROW) {
		index = index + 1;
		line4posGrow = !line4posGrow;
		if (currentSlide == 9) {
			index10 = index10 + 1;
		} else if (currentSlide == 6) {
			leftarrow = leftarrow + 5;
		}
		else if (currentSlide == 5) {
			index3 = index3 + 1;
		}
	}
	if (keyCode === RIGHT_ARROW) {
		index4 = index4 + 1;
		if (currentSlide == 6) {
			rightarrow = rightarrow + 5;
			index6 = index6 + 1;
		}
		if (currentSlide == 13) {	
		indexStrings = indexStrings + 1;
		}

	}
	if (keyCode === UP_ARROW) {
		index5 = index5 + 1;
		if (currentSlide === 10) {
			index10 = index10 + 1;
		}
		if (currentSlide === 1) {
			mirrorMove = !mirrorMove;
		}
	}

	if (keyCode === DOWN_ARROW) {
		line4pos = line4pos + 15;

	}
}

function mousePressed() {
	let numberOfSlides = 17
	currentSlide = (currentSlide + 1) % numberOfSlides;
	//currentSlide = int(random(0,16));

}


function planeFloor() {
	//floor
	push();
	let locX = mouseX - height / 2;
  	let locY = mouseY - width / 2;
	pointLight(255, 255, 255, locX, locY, 100);
  	ambientLight(130, 100, 100);
	translate(0, 275);
	rotateX(HALF_PI);
	noStroke(0);
	specularMaterial(150);
	plane(width, height);
	pop();
}

function donut() {
	strokeWeight(0.1);
	stroke(255, 175, 175);
	fill(255, 200, 200);
	torus(10, 3, 24, 16);
	stroke(10);
	strokeWeight(0.25);
	//line(-100, -100, -100, 100, 100, 100);
	//line(100, 100, 100, -100, -100, 100);
}


function slide0() {
	background(255);
	push();
	for (let i = 0; i < cube.length; i++) {
		cube[i].display();
		cube[i].grow();
	}
	rotateX(frameCount * 0.0025);
	rotateY(frameCount * 0.0025);
	pop();



}

function slide1() {
	push();
	background(255);
	//rotateZ(frameCount * 0.02);
	if (mirrorMove === true) {
		rotateY(frameCount * 0.002);
		rotateZ(frameCount * 0.005);
	}
	noStroke();
	translate(-5, -65);
	//fill(220, 150, 150);
	fill(255,240,240);
	plane(width - width / 3 - 15, height - height / 3.5);
	push();
	translate(-width / 8, 0, 0);

	line1 = createGraphics(200, 200);
	line1.fill(0);
	line1.textAlign(CENTER);
	line1.textFont(helvetica1);
	line1.text('she sat there', 110, 10);
	// line1.background(255);
	texture(line1);
	plane1 = plane(200, 200);
	push();
	translate(15, -40, 0);
	line5 = createGraphics(200, 200);
	line5.fill(0);
	line5.textAlign(CENTER);
	line5.textFont(helvetica1);
	line5.text("i'm sitting here", 120, 100);
	texture(line5);
	plane1 = plane(200, 200);
	pop();
	pop();
	push();
	translate(0, -25, 0);
	line2 = createGraphics(200, 200);
	line2.fill(0);
	line2.textAlign(CENTER);
	line2.textFont(helvetica1);
	line2.text(words[index], 60, 50);
	texture(line2);
	plane(200, 200);
	pop();
	push();
	translate(-35, 10, 0);
	line6 = createGraphics(200, 200);
	line6.fill(0);
	line6.textAlign(CENTER);
	line6.textFont(helvetica1);
	line6.text(words2[index], 100, 70);
	texture(line6);
	plane(200, 200);
	pop();
	push();
	translate(220, -100, 0);
	line7 = createGraphics(200, 200);
	line7.fill(0);
	line7.textAlign(CENTER);
	line7.textFont(helvetica1);
	line7.text('left then up', 110, 10);
	// line1.background(255);
	texture(line7);
	plane1 = plane(200, 200);
	pop();
	pop();
}



function slide2() {
	push();
	//ambientLight(0, 255, 255, mouseY, mouseY,1);
	//directionalLight(0, 250, 250, width/2, 300,1);
	ambientMaterial(0, 180, 255, 50);
	//planes
	noStroke();
	push();
	translate(0, -2);
	plane(width - (width / 4 + 10), height - (height / 4 + 10));
	pop();
	push();
	ambientMaterial(150, 250, 245);
	translate(0, 1000);
	rotateX(HALF_PI);
	plane(width, height + 100);
	pop();

	//box text
	push();
	translate(25, 100);
	rotateX(frameCount * 0.007);
	rotateY(frameCount * 0.001);
	rotateZ(frameCount * 0.001);
	line3 = createGraphics(200, 200);
	line3.textFont(helvetica1);
	line3.fill(0);
	line3.textAlign(CENTER);
	line3.text('what might have been lost', 100, 50);
	texture(line3);
	box(200, 200, 200);
	pop();
	//plane text
	push();
	translate(0, line4pos - 130);
	line4 = createGraphics(300, 300);
	line4.fill(0);
	line4.textAlign(CENTER);
	line4.textFont(helvetica1);
	line4.text('pressing down towards', 100, 50);
	texture(line4);
	plane(300, 300);
	pop();
	pop();


}

function slide3() {
	push();
	background(255);
	push();
	planeM = planeM + 0.7;
	planeMtext = createGraphics(200, 200);
	planeMtext.fill(0);
	planeMtext.textAlign(CENTER);
	//planeM.textFont(helvetica1);
	planeMtext.text("leaving", 100, 100);
	texture(planeMtext);
	//rotateY(-2.2);
	rotateY(1.1);
	translate(-145, 0, planeM - 200);
	plane(200, 200);
	pop();
	push();
	translate(0, 275);
	rotateX(HALF_PI);
	ambientMaterial(0);
	plane(width, height);
	pop();
	push();
	translate(220, -170, 0);
	line7 = createGraphics(200, 200);
	line7.fill(0);
	line7.textAlign(CENTER);
	line7.textFont(helvetica1);
	line7.text('no control', 110, 10);
	// line1.background(255);
	texture(line7);
	plane1 = plane(200, 200);
	pop();
	pop();
}

function slide4() {
	push();
	background(255);
	push();
	rotateX(mouseX);
	rotateY(mouseY);
	translate(-100, -100);
	//rotateY(frameCount * 0.0025);
	for (let i = 0; i < cube.length; i++) {
		cube[i].display();
	}
	pop();

	let text1;
	text1 = createGraphics(200, 200);
	text1.fill(0);
	text1.textAlign(CENTER);
	text1.textFont(helvetica1);
	text1.text("the fragments can come together", 100, 70);
	texture(text1);
	plane(200, 200);
	let text2;
	translate(0, -50);
	text2 = createGraphics(200, 200);
	text2.fill(0);
	text2.textAlign(CENTER);
	text2.textFont(helvetica1);
	text2.text("maybe that is where", 100, 70);
	texture(text2);
	plane(200, 200);
	push();
	translate(220, -120, 0);
	line7 = createGraphics(200, 200);
	line7.fill(0);
	line7.textAlign(CENTER);
	line7.textFont(helvetica1);
	line7.text('no control', 110, 10);
	// line1.background(255);
	texture(line7);
	plane1 = plane(200, 200);
	pop();
	pop();
}


function slide5() {
	background(255);
	push();
	rotateX(mouseX);
	rotateY(mouseY);
	translate(400, 400);
	//rotateY(frameCount * 0.0025);
	for (let i = 0; i < cube.length; i++) {
		cube[i].display();
	}
	pop();

	let text1;
	text1 = createGraphics(200, 200);
	text1.fill(0);
	text1.textFont(helvetica1);

	text1.textAlign(CENTER);
	text1.text("the fragments can come together", 100, 70);
	texture(text1);
	plane(200, 200);
	let text2;
	translate(0, -50);
	text2 = createGraphics(200, 200);
	text2.fill(0);
	text2.textFont(helvetica1);

	text2.textAlign(CENTER);
	text2.text("maybe that is where", 100, 70);
	texture(text2);
	plane(200, 200);
	let text3;
	let ikea = [" ", "did ikea send you", "the instructions like subtitles", "while you watch me", "assemble parts of me", ];
	translate(30, 100);
	text3 = createGraphics(200, 200);
	text3.fill(0);
	text3.textFont(helvetica1);

	text3.textAlign(CENTER);
	text3.text(ikea[index3], 100, 70);
	texture(text3);
	plane(200, 200);
	let laptop = [" ", "i bought a new laptop", "which arrived 72 hours ago.", "Today i opened it and felt", "like a woman;", "I spent $300 for all of my old files", "from my old computer.", "they're placed inside a black box", "-like a time capsule or something-", "i received this box 2 months ago", "and I haven't opened it", ];
	translate(30, 120);
	let text4;
	text4 = createGraphics(200, 200);
	text4.fill(0);
	text4.textFont(helvetica1);

	text4.textAlign(CENTER);
	text4.text(laptop[index4], 100, 70);
	texture(text4);
	plane(200, 200);
	let open = ["", "i haven't opened it because", "maybe", "i don't want to be whole", "and becoming", "and in debt to my past", "i am living between computers", "worrying", "and afraid that i will", "never be able to recover", "myself", "when i forget my password", ];
	let text5 = createGraphics(200, 200);
	translate(-150, -75);
	text5.fill(0);
	text5.textFont(helvetica1);

	text5.textAlign(CENTER);
	text5.text(open[index5], 100, 70);
	texture(text5);
	plane(200, 200);
	push();
	translate(310, -265, 0);
	line7 = createGraphics(200, 200);
	line7.fill(0);
	line7.textFont(helvetica1);

	line7.textAlign(CENTER);
	line7.text('left, right, up', 110, 10);
	// line1.background(255);
	texture(line7);
	plane1 = plane(200, 200);
	pop();
}

function slide6() {
	directionalLight(255);
	let j;
	push();
	rotateX(frameCount * 0.0025);
	rotateY(frameCount * 0.0025);
	translate(rightarrow, leftarrow);
	for (let i = 0; i < cube.length; i++) {
		cube[i].display();
		cube[i].grow();
	}
	pop();

	if (leftarrow >= 30) {
		ambientMaterial(0);
		noStroke();
		//	box(100,100,100);
		rotateZ(frameCount * 0.005);
		for (j = 1; j < 10; j++) {
			translate(-10, -10);
			box(j, j, j);
		}

		blackText = createGraphics(200, 200);
		blackText.fill(0);
		blackText.textAlign(LEFT);
		blackText.textFont(helvetica1);

		blackText.text("i'm sitting here in this black box", 10, 10);
		texture(blackText);
		translate(0, 10);
		box(200, 200, 200);

	}
	push();
	translate(230, -170, 0);
	line7 = createGraphics(200, 200);
	line7.fill(0);
	line7.textAlign(CENTER);
	line7.textFont(helvetica1);

	line7.text('left, right', 110, 10);
	// line1.background(255);
	texture(line7);
	plane1 = plane(200, 200);
	pop();
}






function slide7() {
	// background(255);
	stroke(225, 200, 225);
	push();
	noFill();
	let rX = map(mouseX, 0, width, -0.025, 0.025);
	let x = 0;
	let y = 0;
	let rectX;
	let rectY;
	rectX = width / 10;
	rectY = height / 5;

	for (x = 0; x <= width; x += rectX) {
		for (y = 0; y <= height; y += rectY) {
			rotateX(rX);
			rotateY(rX);
			plane(x, y);
			plane(rectX, rectY);
		}
	}
	pop();
	let text1 = createGraphics(400, 400);
	text1.fill(0);
	text1.textAlign(CENTER);
	text1.textFont(helvetica1);

	text1.text("writing this on big, elementary sized lines", 110, 100);
	texture(text1);
	translate(-50, 0);
	plane(400, 400);
	let text2 = createGraphics(400, 400);
	text2.fill(0);
	text2.textFont(helvetica1);

	text2.textAlign(CENTER);
	text2.text("and i know these will be typed and i know", 110, 100);
	texture(text2);
	translate(0, 15);
	plane(400, 400);
	let text3 = createGraphics(400, 400);
	text3.fill(0);
	text3.textFont(helvetica1);

	text3.textAlign(CENTER);
	text3.text("my font selection will make", 110, 100);
	texture(text3);
	translate(-40, 15);
	plane(400, 400);
	let text4 = createGraphics(400, 400);
	text4.fill(0);
	text4.textFont(helvetica1);

	text4.textAlign(CENTER);
	text4.text("or break the unraveling", 110, 100);
	texture(text4);
	translate(-5, 15);
	plane(400, 400);
	let text5 = createGraphics(400, 400);
	text5.fill(0);
	text5.textFont(helvetica1);

	text5.textAlign(CENTER);
	text5.text("of moments in my head", 110, 100);
	texture(text5);
	translate(100, 15);
	plane(400, 400);
	let text6 = createGraphics(400, 400);
	text6.fill(0);
	text6.textFont(helvetica1);

	text6.textAlign(CENTER);
	text6.text("in our head box", 110, 100);
	texture(text6);
	translate(100, 15);
	plane(400, 400);
	let text7 = createGraphics(400, 400);
	text7.fill(0);
	text7.textFont(helvetica1);

	text7.textAlign(CENTER);
	
	text7.text("between arrows that will", 110, 100);
	texture(text7);
	translate(100, 15);
	plane(400, 400);
	let text8 = createGraphics(400, 400);
	text8.fill(0);
	text8.textFont(helvetica1);

	text8.textAlign(CENTER);
	text8.text("take you forward or behind", 110, 100);
	texture(text8);
	translate(100, 15);
	plane(400, 400);
}

function slide13 ()  {
  background(255);
		fill(255,0,0);
	
	let text4 = createGraphics(200,200);
	text4.textAlign(CENTER);
		text4.textFont(helvetica1);

	text4.text('right',150,50);
	push();
	texture(text4);
	translate(200,-220);
	plane(200,200);
	pop();
	
	let strings = ["and i thought", "about it for", "six and a half days", "before admitting", "that, to me,"];
	let six = createGraphics(200,200);
	six.textAlign(CENTER);
		six.textFont(helvetica1);
	six.text(strings[indexStrings],150,50);
	if (mouseX > 400 && mouseY < 300){
	push();
	texture(six);
	translate(150,-100);
	plane(200,200);
	pop();
	}
	let text1 = createGraphics(200,200);
	text1.textAlign(CENTER);
	text1.textFont(helvetica1);
	text1.text('my instructor asked me',100,50);
	let text2 = createGraphics(200,200);
	text2.textAlign(CENTER);
	text2.textFont(helvetica1);
	text2.text('to consider the most domestic thing',100,50);
	let text3 = createGraphics(200,200);
	text3.textAlign(CENTER);
	text3.textFont(helvetica1);
	text3.text('like a pillow or a toothbrush',100,50);
	if (mouseX <=255 && mouseY >=400) {
	push();
	texture(text1);
	translate(-220,200);
	plane(200,200);
	translate(30,15);
	texture(text2);
	plane(200,200);
	translate(-20,15);
	texture(text3);
	plane(200,200);
	pop();
		
	}
	
	noFill();
	strokeWeight(1);
	stroke(0);
	for (let i = 0; i < 100; i++) { 
	let x = map(10, 0, width, -15,15);
	let y = map(10, 0, height, -15,15);
	translate(x,y);
	translate(i,i);
	box(200,200,200);
		push();
		rotateY(frameCount * 0.015);
		box(100,5,5);
		pop();
	}
}

function slide14 () {
background(255);
	stroke(0);
	fill(0);

	if (((mouseX >= 327) || (mouseX <252)) && (mouseY > 358) || (mouseY < 262)) {
		
		
	let house = ["domesticity is where", "no one is allowed", "to touch me", "or see me", "or hear me"];
	for (let i = 0; i < house.length; i++){
	let domestic = createGraphics(200,200);
	domestic.textAlign(LEFT);
	domestic.textFont(helvetica1);
	domestic.text(house[i],25,50);
	texture(domestic);
	
	translate(0,15);
	plane(200,200);
		
	}
}
	
}

function slide15() {
 
  background(255);
		let x = map(mouseX, 0, width, -100,100);

	let words = ["a place where all of my", "human movement","is just a piece","in the forgotten abyss","like the arcane bits of the internet","or an exceptionally designed","single stall bathroom"];
	for (let i = 0; i < words.length; i++) { 
	translate(x,20);
	let texts = createGraphics (200,200);
		texts.textFont(helvetica1);	
	texts.text(words[i], 50, 50);
	texts.textAlign(LEFT);
	texture(texts);
			if (mouseY>200) { 
	words.splice(0,words.length); 
} 
	else if (mouseY>75) {
		words.splice(0,1);
	}
	plane(200,200);
	push();
	translate(100,100);
	plane(75,75);
		pop();
		push();
		translate(-200,-100);
	plane(75,75);
		pop()
	}

}

function slide16 () {
	let words = ["i can feel the parts of me", "collect there","wanting to become","a chair or a toothbrush","and delighting in the ordinary"];
	for (let i = 0; i < words.length; i++) { 
	translate(0,20);
	let texts = createGraphics (200,200);
	texts.textFont(helvetica1);	
	texts.text(words[i], 10, 50);
	texts.textAlign(LEFT);
	texture(texts);
	plane(200,200);
	}
	push();
	translate(-50,-100,0);
	rotateY(frameCount * 0.005);
	rotateX(frameCount*0.0025);
	noFill();
	stroke(255,225,225,50);
	strokeWeight(1);
	box(100,100,500);
	pop();
	
	
}
