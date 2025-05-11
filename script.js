//1.function return computer choice
const getComputerChoice = function(){
  const getRandomNum = Math.floor(Math.random()*3);
  let result;
  if (getRandomNum === 0){
    result = "rock"
  } else if (getRandomNum === 1) {
    result = "paper"
  } else {
    result = "scissors"
  }
  //console.log("computer:", result);
  return result;  
  
};


//2. function return human choice
const getHumanChoice = function(){
  return prompt("write: rock or paper or scissors");
};


//3. The logic to play a single round
const scoreSystem = function(){
  let humanScore = 0;
  let computerScore = 0;
  const update = function(winner) {
    if (winner === "human") {
      humanScore++;
    } else if(winner === "computer") {
      computerScore++;
    }
  }
  const get = function(){
    return humanScore + ":" + computerScore;
  } 
  return {update, get};
};
const actualScore = scoreSystem();
const updateScore = actualScore.update;
const getScore = actualScore.get;


const playRound = function (humanChoice, computerChoice){
  console.log(`You chose: ${humanChoice}`);
	console.log(`Computer chose: ${computerChoice}`);
  const conditionWin1 ="We are champion! rock beats scissors";
  const conditionWin2 ="We are champion! scissors beats paper";
  const conditionWin3 ="We are champion! paper beats rock";
  const conditionLose1 ="We are Loser! rock beats scissors";
  const conditionLose2 ="We are Loser! scissors beats paper";
  const conditionLose3 ="We are Loser! paper beats rock";

  if (humanChoice === "rock" && computerChoice === "scissors"){
    updateScore("human");
    return console.log(conditionWin1);
  } else if (humanChoice === "scissors" && computerChoice === "paper"){
    updateScore("human");
    return console.log(conditionWin2)
  } else if (humanChoice === "paper" && computerChoice === "rock"){
    updateScore("human")
    return console.log(conditionWin3)
  } else if (humanChoice === "scissors" && computerChoice === "rock"){
    updateScore("computer")
    return console.log(conditionLose1)
  } else if (humanChoice === "paper" && computerChoice === "scissors"){
    updateScore("computer")
    return console.log(conditionLose2)
  } else if (humanChoice === "rock" && computerChoice === "paper"){
    updateScore("computer")
    return console.log(conditionLose3)
  } else {
    return console.log("oops it's a DRAW!")
  }
  
};



//playRound(humanSelection, computerSelection);


const playGame = function (){
 for (let round=1; round <=5; round++){
  console.log(`\n===Round ${round}===`);
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection,computerSelection);
  console.log(`current score: ${getScore()}`)
 }
  
 const [human, computer] = getScore().split(":").map(Number);
  console.log("\n=== Final Result ===");
  console.log(`Final Score: Human ${human} - Computer ${computer}`);
  
  if (human > computer) {
    console.log("Congratulations! You win the game!");
  } else if (computer > human) {
    console.log("Game over! Computer wins!");
  } else {
    console.log("It's a tie game!");
  }
};
playGame();