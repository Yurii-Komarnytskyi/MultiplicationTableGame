const randomInt = (s, e) => Math.floor(s + Math.random() * (e + 1 - s));
const createRandom = () => `${randomInt(2, 9)} * ${randomInt(2, 9)}`;
const extractCorrectAnsw = (str) => +str[0] * +str.slice(4, 5);
const compareGathered = (enteredVal, corectAnsw) => {
    console.log('compareGathered feried : ', 'enteredVal:',enteredVal, 'corectAnsw:',corectAnsw);
    if (+enteredVal === corectAnsw) console.log(`true in compareGathered`);
    else console.log(`false in compareGathered`);
}

export {randomInt, createRandom, compareGathered, extractCorrectAnsw}; 