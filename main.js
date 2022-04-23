rightWristX=0;
leftWristX=0;
rightWristY=0;
leftWristY=0;
scoreLeft=0;
song1="";
song2="";
aeae="";
function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}
function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
   capture= createCapture(VIDEO);
   capture.hide();
   x=ml5.poseNet(capture,Loaded);
   x.on('pose',Poses);
   
 } 
 function Loaded(){
     console.log("ML5 has been loaded.");
 }
 
 function Poses(results){
  if(results.length>0){
      console.log(results);
      leftWristX=results[0].pose.leftWrist.x;
      leftWristY=results[0].pose.leftWrist.y;
      rightWristX=results[0].pose.rightWrist.x;
      rightWristY=results[0].pose.rightWrist.y;
      scoreLeft=results[0].pose.keypoints[9].score;  
  }
 }
 function draw(){
    image(capture,0,0,600,500);
    xyz=song1.isPlaying();
    fill("blue");
    stroke("blue");
    if(scoreLeft>0.2){
        circle(leftWristX,leftWristY,20);
        song2.stop();
        if(xyz="false"){
            song1.play();
            document.getElementbyId("buttonn").innerHTML="SONG 1 IS PLAYING";
        }
    }
 }
