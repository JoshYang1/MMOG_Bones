const cvs = document.getElementById("dog");
cvs.height = 640;
cvs.width = 640;
const ctx = cvs.getContext("2d");

// create the unit
const box = 32;

// load images

const ground = new Image();
ground.src = "public/MediaFolder/ground.png";

const dogImage = new Image();
dogImage.src = "public/MediaFolder/dog.png";

const boneImg = new Image();
boneImg.src = "public/MediaFolder/food.png";

// load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";

// create the Dog

let dog = [];

dog[0] = {
    x : 2 * box,
    y : 2 * box
};

// create the bone

let bone = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}

// create the scores var

let score1 = 0;
let score2 = 0;
let score3 = 0;
let score4 = 0;

//control the dog

let d;

document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if( key == 37){
        left.play();
        d = "LEFT";
    }else if(key == 38){
        d = "UP";
        up.play();
    }else if(key == 39){
        d = "RIGHT";
        right.play();
    }else if(key == 40){
        d = "DOWN";
        down.play();
    }
}


// draw everything to the canvas

function draw(){
    
    ctx.drawImage(ground,0,0, ground.width, ground.height,
        0, 0, 640, 640);
    //0,0, dog.width, dog.height
  
    for( let i = 0; i < dog.length ; i++){
        ctx.drawImage(dogImage,dog[i].x,dog[i].y);
    }

    ctx.drawImage(boneImg, bone.x, bone.y, 20, 20);
    
    // old head position
    let dogX = dog[0].x;
    let dogY = dog[0].y;
    
    // which direction
    if( d == "LEFT") dogX -= 0.5*box;
    if( d == "UP") dogY -= 0.5*box;
    if( d == "RIGHT") dogX += 0.5*box;
    if( d == "DOWN") dogY += 0.5*box;
    
    // if the dog eats the bone
    if(dogX == bone.x && dogY == bone.y || dogX == bone.x-0.5*box && dogY == bone.y){
        score1++;
        eat.play();
        bone = {
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+3) * box
        }
        dog.pop();
        // we don't remove the tail
    }else{
        // remove the tail
        dog.pop();
    }
    
    // add new Head
    
    let newHead = {
        x : dogX,
        y : dogY
    }
    
    
    // game over
    
    if(dogX < box-box || dogX >= 640 || dogY < box-box || dogY >= 640){
        clearInterval(game);
        dead.play();
    }
    
    dog.unshift(newHead);
    
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score1,1.4*box,2.9*box);
    ctx.fillText(score2,640-1.8*box,2.9*box);
    ctx.fillText(score3,1.4*box,640-0.2*box);
    ctx.fillText(score4,640-1.8*box,640-0.2*box);
}

// call draw function every 100 ms

let game = setInterval(draw,100);
