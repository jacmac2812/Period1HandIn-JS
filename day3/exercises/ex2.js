const fetch = require("node-fetch");
const URL = "https://swapi.dev/api/people/"

async function fetchPerson(url){
    try {
        const n = await fetch(url).then(res => res.json());
        return n;
    } catch (err) {
        console.log(err);
    }
}

async function printNames() {
    console.log("Before");
    const person1 = await fetchPerson(URL+'1');
    const person2 = await fetchPerson(URL+'2');
    console.log(person1.name);
    console.log(person2.name);
    console.log("After all");
}

printNames();