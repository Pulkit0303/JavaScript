const myProm = new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log("Async Function executed!")
        resolve()
    },1000)
})
myProm.then(()=>{
    console.log("Promise completed!")
})

// //Industry Used Method
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task 2 ")
        resolve()
    },1000)
}).then(()=>{+
    console.log("Promise Consumed!")
})

// // Providing Object as parameter
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({name: "Pulkit", age: 22})
    },3000)
}).then((userObj)=>{
    console.log(userObj)
})

//Trying Reject and catch and then chaining
new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false
    if (!error){
        resolve({name: "Pulkit", email: "pulkit@apple.in"})
    } else {
        reject("ERROR! Something went wrong")
    }
  }, 1000);
})
  .then((userDetail) => {
    console.log(userDetail);
    return userDetail["email"];
  })
  .then((userAllowed) => {
    console.log(`User email is : ${userAllowed}`);
  })
  .catch((err) => {
    console.log(err);
  });

// Use of async function and await
  const twoPromise = new Promise((resolve, reject) => {
  setTimeout(()=>{
    let error = true
    if(!error){
        resolve({name: "JS", email: "js@example.com"})
    } else {
        reject("ERROR! JS went wrong")
    }
  },1000)
})

// // It is compulsory to add a try-catch block otherwise error
async function consumeProm(){
    try {   //You define a try-catch block inside async function 
        const response = await twoPromise
        console.log(response);
        
    } catch (error) {
        console.log(error)
    }
}  
consumeProm()

async function getGitHub(){
    try {
        const response = await fetch('https://api.github.com/users/Pulkit0303') // We used await because it take to fetch data from url
        const dataGitHub = await response.json() // We used await because it takes time to convert it from string to Object
        console.log(dataGitHub)
    } catch (error) {
        console.log("E: ",error)
    }
}
getGitHub()

fetch('https://api.github.com/users/Pulkit0303')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((e)=>console.log(e))