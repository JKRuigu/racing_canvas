createRandomX = ()=>{
	let ran = Math.floor(Math.random()*xR); //generate random number from 0 -390;
	let ran2 = ran -(ran%x); //creates a number divisible by 10;
	ran2 = ran2 <mX? mX:ran2 //checks wheather is below the margin(m);
	return ran2;
}


createRandomY = ()=>{
	let ran = Math.floor(Math.random()*sizeY); //generate random number from 0 -390;
	let ran2 = ran -(ran%x); //creates a number divisible by 10;
	ran2 = ran2 <mY? mY:ran2 //checks wheather is below the margin(m);
	return ran2;
}

displayBlocks =(x,n,blocks)=>{
	for(i=0; i<n;i++){
		// console.log(blocks[i])
		display(x,[blocks[i]]);
	}	
}

generateBlock = (x,n)=>{
	for(i=0; i<n;i++){
		blocks.push({"x":createRandomX(),"y":createRandomY()});
	}
	displayBlocks(x,n,blocks);
}
