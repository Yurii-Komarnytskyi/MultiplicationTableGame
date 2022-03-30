const randomInt = (s, e) => Math.floor(s + Math.random() * (e + 1 - s));
const createRandom = () => `${randomInt(2, 9)} * ${randomInt(2, 9)}`;
const extractCorrectAnsw = (str) => +str[0] * +str.slice(4, 5);
// const compareGathered = (enteredVal, corectAnsw,) => {
//     console.log('compareGathered fired: ', 'enteredVal:',enteredVal, 'corectAnsw:',corectAnsw);
//     if (+enteredVal === corectAnsw) {
//         console.log('Score in true');        
//     }
//     else {
//         console.log('Score in false');
//     }
// }
const compareGathered = (enteredVal, corectAnsw,) => (+enteredVal === corectAnsw)? 't' : 'f';
export {randomInt, createRandom, compareGathered, extractCorrectAnsw}; 