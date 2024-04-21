// nav bar

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="style.css">
//     <title>NavBar Demo</title>
// </head>
// <body>
//     <nav>
//         <div class="logo">
//             <a href="">Matrix</a>
//         </div>
//         <ul >
//             <li><a href="">Home</a></li>
//             <li><a href="">Services</a></li>
//             <li><a href="">About</a></li>
//             <li><a href="">Contact</a></li>
//         </ul>
//         <div class="menu">
//             <div class="menu-line"></div>
//             <div class="menu-line"></div>
//             <div class="menu-line"></div>
//         </div>
//     </nav>
// </body>
// <script>
//     const menu = document.querySelector('.menu')
//     const menuList = document.querySelector('nav ul')
//     menu.addEventListener('click',()=>{
//         menuList.classList.toggle('showmenu')
//     })
// </script>
// </html>


// image slider

const container = document.querySelector('.container');
const btns = document.querySelectorAll('.btn')
const imgList = ["1","2","3","4"]

let index=0
btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left')){
            index--;
            if(index<0){
                index = imgList.length-1;
            }
            container.style.background = `url("Imgs/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }
        else{
            index++;
            if(index===imgList.length){
                index = 0;
            }
            container.style.background = `url("Imgs/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }
    })
})

// snake game

const gameBoard = document.getElementById('gameBoard');
const context = gameBoard.getContext('2d');
const scoreText = document.getElementById('scoreVal');

const WIDTH = gameBoard.width;
const HEIGHT = gameBoard.height; 
const UNIT = 25;

let foodX;
let foodY;
let xVel = 25;
let yVel = 0;
let score = 0;
let active=true;
let started = false;
let paused = false;

let snake = [
    {x:UNIT*3,y:0},
    {x:UNIT*2,y:0},
    {x:UNIT,y:0},
    {x:0,y:0}
];

window.addEventListener('keydown',keyPress);
startGame();

function startGame(){
    context.fillStyle = '#212121';
    //fillRect(xStart,yStart,width,height)
    context.fillRect(0,0,WIDTH,HEIGHT);
    createFood();
    displayFood();
    drawSnake();
}

function clearBoard(){
    context.fillStyle = '#212121';
    //fillRect(xStart,yStart,width,height)
    context.fillRect(0,0,WIDTH,HEIGHT);
}

function createFood(){
    foodX = Math.floor(Math.random()*WIDTH/UNIT)*UNIT;
    foodY = Math.floor(Math.random()*HEIGHT/UNIT)*UNIT;
}

function displayFood(){
    context.fillStyle = 'red';
    context.fillRect(foodX,foodY,UNIT,UNIT)
}

function drawSnake(){
    context.fillStyle = 'aqua';
    context.strokeStyle = '#212121';
    snake.forEach((snakePart) => {
        context.fillRect(snakePart.x,snakePart.y,UNIT,UNIT)
        context.strokeRect(snakePart.x,snakePart.y,UNIT,UNIT)
    })
}

function moveSnake(){
    const head = {x:snake[0].x+xVel,
                    y:snake[0].y+yVel}
    snake.unshift(head)
    if(snake[0].x==foodX && snake[0].y==foodY){
        score += 1;
        scoreText.textContent = score;
        createFood();
    }
    else
        snake.pop();
}

function nextTick(){
    if(active && !paused){
        setTimeout(() => {
            clearBoard();
            displayFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 200);
    }
    else if(!active){
        clearBoard();
        context.font = "bold 50px serif";
        context.fillStyle = "white";
        context.textAlign = "center";
        context.fillText("Game Over!!",WIDTH/2,HEIGHT/2)
    }
}

function keyPress(event){
    if(!started){
        started = true;
        nextTick();
    }
    //pause when space is pressed
    if(event.keyCode===32){
        console.log('clicked')
        if(paused){
            paused = false;
            nextTick();
        }
        else{
            paused = true;
        }
    }
    const LEFT = 37
    const UP = 38
    const RIGHT = 39
    const DOWN = 40

    switch(true){
        //left key pressed and not going right
        case(event.keyCode==LEFT  && xVel!=UNIT):
            xVel=-UNIT;
            yVel = 0;
            break;
        //right key pressed and not going left
        case(event.keyCode==RIGHT && xVel!=-UNIT):
            xVel=UNIT;
            yVel=0;
            break;
        //Up key pressed and not going down
        case(event.keyCode==UP && yVel!=UNIT):
            xVel=0;
            yVel=-UNIT;
            break;
        //down key pressed and not going up
        case(event.keyCode==DOWN && yVel!=-UNIT):
            xVel=0;
            yVel=UNIT;
            break;

    }
}

function checkGameOver(){
    switch(true){
        case(snake[0].x<0):
        case(snake[0].x>=WIDTH):
        case(snake[0].y<0):
        case(snake[0].y>=HEIGHT):
            active=false;
            break;
    }
	//check snake head collision with snake body
	   for(let i = 1; i < snake.length; i+=1){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            active = false;
        }
    }
}