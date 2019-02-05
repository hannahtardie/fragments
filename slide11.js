function slide11() {
	//rotateZ(frameCount * 0.025);

	push();
	translate(-200, -height / 3);
	rotateX(frameCount * 0.005);
	rotateY(frameCount * 0.005);
	let will = createGraphics(200, 200);
	will.fill(255);
	will.textAlign(CENTER);
	will.textSize(64);
	will.textFont(helvetica1);

	will.text("will", 100, 50);
	texture(will);
	box(100, 100, 100);
	pop();
	push();
	translate(0, -height / 3);
	rotateY(frameCount * 0.005);
	rotateX(frameCount * 0.005);
	let you = createGraphics(200, 200);
	you.fill(255);
	you.textAlign(CENTER);
	you.textSize(64);
	you.textFont(helvetica1);

	you.text("you", 100, 50);
	texture(you);
	box(100, 100, 100);
	pop();
	push();
	translate(200, -height / 3);
	rotateX(frameCount * 0.005);
	rotateY(frameCount * 0.005);
	let ever = createGraphics(200, 200);
	ever.fill(255);
	ever.textAlign(CENTER);
	ever.textSize(64);
	ever.textFont(helvetica1);

	ever.text("ever", 100, 50);
	texture(ever);
	box(100, 100, 100);
	pop();
	push();
	translate(-200, 0);
	rotateX(frameCount * 0.005);
	rotateY(frameCount * 0.005);
	let read = createGraphics(200, 200);
	read.fill(255);
	read.textAlign(CENTER);
	read.textSize(64);
	read.textFont(helvetica1);

	read.text("read", 100, 50);
	texture(read);
	box(100, 100, 100);
	pop();
	push();
	translate(0, 0);
	rotateX(frameCount * 0.005);
	rotateY(frameCount * 0.005);
	let this1 = createGraphics(200, 200);
	this1.fill(255);
	this1.textAlign(CENTER);
	this1.textSize(64);
	this1.textFont(helvetica1);

	this1.text("this", 100, 50);
	texture(this1);
	box(100, 100, 100);
	pop();
	push();
	translate(200, -0);
	rotateX(frameCount * 0.005);
	rotateY(frameCount * 0.005);
	let and = createGraphics(200, 200);
	and.fill(255);
	and.textAlign(CENTER);
	and.textSize(64);
	and.textFont(helvetica1);

	and.text("and", 100, 50);
	texture(and);
	box(100, 100, 100);
	pop();
	push();
	translate(-110, 225);
	let remember = createGraphics(200, 200);
	remember.fill(0);
	remember.textAlign(CENTER);
	remember.textSize(12);
	remember.textFont(helvetica1);

	remember.text("remember what it is like", 100, 50);
	texture(remember);
	plane(200, 200);
	pop();
	push();
	translate(132, 400);
	let know = createGraphics(500, 500);
	know.fill(0);
	know.textAlign(CENTER);
	//know.textSize(12);
	know.textFont(helvetica1);

	know.text("to get to know someone out of emotional luxury", 200, 25);
	texture(know);
	plane(500, 500);
	pop();
}

function slide12() {
	let words = ["the feeling of smiling", "when you can't decide", "if you want to say something", "or keep listening", "to the sound of their voice", ];
	for (let i = 0; i < words.length; i++) {
		let x = map(mouseX, 0, width, -15, 15);
		let y = map(mouseY, 0, height, -15, 15);
		translate(x, y);
		let texts = createGraphics(200, 200);
		texts.textFont(helvetica1);

		texts.text(words[i], 10, 50);
		texture(texts);
		plane(200, 200);
	}
}

