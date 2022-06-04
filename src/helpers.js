const ONE_TO_NINE = [...Array.from(Array(8)).map((val, ind) => val = ind + 2)]

const randomInt = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const createRandom = (arrOfTables, isDefModeOn = false) => {
    if(isDefModeOn) return `${randomInt(2, 9)} * ${randomInt(2, 9)} =`;

    console.log(`${randomInt(arrOfTables.sort()[0], arrOfTables.sort()[arrOfTables.length-1])} * ${randomInt(2, 9)} = WHICH IS INSIDE createRandom`);
    return `${randomInt(arrOfTables.sort()[0], arrOfTables.sort()[arrOfTables.length-1])} * ${randomInt(2, 9)} =`;
}
const extractCorrectAnsw = (str) => +str[0] * +str.slice(4, 5);
const compareGathered = (enteredVal, corectAnsw,) => (+enteredVal === corectAnsw)? 't' : 'f';

export {
    randomInt,
    createRandom,
    compareGathered,
    extractCorrectAnsw,
    ONE_TO_NINE
};