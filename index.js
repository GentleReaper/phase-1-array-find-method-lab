 const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
  ]
superbowlWin= record=>{
    const win = record.find(score => score.result === "W");
    return win ? win.year : undefined;
  }
  console.log(superbowlWin(record))
  