//Synatx - For Loop
for (let i = 0; i <= 5; i++) {
    const element = i
    if(element === 5){
        console.log("5 is in the loop!");
    }
    console.log(element)
}

//console.log(element) // Error because element is defined inside the 'for' loop block and not globally


//Nested For Loop (One loop inside one loop) [For every value of Outer Loop , Inner Loop will execute]
for (let i = 1; i <= 2; i++) {
    console.log(`Outer Loop value ${i}`);
    for (let j = 1; j <= 5; j++) {
        console.log(`Outer Loop value ${i} and Inner Loop value ${j}`);
    }
    console.log(" ");
}


//Multiplication Table Example
for (let i = 1; i <= 2; i++) {
    const firstN = i
    for (let j = 1; j <= 5; j++) {
        const secondN = j
        console.log(`${i} x ${j} = ${i*j}`)
    }
    console.log("");
}


//Basic Method of printing elements from array
const MyArr = ["Lewis", "Max", "Oscar"]
for (let index = 0; index < MyArr.length; index++) {
    const element = MyArr[index];
    console.log(element);
    
}

//Break and Continue

//In 'break' when the condition is met the loop breaks out
for (let num = 1; num <= 10; num++) {
    const element = num
    if(element === 5){
        console.log("5 has been found!");
        break
    }
    console.log(element);
}

//In 'continue' the condition is skipped and next condition is continued.
for (let num = 1; num <= 10; num++) {
    const element = num
    if(element % 2 ===0){
        continue
    }
    console.log(element);
}