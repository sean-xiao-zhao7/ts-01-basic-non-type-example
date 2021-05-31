"use strict";
const ele1 = document.getElementById("num1");
const ele2 = document.getElementById("num2");
const button = document.querySelector("button");
const results = [];
const texts = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    else {
        return +num1 + +num2;
    }
}
function printObj(obj) {
    console.log(obj.val);
}
button.addEventListener("click", () => {
    const num1 = ele1.value;
    const num2 = ele2.value;
    const result = add(+num1, +num2);
    results.push(result);
    const result2 = add(num1, num2);
    texts.push(result2);
    // console.log(result);
    // console.log(result2);
    //printObj({ val: result as number, timestamp: new Date() });
    console.log(results);
    console.log(texts);
});
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("worked");
    }, 1000);
});
promise.then((result) => {
    console.log(result);
});
