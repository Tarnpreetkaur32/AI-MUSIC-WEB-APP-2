noseX=0;
noseY=0;
difference=0;
rightwrist=0;
leftwrist=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(430,430);
  
   canvas = createCanvas(425,425);
   canvas.position(760,126);

   posenet = ml5.poseNet(video,modelLoaded);
   posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Posenet Is Inatialized !");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.X;
        noseY=results[0].pose.nose.Y;
        console.log("noseX="+ noseX+"noseY="+noseY);

        leftwristX=results[0].pose.leftwrist.X;
        rightwristY=results[0].pose.rightwrist.X;
        difference=floor(leftwristX-rightwristY);
        console.log("leftwristX="+leftwristX+"rightwristX"+rightwristX+"difference="+difference);
    }
}
function draw() 
{
    background('#5127e8');

    document.getElementById("square_side").innerHTML="width and height of a square will be ="+difference+"px";
    fill("#fc03f4");
    stroke("#fc03f4");
    square(noseX, noseY,difference);
}
