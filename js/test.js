var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

var mX = 60;
var mY = 50;
var sizeX = 360;
var sizeY  = 500;
var x =20;
var xR = 390;
var xL = 90;
var data =[{"x":240,"y":520}];
var hasCollided =false;
var speed = 10;
var blocks = [];
var num = 10;


var img2 = new Image();
img2.src = "./img/player.png";


var img = new Image();
img.src = "./img/enemy.png";


ctx.fillRect(mX,mY,sizeX,sizeY);
img.onload=function() {
	display(x,data);
}

blocks.push({"x":createRandomX(),"y":50});
	setInterval(()=>{
		if (blocks.length <10) {
			blocks.push({"x":createRandomX(),"y":50});
		}
	},3000);

img.onload=function() {
var myTimer = setInterval(()=>{

	var tempBlocks =[];
	for (var i = 0; i <blocks.length; i++) {
		tempBlocks.push({"x":blocks[i].x,"y":(blocks[i].y+2)});	
	}

	if (blocks.length >0) {
		blocks = blocks.filter((x,i)=>blocks[i].y <500);
	}
	ctx.fillRect(mX,mY,sizeX,sizeY);
	display(20,data);
	blocks.length >0?console.log(blocks[0].y):""
	for (var i = 0; i < blocks.length; i++) {
		if (blocks[i].y >500) {
			if (data[0].x == blocks[i].x) {
				clearInterval(myTimer);
				console.log("GAME OVER!",data[0].y,blocks[i].y);
			}
		}
		
	}
	blocks = tempBlocks;
	// console.log(blocks.length);
	
	for (var i = 0; i < blocks.length; i++) {
		// ctx.drawImage(img2, 70,0,25,30,blocks[i].x,blocks[i].y,20,20)
		ctx.drawImage(img, 0,10,15,35,blocks[i].x,blocks[i].y,20,20)
		// ctx.clearRect(blocks[i].x,blocks[i].y,20,20);
	}	
},50);
}

document.addEventListener('keydown', function(e) {
    setKey(e, true);
});

document.addEventListener('keyup', function(e) {
    setKey(e, false);
});
