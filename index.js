function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}
function writeCards(names, eventName) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}