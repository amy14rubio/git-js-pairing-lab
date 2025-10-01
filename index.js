//Code your solutions in this file
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i)
    }
}

// fiveToOneHundred();


const multiplesOfThree = () => {
    for (let i = 0; i <= 100; i += 3) {
        console.log(i)
    }

}
// multiplesOfThree()

const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i)
        }

    }
}
// multiplesOfThreeOrFive()


const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }

}
// untilNum(42)

const multiply = (num1, num2) => {
    return num1 * num2;
}

// multiply(3, 7.5)


const add = (num1, num2) => {
    if (num1 !== num2) {
        return num1 + num2
    } else {
        return num1 + num2 * 3
    }
}
// console.log(add(10, -5))


const isNegative = (num) => {
    if (num < 0) {
        return true
    } else {
        return false
    }
}
// console.log(isNegative(Math.PI))


const triangleArea = (num1, num2) => {
    return num1 * num2 * .5
}
// console.log(triangleArea(5, 7))

const betweenTwentyAndFourty = (num) => {
    if (num > 20 && num < 40) {
        return true
    } else {
        return false
    }
}

console.log(betweenTwentyAndFourty(40))