let credits = 23500;
const pricePerDroid = 3000;
let droidAmount = prompt('How many droids you wanna to buy?');
let totalPrice = 0;

if (droidAmount === null) {
  console.log('Cancelled by user');
} else {
totalPrice = pricePerDroid * droidAmount;
  if (totalPrice >= credits) {
    alert('You have insufficient funds!!!');
  } else {
    credits = credits - totalPrice;
    alert(`You have bought ${droidAmount} droids, your account balance is ${credits} credits`);
  }
}