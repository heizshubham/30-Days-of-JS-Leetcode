// explanation is like that... 
// 2621. Sleep

// The sleep function takes an integer millis as input and returns a Promise that resolves after the specified number of milliseconds.
// We use the setTimeout function to create a delay. The setTimeout function takes a callback function and a delay time in milliseconds.
// When the setTimeout timer expires, it calls the callback function, which in this case is the resolve function of the Promise.
// This effectively makes the Promise resolve after the specified delay, allowing us to use the sleep function with async/await syntax.

// Here's the implementation:




async function sleep(millis) {
    return new Promise((resolve) => setTimeout(resolve, millis)
    )
    
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */