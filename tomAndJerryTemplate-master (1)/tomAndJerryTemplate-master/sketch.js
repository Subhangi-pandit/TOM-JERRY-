var cat,catImg;
var mouse,mouseImg;
function preload() {
    //load the images here
    catImg=loadImage("cat1.png","cat2.png","cat3.png","cat4.png");
    mouseImg=loadImage("mose1.png","mouse2.png","mouse3.png","mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(catImg,"cat1.png");
mouse=createSprite(mouseImg,"mouse1.png ")


}

function draw() {
    createCanvas(garden.png)

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2);
    mouse.addAnimation("mouseHappy", mouseimg3);
    mouse.changeAnimation("mouseHappy");

    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseimg2);
    mouse.changeAnimation("mouseTeasing");

}

if (keyCode === RIGHT_ARROW){
    cat.addAnimation("catRunning",catimg2);
    cat.changeAnimation("catRunning");
}


}
