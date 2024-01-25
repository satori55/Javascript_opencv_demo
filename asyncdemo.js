function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedFunction() {
    console.log("1");
    await sleep(1000);
    console.log("0");
}

delayedFunction();
console.log("2");
console.log("3");
console.log("4");