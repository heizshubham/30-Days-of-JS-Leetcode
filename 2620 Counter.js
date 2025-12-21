//Use of closures to create a counter function that starts from a given number n and increments by 1 each time it is called.


// var createCounter = function(n) {
//     let count = n;
//     return function() {
//         return count++;
//     };
// };





var createCounter = function(n) {
    return function() {
        return n++
    };
};