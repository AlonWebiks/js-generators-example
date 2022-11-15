const arr = [1, 2, 3];

// for (const num of arr) {
//     console.log(num);
// }


function* gen() {
    for (let index = 0; index < 100; index++) {
        yield index;
    }
}

// const iter = {
//     [Symbol.iterator]: gen,
//     myLength: 10

        
// }

for (const num of gen()) {
    console.log(num);
}