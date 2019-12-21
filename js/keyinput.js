// Keyinput
setKey = (event,status)=>{
	code = event.keyCode;
// 	arrow left 	37
// arrow up 	38
// arrow right 	39
// arrow down 	40
	if (status) {
		switch(code){
			case 37:
				move(0,false);
				break;
			case 39:
				move(0,true);
				break;
			case 38:
				move(1,true);
				break;
			default:
				console.log("Invalid");
		}
	}
}
