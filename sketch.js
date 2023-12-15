var title = 0;
var x=200;
var speed = 2;
var score= 0;

let ypos = 0;
let xpos = 100;
let xstep = 135;

let img;
let imgg;

let mainMusic;
let gameOver;

// let handpose;
// let video;
// let predictions = [];
// let index = [];
// let ready = false;

function preload() {
	img = loadImage('guy.png');
	imgg = loadImage('fish.png');
	mainMusic = loadSound('music.wav')
	gameOver = loadSound('over.wav')
  }


function setup() {
  createCanvas(windowWidth-100, windowHeight-100);
  angleMode(DEGREES);
  imageMode(CENTER);
  

//   video = createCapture(VIDEO);
//   video.size(0, 0);

//   handpose = ml5.handpose(video, modelReady);
//   handpose.on("predict", (results) => {
//     predictions = results;
//   });

//   video.hide();
  
}

// function modelReady() {
// 	console.log("Model ready!");
// 	ready = true;
//   }

function draw() {
	if(title == 0){
    startTitle()
  }else if(title == 1){
  	gameOn()
  }else if(title==2){
  	endTitle()
  }	
//   drawKeypoints();
}

function startTitle(){
		background(248, 91, 58)
		fill(227, 83, 52, 98);
	noStroke();
	for (let i = 0; i < 9; i++) {
		rect(xpos+(xstep*i), ypos, 60, windowHeight);
	  }
		textAlign(CENTER);
		textFont('Shizuru');
  		textSize(40);
		  fill('white');
		text('he is hungry! feed him fish!', width / 2, height / 2)
		text('click to start', width / 2, height / 2 + 80);
		reset();
}

function gameOn(){
// attempting to control character with index
	// function drawKeypoints() {
	// 	for (let i = 0; i < predictions.length; i += 1) {
	// 	  const prediction = predictions[i];
	  
	  
	// 	  index = prediction.annotations.indexFinger[3];
	  
		
	// 	  image(img, mouseX, height-90, index[0], index[1], 300, 300);
	// 	}
	// 	if (index.length > 2) {
	// 	  let distance = dist(index[0], index[1]);
		  
	// 	  // console.log(distance)
	// 	  console.log(predictions)
	// 	}
	// }

	background(255, 248, 238);
	fill(238, 225, 217);
	noStroke();
	for (let i = 0; i < 9; i++) {
		rect(xpos+(xstep*i), ypos, 60, windowHeight);
	  }
	textFont('Shizuru');
	textSize(30);
	fill('black');
  text("score = " + score, 100,40)
  imageMode(CENTER)

	image(img, mouseX,height-90, 300, 300)
	this.y+= speed;
  if(this.y>height){
  	title =2
	 }

  if(this.y>height-10 && x>mouseX-20 && x<mouseX+20){
  	this.y=-20
    speed+=0.75
    score+= 1
  }
  
	if(this.y==-20){
  	pickRandom();
  }
  image(imgg, x,this.y, 145, 150)
  rotate(10);
//   mainMusic.play();
}

function pickRandom(){
	x= random(20,width-20)
}

function endTitle(){
		background(86, 117, 155)
		fill(70, 96, 128, 98)
		for (let i = 0; i < 9; i++) {
			rect(xpos+(xstep*i), ypos, 60, windowHeight);
		  }
		textAlign(CENTER);
		textFont('Shizuru');
		fill('white');
		textSize(40);
		text('he died! sad face!', width / 2, height / 2)
  	text("SCORE = " + score, width / 2, height / 2 + 60)
		text('click to play again', width / 2, height / 2 + 120);
		// gameOver.play();
}

function mousePressed(){
	if(title==0){
  	title=1
  }else if(title==2){
  	title=0
  }
}

function reset(){
	  score=0;
  	speed=2;
  	this.y=-20;
}

