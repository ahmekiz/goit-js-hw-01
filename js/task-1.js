function makeTransaction(quantity, pricePerDroid) {
    const message=`You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`;
    return message;
}
makeTransaction();

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));