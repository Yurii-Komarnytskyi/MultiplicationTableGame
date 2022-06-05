const TWO_TO_NINE = [...Array.from(Array(8)).map((val, ind) => val = ind + 2)]

const randomInt = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const createRandom = (arrOfTables, isDefaultModeOn = false) => {
    if(isDefaultModeOn) return `${randomInt(2, 9)} * ${randomInt(2, 9)} =`;
    return `${arrOfTables[randomInt(0, arrOfTables.length-1)]} * ${randomInt(2, 9)} =`;
}
const extractCorrectAnsw = (str) => +str[0] * +str.slice(4, 5);
const compareGathered = (enteredVal, corectAnsw, prevScore) => {
    (+enteredVal === corectAnsw)? prevScore.correct += 1 : prevScore.incorrect += 1;
    return prevScore;
}

export {
    randomInt,
    createRandom,
    compareGathered,
    extractCorrectAnsw,
    TWO_TO_NINE
};