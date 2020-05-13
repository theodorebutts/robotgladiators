// Game states
// "Win" - Player robot has defeated all enemy robots
//  * Fight all enemy robots
//  * Defeat each enemy robot
// "Lose" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
  
    enemyHealth = enemyHealth - playerAttack;
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.";
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    playerHealth = playerHealth - enemyAttack;
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.";
    if (playerHealth <= 0) {
        window.alert(playerName + " has died");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};


for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}