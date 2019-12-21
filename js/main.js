var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

var marginX = 50;
var marginY = 50;
var sizeX = 440;
var sizeY  = 500;
var SIZE =40;
var data = [{"x":200,"y":480}];
var bg = 0;

ctx.fillRect(marginX,marginY,sizeX,sizeY);


var img = new Image();
img.src = "./img/playerl.png";
// console.log(window);

img.onload=function() {
	ctx.drawImage(img, 70,0,25,32,data[0].x,data[0].y,SIZE,SIZE);
}


document.addEventListener('keydown', function(e) {
    setKey(e, true);
});

document.addEventListener('keyup', function(e) {
    setKey(e, false);
});
