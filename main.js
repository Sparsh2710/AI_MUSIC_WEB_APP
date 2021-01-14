song1 = "";
song2 = "";

scoreLeftWrist = 0;
scoreRightWrist = 0;

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;


function preload() {
    song1 = loadSound('Animals.mp3');
    song2 = loadSound('Cutting_shapes.mp3');
}

function setup() {
    canvas = createCanvas(600, 440);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}


function gotPoses(results) {
    if(results.length > 0) {
	    console.log(results);
        scoreLeftWrist =  results[0].pose.keypoints[9].score;
        scoreRightWrist =  results[0].pose.keypoints[10].score;
	    console.log("scoreLeftWrist = " + scoreLeftWrist + " scoreRightWrist = " + scoreRightWrist);
	
	    rightWristX = results[0].pose.rightWrist.x;
	    rightWristY = results[0].pose.rightWrist.y;
	    console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	    leftWristX = results[0].pose.leftWrist.x;
	    leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
    }
}

function draw() {
	image(video, 0, 0, 600, 500);

	fill("#FF0000");
	stroke("#FF0000");

	if(scoreLeftWrist > 0.2) {
        circle(leftWristX,leftWristY,20);
        song2.isPlaying(false);

        if(song1.isPlaying(false)) {
            song1.play();
            song1.setVolume(1);
            song1.rate(1);

            document.getElementById("song").innerHTML = "SONG - Animals";
        }
    }
    
    if(scoreRightWrist > 0.2) {
        circle(rightWristX,rightWristY,20);
        song1.isPlaying(false);

        if(song2.isPlaying(false)) {
            song2.play();
            song2.setVolume(1);
            song2.rate(1);

            document.getElementById("song").innerHTML = "SONG - Cutting Shapes";
        }
	}
}

function draw() {
    image(video, 0, 0, 600, 440);  
}
