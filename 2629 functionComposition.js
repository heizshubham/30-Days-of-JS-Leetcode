// 2629. Function Composition

// Given two functions, func and arr, where func is a function that takes an integer as input and returns an integer, and arr is an array of integers, return a new array where each element is the result of applying func to the corresponding element in arr.

// Here's the implementation:

// var compose = function(func, arr) {
//     const newarr = []   // Create a new array to store results
//     for(let i=0; i<arr.length; i++){
//         // Apply the function to the current element
//         newarr[i] = func(arr[i])
//     }
//     return newarr  // Return the newly created array
// };





// ------------------------------------------


// function add(args){
//     return args[0] + args[1]
// }

// function mulTwo(val){
//     return val * 2
// }
// function square(val){
//     return val * val
// }

// const result = add(3, 4)  // output : 7
// console.log(square(result))  // output : 49

// console.log(addsquare(3,4))  // output : 49



// function compose(f1, f2){
//     return function(a,b){
//         return f2(f1(a,b))
//     }
// }

// or using arrow function

// const composeTwo = (f1, f2, f3) => (a,b) => f3(f2(f1(a,b)))

// const result = composeTwo(add, mulTwo, square)  // output : function
// console.log(result(3,4))  // output : 14



// composition of unlimited functions

// function composeAll(...funs){
//     return function(...values){
//         return funs.reduce((val, fn) => fn(val), values)
//     }
// }

// or using arrow function

// const composeAll = (...funs) => (...values) => funs.reduce((val, fn) => fn(val), values)


// const result = composeAll(add, mulTwo, square)  // output : function
// console.log(result(4,6))  // output : 100









// ----------------------------------------------------------

var compose = function(functions) {
    
    return function(x) {
        for(let i = functions.length -1; i>=0; i--){
            x = functions[i](x)
        }
        return x
    }
};