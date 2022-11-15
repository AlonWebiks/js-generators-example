async function getRandomNum() {
    await new Promise(resolve => {
        setTimeout(resolve, 1000);
    });
    return Math.random();
}

async function* asyncGen() {
    
}

const iter = {
    [Symbol.asyncIterator]: asyncGen,
}

async function start() {
    for await (const num of iter) {
        console.log(num);
    }
}

start();