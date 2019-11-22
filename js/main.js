var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

var mX = 70;
var mY = 50;
var sizeX = 360;
var sizeY  = 500;
var x =20;
var xR = 390;
var xL = 90;
var data =[{"x":250,"y":520}];
var hasCollided =false;
var speed = 10;
var blocks = [];
var num = 10;

ctx.fillRect(mX,mY,sizeX,sizeY);
display(x,data);


generateBlock(x,num);
startGame = ()=>{
	var myTimer = setInterval(()=>{
	
	},1000);
}

document.addEventListener('keydown', function(e) {
    setKey(e, true);
});

document.addEventListener('keyup', function(e) {
    setKey(e, false);
});
