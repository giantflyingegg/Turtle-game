const canvas = document.getElementById("garea");
const ctx = canvas.getContext("2d");

//target speed_disp div
const speed_disp = document.getElementById('speed_disp');
//target speed_disp div
const speed_disp2 = document.getElementById('speed_disp2');
//target speed_disp div
const speed_disp3 = document.getElementById('speed_disp3');

//target slider
document.getElementById("slider");
//target slider2
document.getElementById("slider2");
//target slider3
document.getElementById("slider3");

//start position
let x = 25;
let x2 = 25;
let x3 = 25;

//randomise start speed
let speed = Math.floor(Math.random() *5+1);
speed_disp.innerHTML = `Turtle 1 speed: ${speed}`;
slider.value = speed;
let speedtwo = Math.floor(Math.random() *5+1);
speed_disp2.innerHTML = `Turtle 2 speed: ${speedtwo}`;
slider2.value = speedtwo;
let speedthree = Math.floor(Math.random() *5+1);
speed_disp3.innerHTML = `Turtle 3 speed: ${speedthree}`;
slider3.value = speedthree;

//start position, keep fixed to only allow horizontal movement
let y = 300
// // start position turtle2
let y2 = 425
// //start position turtle3
let y3 = 550


//eventlistener for slider
slider.addEventListener('change', function() {

    //change speed value based on slider value
    speed = slider.value;
    speed_disp.innerHTML = `Turtle 1 speed is ${speed}`;
    });
    
//eventlistener for slider2
    slider2.addEventListener('change', function() {
    speedtwo = slider2.value;
    speed_disp2.innerHTML = `Turtle 2 speed ${speedtwo}`;
    }); 

//eventlistener for slider3
slider3.addEventListener('change', function() {
    speedthree = slider3.value;
    speed_disp3.innerHTML = `Turtle 3 speed ${speedtwo}`;
    });     

//draw turtle function
function drawTurt1() {

    //body
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI, true);
    ctx.fillStyle = "#06330c";    
    ctx.fill();
    ctx.closePath();

    //head
    ctx.beginPath();
    ctx.roundRect(x+8, y-35, 20, 15, 7);
    ctx.fillStyle = "#118c21";
    ctx.fill();
    ctx.closePath();

    //eye
    ctx.beginPath();
    ctx.arc(x+17, y-30, 2, 0, Math.PI *2, true);
    ctx.fillStyle = "black";    
    ctx.fill();
    ctx.closePath();

    ///mouth
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.moveTo(x+19, y-24);
    ctx.lineTo(x+27, y-24);
    ctx.stroke();

    //back foot
    ctx.beginPath();
    ctx.arc(x-15, y, 6, 0, Math.PI, false);
    ctx.fillStyle = "#118c21";
    ctx.fill(); 
    ctx.closePath();

    //front foot
    ctx.beginPath();
    ctx.arc(x+13, y, 6, 0, Math.PI, false);
    ctx.fillStyle = "#118c21";
    ctx.fill(); 
    ctx.closePath();

    //shell number
    ctx.font = '24px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('1', x-8, y-4);

};

//turtle 2
function drawTurt2() {
    
    ctx.beginPath();
    ctx.arc(x2, y2, 25, 0, Math.PI, true);
    ctx.fillStyle = "#06330c";    
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.roundRect(x2+8, y2-35, 20, 15, 7);
    ctx.fillStyle = "#118c21";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x2+17, y2-30, 2, 0, Math.PI *2, true);
    ctx.fillStyle = "black";    
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.moveTo(x2+19, y2-24);
    ctx.lineTo(x2+27, y2-24);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x2-15, y2, 6, 0, Math.PI, false);
    ctx.fillStyle = "#118c21";
    ctx.fill(); 
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x2+13, y2, 6, 0, Math.PI, false);
    ctx.fillStyle = "#118c21";
    ctx.fill(); 
    ctx.closePath();

    ctx.font = '24px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('2', x2-8, y2-4);
};

// //turtle 3
function drawTurt3() {

    ctx.beginPath();
    ctx.arc(x3, y3, 25, 0, Math.PI, true);
    ctx.fillStyle = "#06330c";    
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.roundRect(x3+8, y3-35, 20, 15, 7);
    ctx.fillStyle = "#118c21";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x3+17, y3-30, 2, 0, Math.PI *2, true);
    ctx.fillStyle = "black";    
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.moveTo(x3+19, y3-24);
    ctx.lineTo(x3+27, y3-24);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x3-15, y3, 6, 0, Math.PI, false);
    ctx.fillStyle = "#118c21";
    ctx.fill(); 
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x3+13, y3, 6, 0, Math.PI, false);
    ctx.fillStyle = "#118c21";
    ctx.fill(); 
    ctx.closePath();

    ctx.font = '24px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('3', x3-8, y3-4);
    };

 //draw inverse turtle function
 function drawInvturt1() {

    //body
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI, true);
    ctx.fillStyle = "#06330c";    
    ctx.fill();
    ctx.closePath();

    //head
    ctx.beginPath();
    ctx.roundRect(x-28, y-35, 20, 15, 7);
    ctx.fillStyle = "#118c21";
    ctx.fill();
    ctx.closePath();

    //eye
    ctx.beginPath();
    ctx.arc(x-17, y-30, 2, 0, Math.PI *2, true);
    ctx.fillStyle = "black";    
    ctx.fill();
    ctx.closePath();

    ///mouth
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.moveTo(x-19, y-24);
    ctx.lineTo(x-27, y-24);
    ctx.stroke();

    //back foot
    ctx.beginPath();
    ctx.arc(x-15, y, 6, 0, Math.PI, false);
    ctx.fillStyle = "#118c21";
    ctx.fill(); 
    ctx.closePath();

    //front foot
    ctx.beginPath();
    ctx.arc(x+13, y, 6, 0, Math.PI, false);
    ctx.fillStyle = "#118c21";
    ctx.fill(); 
    ctx.closePath();

    //shell number
    ctx.font = '24px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('1', x-8, y-4);

};

function drawInvturt2() {

    ctx.beginPath();
    ctx.arc(x2, y2, 25, 0, Math.PI, true);
    ctx.fillStyle = "#06330c";    
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.roundRect(x2-28, y2-35, 20, 15, 7);
    ctx.fillStyle = "#118c21";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x2-17, y2-30, 2, 0, Math.PI *2, true);
    ctx.fillStyle = "black";    
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.moveTo(x2-19, y2-24);
    ctx.lineTo(x2-27, y2-24);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x2-15, y2, 6, 0, Math.PI, false);
    ctx.fillStyle = "#118c21";
    ctx.fill(); 
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x2+13, y2, 6, 0, Math.PI, false);
    ctx.fillStyle = "#118c21";
    ctx.fill(); 
    ctx.closePath();

    ctx.font = '24px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('1', x2-8, y2-4);

};

function drawInvturt3() {

    ctx.beginPath();
    ctx.arc(x3, y3, 25, 0, Math.PI, true);
    ctx.fillStyle = "#06330c";    
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.roundRect(x3-28, y3-35, 20, 15, 7);
    ctx.fillStyle = "#118c21";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x3-17, y3-30, 2, 0, Math.PI *2, true);
    ctx.fillStyle = "black";    
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.moveTo(x3-19, y3-24);
    ctx.lineTo(x3-27, y3-24);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x3-15, y3, 6, 0, Math.PI, false);
    ctx.fillStyle = "#118c21";
    ctx.fill(); 
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x3+13, y3, 6, 0, Math.PI, false);
    ctx.fillStyle = "#118c21";
    ctx.fill(); 
    ctx.closePath();

     ctx.font = '24px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('1', x3-8, y3-4);

};

//move turtle function
function draw() {

    //clear prev image to avoid leaving trail 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    //draw sprites based on speed +/-
    if (speed > 0) {
        drawTurt1();
    } else {
        drawInvturt1();
        } 

    if (speedtwo > 0) {
            drawTurt2();
    } else {
            drawInvturt2();
            } 

    if (speedthree > 0) {
            drawTurt3();
    } else {
            drawInvturt3();
            } 

    //generate speed        
    x += speed/8;
    x2 += speedtwo/8;
    x3 += speedthree/8;
     
    //bounce when in contact with walls by inversing speed
    if (x + 220 > innerWidth || x < 20)  {
        speed = -speed;
    };

    if (x2 + 220 > innerWidth || x2 < 20)  {
        speedtwo = -speedtwo;
    };

    if (x3 + 220 > innerWidth || x3 < 20)  {
        speedthree = -speedthree;
    };

};

// //interval for drawing
setInterval(draw, 10);


