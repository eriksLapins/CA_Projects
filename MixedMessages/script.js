// Hello
const random1 = ['Friend', 'Enemy', 'Traitor', 'Sock', 'Person', 'Robot'];
// You are
const random2 = ['doomed', 'Evil', 'my best friend', 'a threat to humanity', 'not dead'];
// Thank you
const random3 = ['bye', 'die', 'cry', 'I\'ll go cry', 'just let me breathe', 'I don\'t like you']

const mixedMessages = (array1, array2, array3) => {
    let random1Num = Math.floor(Math.random()*array1.length);
    let random2Num = Math.floor(Math.random()*array2.length);
    let random3Num = Math.floor(Math.random()*array3.length);

    return `Hello ${array1[random1Num]}. You are ${array2[random2Num]}. Thank you, ${array3[random3Num]}!`;
};


console.log(mixedMessages(random1, random2, random3));
