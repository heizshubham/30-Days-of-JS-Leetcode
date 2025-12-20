// function within function

// function fun(){
//     function f(a,b){
//         const sum = a+b
//         return sum

//     }
//     return f
// }

// var result = fun()
// console.log(result(2,3)) 

// ---------------------------------------------


// function createHelloWorld(){
//     function f(){
//         return "Hello World"
//     }
//     return f
// }

// 0r

var createHelloWorld = function(){
    return function(...args){
        return "Hello World"
    }
}