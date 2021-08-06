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
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 500, 400);
}
function modelLoaded() {
    console.log("Model is Loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreLeftWrist);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log(scoreRightWrist);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        console.log("left x: " + leftWristX + " left y: " + leftWristY);
        console.log("right x: " + rightWristX + " right y: " + rightWristY);
    }
}