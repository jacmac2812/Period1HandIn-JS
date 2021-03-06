
function messageDelay(msg, delay) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const upperCased = msg.toUpperCase();
            resolve(upperCased)
        }, delay)
    })
}

const promises = [
    messageDelay("Hi", 1300),
    messageDelay("Hi Class", 100),
    messageDelay("Hi World", 2000)
]


//messageDelay("Hi Class", 1000).then(uMsg => console.log(uMsg));

Promise.any(promises).then((upperCased) => console.log(upperCased));