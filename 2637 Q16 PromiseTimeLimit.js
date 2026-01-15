// 2637. Promise Time Limit

// The timeLimit function takes a function fn that returns a Promise and an integer t representing the time limit in milliseconds.
// It returns a new function that, when called, will execute the original function fn with the provided arguments.
// Inside the returned function, we create a new Promise that sets up a timeout using setTimeout. If the timeout expires before the original Promise resolves, we reject the Promise with the message "Time Limit Exceeded".
// We also call the original function fn with the provided arguments and attach then and catch handlers to resolve or reject the new Promise based on the outcome of fn.
// This way, if fn resolves before the timeout, we resolve the new Promise with its value; otherwise, we reject it with the timeout message.

// Here's the implementation:


var timeLimit = function(fn, t) {
    
    return async function(...args) {
        return new Promise((resolve, reject) => {
            setTimeout(() => { reject("Time Limit Exceeded")}, t)

            fn(...args).then(resolve).catch(reject)
        })
        
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */