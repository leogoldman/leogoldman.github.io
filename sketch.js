
let img;
let img_outline;
let scaleFactor = 0;
let min_scaleFactor = 0;
let overallscale = .25;
let subjectBottom;
let subjectLeft;
let minute_subject_bottom;
let minute_subject_left;
let dist_between_photos = .33;
let seconds_starting_x;
let minutes_starting_x;
let hour_scaleFactor = 0;

function preload() {
	img = loadImage('charmander_png.png');
	img_outline = loadImage('charmander_outline2.png');
	minute_img = loadImage('charmeleon.png');
	minute_outline = loadImage('charmeleon_outline.png');
	hour_img = loadImage('charizard.png');
	hour_img_outline = loadImage('charizard_outline.png');
}

function setup() {
	//img.loadPixels();
	let w = 1136;
	let h = 1320;
	createCanvas( 3.3*w*overallscale, h*overallscale ); // make an HTML canvas element width x height pixels
	subjectBottom = height * ( 1208 / img.height );
	subjectLeft = width * ( 74 / img.width );
	//subjectLeft = 74 * overallscale;
	minute_subject_bottom = height * (566 / minute_img.height);
	minute_subject_left = width * ( 176 / minute_img.width);

	seconds_starting_x = 2 * dist_between_photos * width;
	minutes_starting_x = dist_between_photos * width;

	hour_subject_bottom = height * ( 635 / hour_img.height );

}

function draw() {
  background(225);

  scaleFactor = map(second(), 0, 60, 0, 1);
  min_scaleFactor = map(minute(), 0, 60, 0, 1);
  hour_scaleFactor = map( hour(), 0, 24, 0, 1 );

  //hour image outline
  image( hour_img_outline, 0, 0,img.width * overallscale, img.height * overallscale );
  push();

  //hour image
  translate( 0, height - img.height * overallscale * hour_scaleFactor );
  scale(hour_scaleFactor);
  image(hour_img, 0, 0, img.width * overallscale, img.height * overallscale );
  pop();
  

  //minutes image outline
  let adj_minute_width = img.width;
  let adj_minute_height = img.height;
  image( minute_outline, minutes_starting_x, 0, adj_minute_width * overallscale, adj_minute_height * overallscale );
  push();

  //minutes image
  translate( minutes_starting_x + minute_subject_left * (1-min_scaleFactor), height - adj_minute_height * overallscale * min_scaleFactor );
  scale(min_scaleFactor);
  image( minute_img, 0, 0, adj_minute_width * overallscale, adj_minute_height * overallscale );
  
  pop();

  //seconds image outline
  image( img_outline, seconds_starting_x, 0, img_outline.width * overallscale, img_outline.height * overallscale );

  //seconds image
  translate( seconds_starting_x + subjectLeft * (1-scaleFactor), subjectBottom - subjectBottom * scaleFactor );
  scale(scaleFactor);
  image( img, 0, 0, img.width * overallscale, img.height * overallscale );

  scaleFactor += .01;
  scaleFactor = constrain( scaleFactor, 0, 1 )

}


// var xPos = 20; // starting x position to draw
// var yPos = 20;  // starting y position to draw
// var barHeight = 180; // height of each bar
// var barMargin = 10; // space between each bar
// var barMax = 760; // maximum width of each bar <-- this changes over time

// //this gets called only once in the very beginning
// function setup() {
// 	createCanvas(800,600);
// }

// //this gets called every frame (about 60 frames per second)
// function draw() {
//   background(0);
//   fill(255, 0, 0);

//   var h = map(hour(), 0, 24, 0, barMax); // Map the function hour() to values from 0 - barMax
//   var m = map(minute(), 0, 60, 0, barMax);
//   var s = map(second(), 0, 60, 0, barMax);

//   //draw 3 background bars to indicate the max width
//   fill(30, 0, 0);
//   rect(xPos,yPos,barMax,barHeight);
//   rect(xPos,yPos + barHeight + barMargin,barMax,barHeight);
//   rect(xPos,yPos + barHeight*2 + barMargin*2,barMax,barHeight);

//   fill(80, 0, 0);
//   rect(xPos,yPos,h,barHeight);   // Bar for hours
//   fill(150, 0, 0);
//   rect(xPos,yPos + barHeight + barMargin,m,barHeight);   // Bar for minute
//   fill(255, 0, 0);
//   rect(xPos,yPos + barHeight*2 + barMargin*2,s,barHeight);   // Bar for second
// }
