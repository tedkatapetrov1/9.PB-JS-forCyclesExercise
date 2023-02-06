function histogram(input) {

    let numsCount = Number(input[0]);
    let below200 = 0;
    let from200to399 = 0;
    let from400to599 = 0;
    let from600to799 = 0;
    let from800 = 0;
  
    for (let i = 1; i <= numsCount; i++) {
      if (input[i] < 200) {
        below200++;
      } else if (input[i] >= 200 && input[i] < 400) {
        from200to399++;
      } else if (input[i] >= 400 && input[i] < 600) {
        from400to599++;
      } else if (input[i] >= 600 && input[i] < 800) {
        from600to799++;
      } else {
        from800++;
      }
    }
  
    let p1 = (below200 / numsCount) * 100;
    let p2 = (from200to399 / numsCount) * 100;
    let p3 = (from400to599 / numsCount) * 100;
    let p4 = (from600to799 / numsCount) * 100;
    let p5 = (from800 / numsCount) * 100;
  
    console.log((p1.toFixed(2)) + "%");
    console.log((p2.toFixed(2)) + "%");
    console.log((p3.toFixed(2)) + "%");
    console.log((p4.toFixed(2)) + "%");
    console.log((p5.toFixed(2)) + "%");
  }
  

  histogram(["3",
  "1",
  "2",
  "999"])
  
  
  