// Object is a collection of key-value pairs

// function within object
// Object Literal Syntax
// var person = {
//     name: "Shubham",  // here name is a key and "Shubham" is its value
//     age: 22,

//     greet(name) {
//         return "good morning " + name;
//     }
// };

// console.log(person.greet("Shubham")); // Output: good morning Shubham




// objects within function
// function Calc(val){
    // const obj = {   // object literal syntax or object creation
        // add(val1) {   // function within object
    //         var a = val + val1;
    //         return a;
    //     },
    //     sub(val1) {
    //         var b = val - val1;
    //         return b;
    //     }
    // };
    // return obj;
// }

// console.log(Calc(5).add(2)); // Output: 7
// console.log(Calc(5).sub(2)); // Output: 3



// functions within function
// function Calc(val){

//     function add(val1){   // 1st function within function
    //     var a = val + val1;
    //     return a;
    // }

    // function sub(val1){     // 2nd function within function
//         var b = val - val1;
//         return b;
//     }

//     return {
//         add , sub
//     };
// }

// agar function ke andar multiple functions likhne hai toh usko return karne ke liye object banana hoga


var expect = function(val){
    obj = {
        toBe(val1){
            if(val === val1) return true;   // triple equal to check value as well as type, double equal to check value only
            //in js triple equal means stricky equal
            else throw new Error("Not Equal");  // throw is used to create custom error
        },
        notToBe(val1){
            if(val !== val1) return true;
            else throw new Error("Equal");
        }
    };
    return obj;
};