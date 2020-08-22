let coords = field.getBoundingClientRect();

let answer1 = [coords.left, coords.top];
let answer2 = [coords.right, coords.bottom];

let answer3 = [coords.left + field.clientLeft, coords.top + field.clientTop];

let answer4 = [
    coords.left + field.clientLeft + field.clientWidth,
    coords.top + field.clientTop + field.clientHeight
];

console.log(
    answer1,    answer2,
    answer3,
    answer4,
)

console.log(`    ${answer1},    ${answer2},    ${answer3},    ${answer4},    `)