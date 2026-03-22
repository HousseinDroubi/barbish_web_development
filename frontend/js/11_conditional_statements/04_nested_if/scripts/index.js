const week_day = 3;

if (week_day >= 1 && week_day <= 7) {
  if (week_day == 1) {
    console.log("Mon");
  } else if (week_day == 2) {
    console.log("Tue");
  } else if (week_day == 3) {
    console.log("Wen");
  } else if (week_day == 4) {
    console.log("Thu");
  } else if (week_day == 5) {
    console.log("Fri");
  } else if (week_day == 6) {
    console.log("Sat");
  } else {
    console.log("Sun");
  }
} else {
  console.log("Invalid week day");
}
