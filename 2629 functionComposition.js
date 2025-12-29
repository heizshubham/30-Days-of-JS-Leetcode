// 2629. Function Composition

// Given two functions, func and arr, where func is a function that takes an integer as input and returns an integer, and arr is an array of integers, return a new array where each element is the result of applying func to the corresponding element in arr.

// Here's the implementation:

var compose = function(func, arr) {
    const newarr = []   // Create a new array to store results
    for(let i=0; i<arr.length; i++){
        // Apply the function to the current element
        newarr[i] = func(arr[i])
    }
    return newarr  // Return the newly created array
};





// ------------------------------------------




