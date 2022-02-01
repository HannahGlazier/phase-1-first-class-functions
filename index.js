
function receivesAFunction(callback) {
    let greeting = "Hello!"
    callback(greeting)
}


function returnsANamedFunction() {
    return function receivesAFunction() {}
}

function returnsAnAnonymousFunction() {
    return (function () {
     console.log("hello anonymous!")
     });
}


