
moveRight = ()=>{
	// console.log("moveRight",data,sizeX,sizeY,bg);
	if (bg ==0) {		
		if (data[0].x <= sizeX) {
			clear(data);
			data = [{"x":data[0].x+2,"y":data[0].y}];
			display(data,SIZE);
		}
	}
}

moveLeft = ()=>{
	if (bg ==0) {		
		if (data[0].x >= marginX) {
			clear(data);
			data = [{"x":data[0].x-2,"y":data[0].y}];
			display(data,SIZE);
		}
	}
}

moveUp = ()=>{
		console.log("up");
}


// HORIZONTAL MOVEMENT along x-axis;
move = (num,bool) =>{
	if (num == 0) {
		if (bool) {
			moveRight();
		}else{
			moveLeft();
		}		
	}else{
		moveUp();
	}

}
