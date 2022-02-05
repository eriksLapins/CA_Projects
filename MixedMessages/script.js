// Hello
const random1 = ['Friend', 'Enemy', 'Traitor', 'Sock', 'Person', 'Robot'];
// You are
const random2 = ['doomed', 'Evil', 'my best friend', 'a threat to humanity', 'not dead'];

const mixedMessages = (array1, array2) => {
    let random1Num = Math.floor(Math.random()*random1.length)
    let random2Num = Math.floor(Math.random()*random2.length)
    return `Hello ${array1[random1Num]}. You are ${array2[random2Num]}`
};


console.log(mixedMessages(random1, random2));
