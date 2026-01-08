// explaination is that we are returning an object with three methods: increment, decrement, and getValue. Each method has access to the count variable through closure, allowing them to modify and retrieve its value as needed.


// 2623. Memoize

// Memoization is an optimization technique used to speed up function calls by caching the results of expensive function calls and returning the cached result when the same inputs occur again.

// Here is the implementation of the memoize function:
function memoize(func) {
    let cache = {}
    
    return function(...args) {
        let n = JSON.stringify(args)
        if (n in cache) {
            return cache[n]
        } else {
            let result = func.apply(this, args) // apply function
            cache[n] = result
            return result
        }
        
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */