var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var startGame = function() {
  playerHealth = 100; 
  playerAttack = 10;
  playerMoney = 10;
 for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
       // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
       // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;
    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
    }
    else {
       window.alert(" You have lost your robot in battle! Game Over! ");
     break;
    
    }
  }
  endGame();
}

var endGame = function() {
  window.alert(" The game has now ended. Let's see how you did! ");
  if (playerHealth > 0){
  window.alert(" Great job, you've survived the game! You now have a score of " + playerMoney + " . ");
  }
else {
   window.alert(" You've lost your robot in battle. ");
  }
  
var playAgainConfirm = window.confirm(" Would you like to play again? ");
  if (playAgainConfirm) {
    startGame();
  }
  else {
    window.alert(" Thank you for playing Robot Gladiators! Come back soon! ");
  }
};
var fight = function(enemy) {
  // keep track of who goes first
  var isPlayerTurn = true;
  // randomly change turn order
  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }
  while (playerInfo.health > 0 && enemy.health > 0) {
    if (isPlayerTurn) {
      // ask player if they'd like to fight or skip using fightOrSkip function
      if (fightOrSkip()) {
        // if true, leave fight by breaking loop
        break;
      }
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
      // remove enemy's health by subtracting the amount we set in the damage variable
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name +
          " attacked " +
          enemy.name +
          ". " +
          enemy.name +
          " now has " +
          enemy.health +
          " health remaining."
      );
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
      }
      // player gets attacked first
    } else {
      var damage = randomNumber(enemy.attack - 3, enemy.attack);
      // remove enemy's health by subtracting the amount we set in the damage variable
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name +
          " attacked " +
          playerInfo.name +
          ". " +
          playerInfo.name +
          " now has " +
          playerInfo.health +
          " health remaining."
      );
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
      }
    }
    // switch turn order for next round
    isPlayerTurn = !isPlayerTurn;
  }

   // repeat and execute as long as the enemy-robot is alive

  
// remove player's health by subtracting the amount set in the enemyAttack variable

     playerHealth = playerHealth - enemyAttack;
   console.log(
    enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining."
 );  

     if (playerHealth <= 0) {
     window.alert(playerName + " has died!");
      // break;
    
   } else {
     window.alert(playerName + " still has " + playerHealth + " health left.");
      }
    };
    startGame();
 
  



     
 

  

