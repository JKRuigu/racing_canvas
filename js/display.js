clear = data=>{
	ctx.fillRect(data[0].x,data[0].y,SIZE,SIZE);
}

display = (data,size)=>{
	ctx.drawImage(img, 70,0,25,32,data[0].x,data[0].y,SIZE,SIZE);
}


