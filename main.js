song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload() {
    hp = loadSound("hp.mp3");
    pp = loadSound("peter_pans_flight.mp3");
}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 500, 400);
}