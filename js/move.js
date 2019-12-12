// HORIZONTAL MOVEMENT along x-axis;
move = (bool)=>{

	if (bool) {
		if (data[0].x != 400) {
			ctx.fillRect(data[0].x,data[0].y,20,20);
			data = [{"x":(data[0].x+x),"y":data[0].y}];
			display(x,data);
		}
	}else{
		if (data[0].x != 60) {
			ctx.fillRect(data[0].x,data[0].y,20,20);
			data = [{"x":(data[0].x-x),"y":data[0].y}];
			display(x,data);
		}
	}
	console.log(data[0].x);
}
