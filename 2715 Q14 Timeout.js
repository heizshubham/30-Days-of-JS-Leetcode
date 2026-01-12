// #setTimeout() :- it is a function in javascript that allows you to schedule the execution of a function after an amount of time (milliseconds).
// #Syntax :-
// setTimeOut(callback, delay)

// Delay is the time which is in milliseconds and Callback is the function in which we have to put the timer.
// We can also say that the setTimeOut is the stopwatch for their function.

// Eg:-
// setTimeout(function() {
// 		console.log("Hello Everyone")
// 		}, 3000)

// // it will display Hello Everyone after 3 sec.




// #clearTimeout() :- can cancel a timeout before it triggers.


// const timeoutID = setTimeout function() {
// 		console.log(“Hello Everyone”)
// 		}, 3000)
// clearTimeout(timeoutID)

// // it will not display anything.






var cancellable = function(fn, args, t) {
    
    const cancelFn = function(){
        clearTimeout(timer)
    }

    const timer = setTimeout(() =>{
        fn(...args)
    }, t)

    return cancelFn
};



/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
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
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */