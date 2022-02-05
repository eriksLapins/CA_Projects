
// Set up of message parts

const greeterMessage = {
    greeter: ['Hello,', 'Good morning,', 'Good Evening,', 'Shalom,', 'Ciao,'],
    identificator: ['Friend.', 'Enemy.', 'Traitor.', 'Sock.', 'Person.', 'Robot.'],
    youAre: ['You are'],
    identityName: ['doomed.', 'Evil.', 'my best friend.', 'a threat to humanity.', 'not dead.'],
    thankYou: ['Thank you,'],
    messager: ['bye', 'die', 'cry', 'I\'ll go cry', 'just let me breathe', 'I don\'t like you']
}

function randomNumber(number) {
    return Math.floor(Math.random() * number);
}

const mixedMessages = (objectOfArrays) => {
    let message = [];
    for (let array in objectOfArrays) {
        let currentArray = objectOfArrays[array];
        let randNumber = randomNumber(currentArray.length);
        message.push(currentArray[randNumber]);
    }
    formattedMessage = message.join(' ');

    return formattedMessage;
};

//mixedMessages(greeterMessage)
console.log(mixedMessages(greeterMessage));
