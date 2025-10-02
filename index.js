//Code your solutions in this file
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
}
fiveToOneHundred();


const multiplesOfThree = () => {
    for (let i = 0; i <= 100; i += 3) {
        console.log(i);
    }
}
multiplesOfThree();

const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}
multiplesOfThreeOrFive();


const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }

}
untilNum(42);


const multiply = (num1, num2) => {
    return num1 * num2;
}
multiply(3, 7.5);


const add = (num1, num2) => {
    if (num1 !== num2) {
        return num1 + num2;
    } else {
        return num1 + num2 * 3;
    }
}
console.log(add(10, -5));


const isNegative = (num) => {
    if (num < 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isNegative(Math.PI));


const triangleArea = (num1, num2) => {
    return num1 * num2 * .5;
}
console.log(triangleArea(5, 7));


const betweenTwentyAndFourty = (num) => {
    if (num > 20 && num < 40) {
        return true;
    } else {
        return false;
    }
}
console.log(betweenTwentyAndFourty(40));


const largest = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
console.log(largest(30, 22, 17));



//BONUS ODD NUMBERS

//11
const printTime = () => {
    const t = new Date(); //new customizable Date object

    //gets time variables from t and formats to a 2-digit number
    let seconds = String(t.getSeconds()).padStart(2, "0");
    let minutes = String(t.getMinutes()).padStart(2, "0");
    let hours = String(t.getHours()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
}
console.log(printTime());










//13
const getExtention = (file) => {
    //finds the start of the file extension
    const start = file.lastIndexOf(".");

    //finds the end or length of the file name
    const end = file.length;

    return file.substring(start, end);
}
console.log(getExtention("README.md"));








//15
const switchLetters = (word) => {
    let switched = "";

    //finds what will be the new start, middle, and end strings
    const start = word[word.length - 1];
    const middle = word.substring(1, word.length - 1);
    const end = word[0];

    //identifies if string is longer than a char to perform switch
    if (word.length > 1) {
        switched = start + middle + end;
    } else {
        switched = word;
    }

    return switched;
}
console.log(switchLetters("hello world"));