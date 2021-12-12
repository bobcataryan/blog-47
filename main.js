fnose_x= 0;
nose_y= 0;
left_wristx=0;
right_wristx=0;

function setup() {
video = createCapture(VIDEO);
video.position(0,200);

canvas=createCanvas(600,600);
canvas.position(750,150);

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
    background('#5e5858');

    document.getElementById("font_size").innerHTML="The font size of the text will be  "+difference;
    fill("#F90093")
    stroke("#F90093")
    text("Aryan",nose_x,nose_y);
    textSize(difference);
}

function modelLoaded(){
console.log('poseNet is initialized');
}   

function gotPoses(results) {
    if(results.length > 0){
    console.log(results);
    nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    console.log("noseX is " + nose_x+ "noseY is "+ nose_y);
    left_wristx=results[0].pose.leftWrist.x;
    right_wristx=results[0].pose.rightWrist.x;
    difference=floor(left_wristx-right_wristx);
    console.log("left wristX is  "+left_wristx+"right wristX is  "+right_wristx+"the distance between the wrists is  "+difference);
    draw();
}
}