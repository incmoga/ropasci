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
  return result;  
};
const computerChoice = getComputerChoice();
console.log(computerChoice);

//2. function return human choice
const getHumanChoice = function(){
  return prompt("write: rock or paper or scissors");
};
const humanChoice = getHumanChoice();
console.log(humanChoice);