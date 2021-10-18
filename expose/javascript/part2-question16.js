for( const prop in statistics){
	let letter = Object.getOwnPropertyNames(prop)[0];
	let odd = ${statistics[prop]} % 2; 
	if(letter == 'r'){
		console.log('${statistics[prop]}');
	}
	else if(odd == 1){
		console.log('${statistics[prop]}');
	}
}
