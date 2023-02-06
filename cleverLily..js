function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let money = 0;
    let evenBirtdayMoney = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money = money + (evenBirtdayMoney - 1);
            evenBirtdayMoney = evenBirtdayMoney + 10;
        } else {
            money = money + toyPrice;
        }
    }

    if (money >= washingMachinePrice) {
        let n = money - washingMachinePrice;
        console.log(`Yes! ${n.toFixed(2)}`);
    } else {
        let m = washingMachinePrice - money;
        console.log(`No! ${m.toFixed(2)}`);
    }
}

cleverLily(["10", "170.00", "6"])
