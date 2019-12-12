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

ctx.fillRect(mX,mY,sizeX,sizeY);
display(x,data);

blocks.push({"x":createRandomX(),"y":40});

setInterval(()=>{
	if (blocks.length <10) {
		blocks.push({"x":createRandomX(),"y":40});
	}
	if (blocks.length >0) {
	blocks = blocks.filter((x,i)=>blocks[i].y <550);

	}
	// console.log(blcks);
},7000);

// for (var i = 0; i < num; i++) {
// 	ctx.clearRect(blocks[i].x,blocks[i].y,20,20);
// }

var myTimer = setInterval(()=>{
	// console.log("HELLO");
	var tempBlocks =[];
	for (var i = 0; i <blocks.length; i++) {
		tempBlocks.push({"x":blocks[i].x,"y":(blocks[i].y+2)});	
	}
	ctx.fillRect(mX,mY,sizeX,sizeY);
	display(20,data);
	// blocks.length >0?console.log(blocks[0].y):""
	for (var i = 0; i < blocks.length; i++) {
		if (blocks[i].y >500) {
			// console.log(data[0].x,blocks[i].x)
		}
		if (data[0].x == blocks[i].x) {
			// console.log("GAME OVER!")
		}
	}
	blocks = tempBlocks;
	
	for (var i = 0; i < blocks.length; i++) {
		ctx.clearRect(blocks[i].x,blocks[i].y,20,20);
	}	
},50);

document.addEventListener('keydown', function(e) {
    setKey(e, true);
});

document.addEventListener('keyup', function(e) {
    setKey(e, false);
});
