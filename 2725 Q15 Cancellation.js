// #setInterval :-

// function test(){
// 	console.log(“Shubham”)
// }
// setInterval(test, 1000)

// // it will print Shubham after every 1 sec


// #clearInterval :-

// function test(){
// 	console.log("Shubham")
// }
// Const stop = setInterval(test, 1000)

// setTimeout(() =>{
// 	clearInterval(stop)
// }, 5000)

// // it will print Shubham 4 time and at 5th sec clear Interval will execute







// 2725. Q15 Cancellation

// The cancellable function takes three parameters: fn (the function to be executed), args (an array of arguments to be passed to fn), and t (the time in milliseconds after which fn should be executed).

// Inside the cancellable function, we define a cancelFn function that, when called, will clear the timeout using clearTimeout(timer). This prevents the scheduled execution of fn.

// We then set a timeout using setTimeout, which will call fn with the provided args after t milliseconds. The timer variable holds the identifier for this timeout.

// Finally, we return the cancelFn function, allowing the caller to cancel the scheduled execution of fn if needed.

// Here's the implementation:

var cancellable = function(fn, args, t) {
    fn(...args)
    let timer = setInterval(() => {
        fn(...args)
    }, t)

    let cancleFn = () => clearInterval(timer)
    return cancleFn
    
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *   
 *  setTimeout(() => {
 *      console.log(result); // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 *  }, cancelTimeMs + t + 15)    
 */