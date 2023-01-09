// let str = 'Hello world and beyond';
// let first = str.split(' ')[0];
// console.log(first);

function firstWord(phrase) {
    let mots = phrase.split(' ');
    return mots[0];
}

console.log(firstWord('Hello world and beyond'));