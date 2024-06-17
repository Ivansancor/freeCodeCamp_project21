// Pyramid generator

const character = "+";
const rows = 6;
let arr = [];
let inverted = true;

function createHeight(number) {
    if (inverted) {
        for (let i = number; i > 0; i--) {
            for (let j = 1; j <= i; j++) {
                arr = [];
                arr.push(character.repeat(j * 2 - 1));     
            }
            console.log(" ".repeat(number - i) + arr.toString());
        }
    } else {
        for (let i = 1; i < number + 1; i++) {
            for (let j = 1; j <= i; j++) {
                arr = [];
                arr.push(character.repeat(j * 2 - 1));     
            }
            console.log(" ".repeat(number - i) + arr.toString());
        }
    }
}

createHeight(rows);