//while loop
let i = 1
while (i<=5) {
    console.log(i)
    i++
}

//Using while loop to print elements from the array
const f1 =["Lewis","Max","Oscar"]
let position = 0
while(position<f1.length){
    console.log(f1[position])
    position = position + 1
}

// In do-while loop the execution is done first then the condition is checked. So it executes atleast once even if the condition is not met
let score = 11
do {
    console.log(`Score is ${score}`)
} while (score <= 10);