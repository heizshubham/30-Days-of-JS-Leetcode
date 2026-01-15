//


// let myMap = new Map([
//     ['name', 'Shubham'],
//     [true, 'Boolkey'],
//     [1, 'NumberKey']
// ])

// myMap.set('age', 21)

// console.log(myMap) // Map(4) {'name' => 'Shubham', true => 'Boolkey', 1 => 'NumberKey', 'age' => 21}

// console.log(myMap.get('name')) // Shubham
// console.log(myMap.has('gender')) // false

// myMap.delete('name')
// console.log(myMap) // Map(3) {true => 'Boolkey', 1 => 'NumberKey', 'age' => 21}





class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }
    // Methods defined inside the class
    set(key, value, duration) {

        const alreadyExists = this.cache.get(key);

        if (alreadyExists) {
            clearTimeout(alreadyExists.timeoutId);
        }

        const timeoutId = setTimeout(() => {
            this.cache.delete(key);
        }, duration);

        this.cache.set(key, { value, timeoutId });
        return Boolean(alreadyExists);
    }

    get(key) {
        if (this.cache.has(key)) {
            return this.cache.get(key).value;
        }
        return -1;
    }

    count() {
        return this.cache.size;
    }
}