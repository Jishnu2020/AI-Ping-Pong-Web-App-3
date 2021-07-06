function setup() {
canvas = createCanvas(300, 300);
canvas.parent('canvas');
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
}
function draw() {
image(video, 0, 0, 300, 300);
}
function modelLoaded() {
console.log("Posenet is initialized");
}