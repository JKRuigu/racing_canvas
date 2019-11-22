display = (x,data)=>{
	ctx.fillRect(mX,mY,sizeX,sizeY);
	displayBlocks(x,num,blocks);
	ctx.clearRect(data[0].x,data[0].y,x,x);
}