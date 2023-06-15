// Only change code below this line
function countdown(n){
  if (n < 1){
    return [];
  } else {
    const arrayCountdown = countdown(n - 1)
    arrayCountdown.unshift(n)
    return arrayCountdown
  }
}
// Only change code above this line