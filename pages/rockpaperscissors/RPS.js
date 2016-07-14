var game = true;
var userScore = 0;
var cpuScore = 0;

while (game)
{
  var userToss = prompt("Please enter a \"Rock\" for rock, \"Paper\" for paper, and \"Scissors\" for Scissors");

  var cpuNumber = Math.floor((Math.random() * 3) + 1);
  var cpuToss = "";

  if (cpuNumber === 1)
  {cpuToss = "Rock";}
  else
  if (cpuNumber === 2)
  {cpuToss = "Scissors";}
  else
  if (cpuNumber === 3)
  {cpuToss = "Paper";}

  if (cpuToss === userToss)
  {alert("You both picked " + userToss);}
  else
  if(cpuToss === "Rock" && userToss === "Scissors" ||
  cpuToss === "Scissors" && userToss === "Paper"||
  cpuToss === "Paper" && userToss === "Rock")
  {alert("The computer selected " + cpuToss + " and receives a point.");
  cpuScore+=1;}
  else
  if(userToss === "Rock" && cpuToss === "Scissors" || userToss === "Scissors" && cpuToss === "Paper"||userToss === "Paper" && cpuToss === "Rock")
  {alert("The computer selected " + cpuToss + " and you receive a point.");
  userScore+=1;
}

alert("Your score is " + userScore + ". The cpu's score is " + cpuScore);
game = confirm("Do you want to play again?");
}
