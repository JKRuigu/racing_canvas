createRandomX = ()=>{
	// let temp = [70,90]
	let ran = Math.floor(Math.random()*xR); //generate random number from 0 -390;
	let ran2 = ran -(ran%20); //creates a number divisible by 10;
	ran2 = ran2 <mX? mX:ran2 //checks wheather is below the margin(m);
	// console.log(ran2)
	return ran2;
}


createRandomY = ()=>{
	let ran = Math.floor(Math.random()*sizeY); //generate random number from 0 -390;
	let ran2 = ran -(ran%20); //creates a number divisible by 10;
	ran2 = ran2 <mY? mY:ran2 //checks wheather is below the margin(m);
	return ran2;
}


generateBlock = (x,n)=>{
	for(i=0; i<n;i++){
		blocks.push({"x":createRandomX(),"y":createRandomY()});
	}
	// displayBlocks(x,n,blocks);
}
