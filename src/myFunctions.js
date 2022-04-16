const randomInt = (s, e) => Math.floor(s + Math.random() * (e + 1 - s));
const createRandom = (arg) => {
    if(arg === `default`) return `${randomInt(2, 9)} * ${randomInt(2, 9)}`;
    return `${randomInt(+arg, +arg)} * ${randomInt(2, 9)}`;
}
const extractCorrectAnsw = (str) => +str[0] * +str.slice(4, 5);
const compareGathered = (enteredVal, corectAnsw,) => (+enteredVal === corectAnsw)? 't' : 'f';
export {
    randomInt, 
    createRandom, 
    compareGathered, 
    extractCorrectAnsw
}; 
