// Math 1
function zero_negativity(arr){
	for (let i = 0; i < arr.length; i++){
		if (arr[i] < 0){
			return false;
		}
	}
	return true;
}

//Math 2
function is_even(num){
	if (num % 2 == 0){
		return true;
	}
	return false;
}

//Math 3
function how_many_even(arr){
	var evens = 0;
	for (let i = 0; i < arr.length; i++){
		if (is_even(arr[i])){
			evens ++;
		}
	}
	return evens;
}

//Math 4
function create_dummy_array(n){
	var arr = [];
	for (let i = 0; i < n; i++){
		randInt = Math.floor(Math.random()*10);
		arr.push(randInt);
	}
	return arr;
}

//Math 5
function random_choice(arr){
	randIndex = Math.floor(Math.random()*arr.length)
	return arr[randIndex]
}
