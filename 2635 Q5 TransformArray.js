// Array 

// var num = [1, 2, 3, 4, 5]
// var a = num.map(fun)

// function fun(n){
//     return n+1
// }

// console.log(a)  
// output : [ 2, 3, 4, 5, 6 ]

// or

// var num = [1, 2, 3, 4, 5]
// var a = num.map((n)=>{
//     return n+1
// })

// console.log(a)  
// output : [ 2, 3, 4, 5, 6 ]




var map = function(arr, fn) {
    const newarr = []   // Create a new array to store results
    for(let i=0; i<arr.length; i++){
        // Apply the function to the current element and its index
        newarr[i] = fn(arr[i], i)
    }
    return newarr  // Return the newly created array
}