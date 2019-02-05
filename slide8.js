function slide8() {
	
	push();
	background(255);
	//set variables for column and row
	rectX = width / 10;
	rectY = height / 5;


	for (let a = 0; a <= width; a += rectX) {
		for (let b = 0; b <= height; b += rectY) {

			boxes = createGraphics(a, b);
			boxes.fill(0);
			boxes.textAlign(CENTER);
			boxes.textFont(helvetica1);

			boxes.text("here", rectX, b);
			boxes.text("i'm", rectX, rectY);
			texture(boxes);
			translate(-10, 0);
			plane(a, b);
			plane(rectX, rectY);
		}
	}
	// pop();
	// push();
	// translate(100, 0);
	// //rotateX(frameCount * 0.05);
	// //rotateY(frameCount * 0.05);
	// texture(helvetica);
	// plane(350, 250);
	// pop();
}



function slide9() {

	
	let text1 = createGraphics(400, 400);
	text1.fill(0);
	text1.textAlign(CENTER);
	text1.textFont(helvetica1);
	text1.text("wondering if anyone will ever read this", 110, 100);

	texture(text1);
	translate(100, 15);
	plane(400, 400);
	let text2 = createGraphics(400, 400);
	text2.fill(0);
	text2.textAlign(CENTER);
	text2.textFont(helvetica1);

	text2.text("will anyone ever read this and laugh", 110, 100);
	texture(text2);
	translate(-5, 15);
	plane(400, 400);
	let text3 = createGraphics(400, 400);
	text3.fill(0);
	text3.textFont(helvetica1);

	text3.textAlign(CENTER);
	text3.text("because their", 110, 100);
	texture(text3);
	translate(-60, 15);
	plane(400, 400);
	let text4 = createGraphics(400, 400);
	text4.fill(0);
	text4.textFont(helvetica1);

	text4.textAlign(CENTER);
	text4.text("are their wholeness", 110, 100);
	texture(text4);
	translate(15, 15);
	plane(400, 400);
	let list = ["limbs", "jobs", "families", "laptops", "files", "instagrams", "first kisses", "hours in therapy", "ice cream", "wiggling toes", "iCloud passwords", "heartbreak", "vibrating phones", "works of art", "clean underwear", "childhood street", "mouse clicks", ];
	let text5 = createGraphics(400, 400);
	text5.fill(0);
	text5.textFont(helvetica1);

	text5.textAlign(CENTER);
	text5.text(list[index10], 110, 100);
	texture(text5);
	translate(70, -15);
	plane(400, 400);
	push();
	translate(110, -215, 0);
	line7 = createGraphics(200, 200);
	line7.fill(0);
	line7.textFont(helvetica1);
	line7.textAlign(CENTER);
	line7.text('left', 110, 10);
	// line1.background(255);
	texture(line7);
	plane1 = plane(200, 200);
	pop();
	
}

function slide10() {
	
	background(255);

	// push();
	// translate(200, 0);
	// rotateX(frameCount * 0.5);
	// rotateZ(frameCount * 0.1);
	// texture(fence);
	// box(70, 75, 30);
	// pop();
	//set variables for column and row
	rectX = width / 10;
	rectY = height / 5;


	for (let a = 0; a <= width; a += rectX) {
		for (let b = 0; b <= height; b += rectY) {

			boxes = createGraphics(a, b);
			boxes.fill(0);
			boxes.textAlign(CENTER);
			boxes.textFont(helvetica1);

			boxes.text("me", rectX, b);
			boxes.text("you", rectX, rectY);
			//boxes.text("wondering", rectX,rectY-x);
			texture(boxes);

			plane(a, b);
			plane(rectX, rectY);
		}
	}

}