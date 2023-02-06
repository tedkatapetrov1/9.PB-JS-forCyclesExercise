function salary(input) {
    let n = Number(input[0]);
    let salary = Number(input[1]);


    for (let i = 2; i < n + 2; i++) {
        if (input[i] === "Facebook") {
            salary -= 150;
        } else if (input[i] === "Instagram") {
            salary -= 100;
        } else if (input[i] === "Reddit") {
            salary -= 50;
        }
    }

    if (salary <= 0) {
        console.log("You have lost your salary.");
        return;
    } else {
        console.log(`${salary}`);
    }
}

salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])



