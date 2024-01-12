function makeid(l) {

	let c = "";

	for(let i = 0;i<l;i++){
		c+="a";
	}

	return c;
}


const l = prompt("Enter a number.");
alert(makeid(l));
