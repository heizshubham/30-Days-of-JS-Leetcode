// Add Two Promises



// new Promise((resolve, reject) => {
//     let fileLoader = true

//     if (fileLoader) {
//         resolve("File Loaded")
//     } else {
//         reject("File Not Found")
//     }
// })

// myPromise.then((value => console.log(value))).catch((error) => console.log(error))

// In the above code, we create a new Promise that simulates a file loading operation. If the fileLoader variable is true, we call the resolve function with the message "File Loaded". If it's false, we call the reject function with the message "File Not Found".

// We then use the then method to handle the resolved value and log it to the console. If the Promise is rejected, we use the catch method to handle the error and log it to the console.




// function loadFile(( ) {
//     return new Promise((resolve, reject) => {
//         let fileLoader = true

//         if (fileLoader) {
//             resolve("File Loaded")
//         } else {
//             reject("File Not Found")
//         }
//     })
// }

// async function myFunction() {
//     try {
//         const value = await loadFile();
//         console.log(value) // "File Loaded"
//     } catch (error) {
//         console.log(error) // "File Not Found"
//     }
// }

// myFunction()// In this example, we define a function loadFile that returns a Promise simulating a file loading operation. The myFunction is an async function that uses await to wait for the Promise returned by loadFile to resolve or reject. We use a try-catch block to handle both the resolved value and any potential errors.// 2723. Add Two Promises

// The addTwoPromises function takes two Promises as input, promise1 and promise2. It returns a new Promise that resolves to the sum of the resolved values of the two input Promises.

// We use the Promise.all method to wait for both input Promises to resolve. The Promise.all method takes an array of Promises and returns a new Promise that resolves when all of the input Promises have resolved. The resolved value is an array containing the resolved values of each input Promise in the same order.

// Once both Promises have resolved, we use the then method to access the array of resolved values. We destructure the array into two variables, value1 and value2, which represent the resolved values of promise1 and promise2, respectively.

// Finally, we return the sum of value1 and value2. This sum becomes the resolved value of the new Promise returned by addTwoPromises.

// Here's the implementation:


async function addTwoPromises(promise1, promise2) {
    // Wait for both promises to resolve using Promise.all()
    // Promise.all() returns an array of resolved values [value1, value2]
    const [val1, val2] = await Promise.all([promise1, promise2]);
    // Promise.all takes an iterable of promises as input and returns a single promise. and it reject when any of the input's promises reject, with this first rejection reason.

    // Return the sum, which will be wrapped in a resolved promise by the async function
    return val1 + val2;
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */