function tennisRanklist(input) {
    let tournamentsCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let totalPoints = 0;
    let totalWins = 0; 

    for (let i = 2; i <= tournamentsCount + 2; i++) {
        
        if (input[i] === 'W') {
            totalPoints += 2000;
            totalWins++;
        } else if (input[i] === 'F') {
            totalPoints += 1200;
        } else if (input[i] === 'SF') {
            totalPoints += 720;
        }
    }
    
    totalPoints = totalPoints + startingPoints;
    let averagePoints = totalPoints / tournamentsCount;
    let winPercentage = (totalWins / tournamentsCount) * 100;

    console.log(`${totalPoints}`);
    console.log(`${Math.ceil(averagePoints)}`);
    console.log(`${winPercentage.toFixed(2)}%`);
}

tennisRanklist(["5", "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])
