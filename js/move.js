// HORIZONTAL MOVEMENT along x-axis;
move = (bool)=>{

	if (bool) {
		if (data[0].x != (xR+x)) {
			ctx.fillRect(data[0].x,data[0].y,20,20);
			data = [{"x":(data[0].x+x),"y":data[0].y}];
			display(x,data);
		}
	}else{
		if (data[0].x != (xL-x)) {
			ctx.fillRect(data[0].x,data[0].y,20,20);
			data = [{"x":(data[0].x-x),"y":data[0].y}];
			display(x,data);
		}
	}
}
