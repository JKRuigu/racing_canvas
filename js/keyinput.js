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
				move(false);
				break;
			case 39:
				move(true);
				break;
			default:
				console.log("Invalid");
		}
	}
}
