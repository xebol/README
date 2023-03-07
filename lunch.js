const whatToDoForLunch = function(hungry, availableTime) {
  if (!hungry) {
    return "Wait";
  } else if (availableTime > 30) {
    return "Reconsider";
  } else if (availableTime >= 20 && availableTime <= 30) {
    return "You deserve a break";
  } else if (availableTime < 20) {
    return "Pick up a snack you have ready at home";
  }
};

console.log(whatToDoForLunch(false, 30));
console.log(whatToDoForLunch(true, 20));
console.log(whatToDoForLunch(true, 50));
console.log(whatToDoForLunch(true, 15));
console.log(whatToDoForLunch(true, 30));