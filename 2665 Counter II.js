// 2665. Counter II

// We create an object with three methods: increment, decrement, and reset.
// Each method modifies the internal state (the current value of n) accordingly.
// The increment method increases n by 1 and returns the new value.
// The decrement method decreases n by 1 and returns the new value.
// The reset method resets n to its initial value and returns that value.

// Here's the implementation:



var createCounter = function(init) {
    const n = init
    var obj = {       // return{
        increment(){
            return init +=1
        },
        decrement(){
            return init -=1
        },
        reset(){
            return init = n
        }
    }
    return obj   // no need of return obj here, we can return the object directly
    
};



// or we can write like this

// var createCounter = function(init) {
//     const n = init
//     return {     
//         increment(){
//             return init +=1
//         },
//         decrement(){
//             return init -=1
//         },
//         reset(){
//             return init = n
//         }
//     }    
// };



//object return karna hai jisme 3 methods hai increment,decrement,reset
