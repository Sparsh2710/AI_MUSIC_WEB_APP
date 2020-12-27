song1 = "";
song2 = "";

function preload() {
    song1 = loadSound('Animals.mp3');
    song2 = loadSound('Cutting_shapes.mp3');
}

function setup() {
    canvas = createCanvas(600, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 350);  
}
