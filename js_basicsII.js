function magic_multiply(x, y){
	if (typeof y == 'string'){
		return "Cannot multiply by a string!";
	}
	if(typeof x == 'string'){
		str = x;
		for (let i = 1; i < y; i++){
			x += str;
		}
	}
	else if (Array.isArray(x) == true){
		for (let j = 0; i < x.length; i++){
			x[i] *= y;
		}
	}
	else {
		x = x * y;
	}
	return x;
}
