let pushMessage = () => {};

const getMessage = () => {
    return new Promise(resolve => {
        pushMessage = resolve
    })
}

const publish = (msg) => {
    pushMessage(msg);
}

async function* pubsub() {
    while (true) {
        const msg = await getMessage();
        yield msg;
    }
}

async function onMessage() {
    for await(const msg of pubsub()) {
        console.log(msg);
    }
} 
onMessage();

let i = 0;
setInterval(() => {
    publish(i++)
}, 1000)

