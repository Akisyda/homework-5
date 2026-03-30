            //задача 1
let a = "10";
let b = "20";
let c = "30";

// Перетворення в числа
a = Number(a);
b = Number(b);
c = Number(c);

// Обчислення середнього
let average = (a + b + c) / 3;

// Вивід
console.log(`Average: ${average}`);
// задача 2
let bill = "275";
let tipPercent = "15";

// Перетворення
bill = Number(bill);
tipPercent = Number(tipPercent);

// Обчислення
let tip = bill * tipPercent / 100;
let total = bill + tip;

// Вивід
console.log(`Tip: ${tip}`);
console.log(`Total: ${total}`);
// задача 3
let distance = "350";
let fuelPer100km = "8";
let fuelPrice = "60";

// Перетворення
distance = Number(distance);
fuelPer100km = Number(fuelPer100km);
fuelPrice = Number(fuelPrice);

// Обчислення
let fuelNeeded = (distance / 100) * fuelPer100km;
let tripCost = fuelNeeded * fuelPrice;

// Вивід
console.log(`Fuel needed: ${fuelNeeded}`);
console.log(`Trip cost: ${tripCost}`);