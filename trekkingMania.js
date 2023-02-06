function trekkingMania(input) {
    let climberGrups = Number(input[0]);

    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let count = 0;

    for (i = 1; i <= climberGrups; i++) {
        let climbers = Number(input[i]);
        count += climbers;
        if (climbers <= 5) {
            musala += climbers;
        } else if (climbers <= 12) {
            monblan += climbers
        } else if (climbers <= 25) {
            kilimandjaro += climbers
        } else if (climbers <= 40) {
            k2 += climbers;
        } else {
            everest += climbers;
        }
    }
    let musalaPercent = (musala / count) * 100;
    let monblanPercent = (monblan / count) * 100;
    let kilimandjaroPercent = (kilimandjaro / count) * 100;
    let k2Percent = (k2 / count) * 100;
    let meverestPercent = (everest / count) * 100;

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kilimandjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${meverestPercent.toFixed(2)}%`);

}

trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
