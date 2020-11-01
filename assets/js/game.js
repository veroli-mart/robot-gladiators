var playerInfo = {
name: window.prompt("What is your robot's name?"),
health:100,
attack:10,
money:10,
};

// You can also log multiple values at once like this
console.log(playerInfo.Name, playerInfo.attack, playerInfo.health);

var enemyInfo = [
  {
    name: "Roborto",
    attack: 12
   },
   {
   name: "Amy Android",
   attack: 13
   }, 
   {
   name: "Robo Trumble",
   attack: 14
   }
];
var startGame = function() {
  playerInfo.health = 100; 
  playerInfo.attack = 10;
  playerInfo.money = 10;
 for(var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
       // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
       // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyObj= enemyInfo[i];

    // reset enemyHealth before starting new fight
    var randomNumber = function(min, max) {
      pickedEnemyObj = randomNumer(40, 60);
    var value = Math.floor(Math.random() * (max - min + 1) + min);

      return value;
    };
    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyObj);
    if (playerInfo.health > 0 && i < enemyInfo.length - 1); }
    // ask if player wants to use the store before next round
    function shop() {  

  var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      if (storeConfirm); {
   
      // use switch to carry out action
  switch (shopOptionPrompt) {

      case "REFILL":
      case "refill":
    if (playerInfo.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
  
      // increase health and decrease money
      playerInfo.health = playerInfo.health + 20;
      playerInfo.money = playerInfo.money - 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  
    break;
  case "UPGRADE":
    case "upgrade":
    if (playerInfo.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
  
     // increase attack and decrease money
      playerInfo.attack = playerInfo.attack + 6;
      playerInfo.money = playerInfo.money - 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
    break;
    case "LEAVE":
      case "leave":
      window.alert("Leaving the store.");
  
      // do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      console.log ("shop()");
    break;
  }
    } else{
         window.alert(" You have lost your robot in battle! Game Over! ");
       break;
      
      }
    }
   
    // if yes, take them to the store() function
  shop();
  endGame();
}

var endGame = function() {
  window.alert(" The game has now ended. Let's see how you did! ");
  if (playerInfo.health > 0){
  window.alert(" Great job, you've survived the game! You now have a score of " + playerInfo.money + " . ");
  }
else {
   window.alert(" You've lost your robot in battle. ");
  }
  var shop = function() {
    var shopOptionPrompt = window.prompt( "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
  };
var playAgainConfirm = window.confirm(" Would you like to play again? ");
  if (playAgainConfirm) {
    startGame();
  }
  else {
    window.alert(" Thank you for playing Robot Gladiators! Come back soon! ");
  }
};
var fight = function(enemy) {
  console.log(enemy);
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
       //remove enemy's health by subtracting the amount we set in the damage variable
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
      var damage = randomNumber(enemy.attack - 3, enemy.attack);
      playerInfo.health = Math.max(o, playerInfo.health - damage);
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

     playerInfo.health = playerInfo.health - enemy.attack;
   console.log(
    enemy.name + " attacked " + playerInfo.name + " . " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
 );  

     if (playerInfo.health <= 0) {
     window.alert(playerInfo.name + " has died!");
      // break;
    
   } else {
     window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
      }
};
}
    startGame();
