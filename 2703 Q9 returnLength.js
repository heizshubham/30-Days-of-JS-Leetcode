// the explanation is that we need to keep track whether the function has been called or not
// we can do this by using a boolean variable called 'called' which is initially set to false
// when the returned function is called for the first time, we check if 'called' is false
// if it is false, we set it to true and call the original function fn with the provided arguments
// on subsequent calls, since 'called' is now true, we simply return undefined without calling fn again



var once = function(fn) {
    let called = false;

    return function(...args) { // The returned function
        if (called ) {
            return undefined
        }
        called = true
        return fn(...args)
    };
};


/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
