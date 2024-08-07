// call back hell
setTimeout(() => {
    console.log("Called to head");
    setTimeout(() => {
        console.log("head to master head");
        setTimeout(() => {
            console.log("Information update!");
            
        }, 10000)
        
    }, 200)
    
}, 20000)

// Promise 

let promises = new Promise ((resolve, reject) => {
    console.log("Promise called");
    let obj = {
        name: "asma",
        age: 20,
        class: "Thursday"
    }
    resolve(obj)
    reject("Something went wrong!")
})
promises.then((res) => console.log(res)).catch((err) => console.log(err));