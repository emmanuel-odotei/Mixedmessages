const getRandNumber = num => {
    return Math.floor(Math.random() * num);
}

const knockKnock = {
    nameList: ['Wooden shoe', 'Atch', 'Yah','I am', 'Harry'],
    extraStatement: ['Wooden shoe like to hear another joke?', 'Bless You!', 'No! I prefer google', 'You don\'t know who you are?', 'Harry up and lock the door.']
}

let knockJoke = [];

for(let propt in knockKnock) {
    let indeX = getRandNumber(knockKnock[propt].length)

    switch(propt) {
        case 'nameList':
            knockJoke.push(`Knock, knock. Who's there? ${knockKnock[propt][indeX]}. ${knockKnock[propt][indeX]} who?`)
            break
        case 'extraStatement':
            knockJoke.push(`${knockKnock[propt][indeX]}`)
            break
        default:
            knockJoke.push('Jokes session ended')
    }
}

const fulJoke = (joke) => {
    const compileJoke = knockJoke.join('\n')
    console.log(compileJoke)
}

fulJoke(knockJoke);