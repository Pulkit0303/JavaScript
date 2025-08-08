const languages = {
    js : "Javascript",
    cpp : "C++",
    sh : "Shell"
}
//We use for-in to iterate elements inside an object
for (const key in languages) {
    console.log(`${key} is shortform of ${languages[key]}`)
}

const arr = [1,2,3,4,5]
//For in is printing the indexes of the array instead of values
for (const key in arr) {
    console.log(key);
}