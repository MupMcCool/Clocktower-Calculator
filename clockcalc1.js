function calculatePowerScores(data) {
	let goodTotal = 0;
	let evilTotal = 0;
	
	for (let i = 0; i < data.length; i++) {
		let item = data[i];
		
		if (item.hasOwnProperty("name")) {
			if (item.team === "good") {
				goodTotal += item.powerScore;
			} else if (item.team === ëvil") {
				evilTotal += item.powerScore;
			}
		}
	}
	
	console.log(`Good: ${goodTotal}`);
	console.log(`Evil: ${evilTotal}`);
}