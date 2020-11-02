// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


var fightOrSkip = function(enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd liked to fight or skip using fightOr Skip function
    if (fightOrSkip()){
      break;
    }
    // fight logic
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    promptFight = promptFight.toLocaleLowerCase();
   // Conditional Recursive Function Call
  if (promptFight === "" || promptFight === null) {
  window.alert("You need to provide a valid answer! Please try again.");
  return false;
}
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerInfo.money for skipping
        playerInfo.playerMoney = playerInfo.money - 10;
        //return true if player wants to leave 
        return true;
      }
      shop();
    }
    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemyInfo.health = Math.max(0, enemyInfo.health - damage);
    console.log(playerInfo.name + ' attacked ' + enemyInfo.name + '. ' + enemyInfo.name + ' now has ' + enemyInfo.health + ' health remaining.');

    // check enemy's health
    if (enemyInfo.health <= 0) {
      window.alert(enemyInfo.name + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;
        console.log("playerInfo.money", playerInfo.money)

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyInfo.name + ' still has ' + enemyInfo.health + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemy.attack variable
    var damage = randomNumber(enemyInfo.attack - 3, enemyInfo.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(enemyInfo.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.');

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name+ ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};


//funtion to start a new game
var startGame = function() {
// reset player stats
playerInfo.reset();

for(var i = 0; i < enemyInfo.length; i++) {
  if (playerInfo.health > 0) {
   // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
   window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

   // pick new enemy to fight based on the index of the enemy.names array
   var pickedEnemyObj = enemyInfo[i];

   // reset enemy.health before starting new fight-- result will return a whole number between 20 and 60
   pickedEnemyObj.health = randomNumber(40, 60);

   // pass the pickedEnemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
   fightOrSkip(pickedEnemyObj);
   
   //if we're not at the last enemy in the array:
   if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
     
    //ask player if they want to use the store before the next round
    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

    //if yes, take them to the shop() function
    if (storeConfirm) {
        shop();
    }
   }
  }   else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
     }
}
// after loop ends, player is either out of health or enemies to fight, so run endgame function. 
endGame();
};


var endGame = function(){
//if player is still alive, player wins!
if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
}
  else {
    window.alert("You've lost your robot in battle.");
  }

  //ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");
      if (playAgainConfirm) {
        //restart the game
        startGame();
      }
      else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
      }
};

var shop = function() {
//ask player what they would like to do
var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? PLease enter one: 'refill', 'upgrade', or 'leave' to make a choice.");
 switch(shopOptionPrompt) {
    case "REFILL":
    case "refill":
      playerInfo.refillHealth();
      break;
    
    case "UPGRADE":
    case "upgrade":
      playerInfo.upgradeAttack();
      break;

    case "LEAVE":
    case "leave": 
        window.alert("Leaving the store."); 
        // do nothing, so function will end.
        break;
    default: 
        window.alert("You did not pick a valid option. Try again.");
        //call shop() again to force player to pick a valid option
        shop();
        break;
    
}
};

// function to generate a random numeric value
//function to set name 
var min = 40
var max = 60
var randomNumber = function(min, max) {
var value = Math.floor(Math.random() * (max -min + 1) + min)
return value;
};
var getPlayerName = function() {
  var name = ""
  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }
console.log("Your robot's name is" + name);
return name;
};

var playerInfo = {
name: getPlayerName(),
health: 100,
attack: 10,
money: 10,
reset: function() {
  this.health = 100;
  this.money = 10;
  this.attack = 10;
}, // comma!
refillHealth: function() {
  if (this.money >= 7) {
    window.alert("Refilling player's health by 20 for 7 dollars.");
    this.health += 20;
    this.money -= 7;
  } 
  else {
    window.alert("You don't have enough money!");
  }
},
upgradeAttack: function() {
  if (this.money >= 7) {
    window.alert("Upgrading player's attack by 6 for 7 dollars.");
    this.attack += 6;
    this.money -= 7;
  } 
  else {
    window.alert("You don't have enough money!");
  }
}
};
//can aslso log multiple values at once: console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

var enemyInfo = [
{
  name: "Roborto",
  attack: randomNumber(10, 14)
},
{
  name: "Amy Android",
  attack: randomNumber(10, 14)
},
{
  name: "Robo Trumble",
  attack: randomNumber(10, 14)
}
];

startGame();