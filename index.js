// //Code your solutions in this file
// const fiveToOneHundred = () => {
//     for (let i = 5; i <= 100; i++) {
//         console.log(i)
//     }
// }

// fiveToOneHundred();


// const multiplesOfThree = () => {
//     for (let i = 0; i <= 100; i += 3) {
//         console.log(i)
//     }

// }
// multiplesOfThree()

// const multiplesOfThreeOrFive = () => {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             console.log(i)
//         }

//     }
// }
// multiplesOfThreeOrFive()


// const untilNum = (num) => {
//     for (let i = 1; i <= num; i++) {
//         console.log(i)
//     }

// }
// untilNum(42)

// const multiply = (num1, num2) => {
//     return num1 * num2;
// }

// multiply(3, 7.5)


// const add = (num1, num2) => {
//     if (num1 !== num2) {
//         return num1 + num2
//     } else {
//         return num1 + num2 * 3
//     }
// }
// console.log(add(10, -5))


// const isNegative = (num) => {
//     if (num < 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isNegative(Math.PI))


// const triangleArea = (num1, num2) => {
//     return num1 * num2 * .5
// }
// console.log(triangleArea(5, 7))

// const betweenTwentyAndFourty = (num) => {
//     if (num > 20 && num < 40) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(betweenTwentyAndFourty(40))



// const largest = (num1, num2, num3) => {
//     if (num1 > num2 && num1 > num3) {
//         return num1
//     } else if (num2 > num1 && num2 > num3) {
//         return num2
//     } else {
//         return num3
//     }
// }
// console.log(largest(30, 22, 17))


//BONUS EVEN NUMBERS

//12
const isLeapYear = (year) => {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else if (year % 400 === 0 && year % 100 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear(1999));


//14
const absoluteNineteen = (num) => {
    let abs = Math.abs(num - 19);
    return num > 19 ? abs * 3 : abs;
}
console.log(absoluteNineteen(11));


//16
const changeString = (str) => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        //get character number
        let findChar = str.charCodeAt(i);
        //shift char by 1 and add it to newStr
        newStr += String.fromCharCode(findChar + 1);
    }
    return newStr;
}
console.log(changeString("helloworld"));