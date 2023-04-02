// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  return Math.abs(42 - someValue);
}

function distanceFromHqInFeet(someValue) {
  return 264 * distanceFromHqInBlocks(someValue);
}

function distanceTravelledInFeet(x, y) {
  return Math.abs(x - y) * 264;
}

function calculatesFarePrice(start, destination) {
  let des = distanceTravelledInFeet(start, destination);
  switch (true) {
    case des <= 400:
      return 0;
    case des < 2000:
      return (des - 400) * 0.02;
    case des < 2500:
      return 25;
    case des > 2500:
      return "cannot travel that far";
  }
}
