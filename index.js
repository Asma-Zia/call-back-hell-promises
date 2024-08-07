// call back hell
setTimeout(function () {
    console.log("Called to head");
    setTimeout(function () {
        console.log("head to master head");
        setTimeout(function () {
            console.log("Information update!");
        }, 10000);
    }, 200);
}, 20000);
// Promise 
var promises = new Promise(function (resolve, reject) {
    console.log("Promise called");
    var obj = {
        name: "asma",
        age: 20,
        class: "Thursday"
    };
    resolve(obj);
    reject("Something went wrong!");
});
promises.then(function (res) { return console.log(res); }).catch(function (err) { return console.log(err); });
