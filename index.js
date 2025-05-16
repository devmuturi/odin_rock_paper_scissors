function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const computedChoices = choices[Math.floor(Math.random() * choices.length)];
    return computedChoices;
}

console.log(getComputerChoice())
