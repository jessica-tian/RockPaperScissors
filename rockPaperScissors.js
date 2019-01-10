var userInput = 'Rock';
userInput = userInput.toLowerCase();

function getComputerChoice() {
  var num = Math.floor(Math.random() * 3);
  console.log(num);
  switch(num){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
     	break;
    case 2:
      return 'scissors';
      break;
  }
}

function determineWinner(userChoice, computerChoice) {
	if(userChoice === computerChoice) {
    return 'tie';
  } else if (userChoice === 'rock'){
    if(computerChoice === 'scissors'){
      return 'you win!';
    } else {
      return 'you lose!';
    }
  } else if (userChoice === 'scissors'){
    if(computerChoice === 'paper'){
      return 'you win!';
    } else {
      return 'you lose!';
    }
  } else {
    if(computerChoice === 'rock'){
      return 'you win!';
    } else {
      return 'you lose!';
    }
  }
}

function playGame(){
  var userChoice = userInput;
  var computerChoice = getComputerChoice();
  console.log('userInput: ' + userChoice + '\ncomputerChoice: ' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();


