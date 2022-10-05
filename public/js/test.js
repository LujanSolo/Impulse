// ************************ Reference variables ************************//
const container = $("#container");
const characterTurnCardEl = $(".character-turn-card");

const startGameCardEl = $(".start-game-card");
const lifeEventsCardEl = $(".life-events-card");
const acquiredGoodCardEl = $(".acquired-good-card");
const pickedLifeEventCardEl = $(".picked-life-events-card");
const pickedGoodsCardEl = $(".picked-acquired-good-card");
const gameOverCardEl = $(".game-over-card");

const rollbtnEl = $("#roll-btn");
const rollResultEl = $("#die-result");

const lifeEventsCardbtn = $(".life-event-btn");
const acquiredGoodCardbtn = $(".acquired-good-btn");
const pickedLifeEventCardbtn = $(".picked-life-btn");
const pickedGoodsCardbtn = $(".picked-good-btn");
const playAgainbtn = $(".play-again-btn");
const workaholicStartbtn = $(".workaholic-start-game-btn"); //start btn
const freeSpiritStartbtn = $(".free-spirit-start-game-btn"); //start btn
const workLifeStartbtn = $(".work-life-start-game-btn"); //start btn

// this creates an array of all the tile divs
const tileArray = $(".col-1");

// this sorts the tile divs by id
tileArray.sort((a, b) => parseInt(a.id) - parseInt(b.id));

// ************************ Global variables ************************//
let currentPosition = 0;
let userIcon = "";
let userMoney = 0;
let userDopaLevel = 0;
let userCharacterName = "MyName";
let userOwnItems = [];
let userEventItems = [];

let lifeEventsBucket = [];
let goodsBucket = [];

// ************************ Functions ************************//
// colors on mouse hove on the tile and color off on mouse off tiles
document.getElementById("1").addEventListener("mouseover", function () {
  document.getElementById("1").style.backgroundColor ="red";
});

document.getElementById("1").addEventListener("mouseout", function () {
  document.getElementById("1").style.backgroundColor ="white";
});

document.getElementById("2").addEventListener("mouseover", function () {
  document.getElementById("2").style.backgroundColor ="orange";
});

document.getElementById("2").addEventListener("mouseout", function () {
  document.getElementById("2").style.backgroundColor ="white";
});

document.getElementById("3").addEventListener("mouseover", function () {
  document.getElementById("3").style.backgroundColor ="yellow";
});

document.getElementById("3").addEventListener("mouseout", function () {
  document.getElementById("3").style.backgroundColor ="white";
});

document.getElementById("4").addEventListener("mouseover", function () {
  document.getElementById("4").style.backgroundColor ="green";
});

document.getElementById("4").addEventListener("mouseout", function () {
  document.getElementById("4").style.backgroundColor ="white";
});

document.getElementById("5").addEventListener("mouseover", function () {
  document.getElementById("5").style.backgroundColor ="blue";
});

document.getElementById("5").addEventListener("mouseout", function () {
  document.getElementById("5").style.backgroundColor ="white";
});

document.getElementById("6").addEventListener("mouseover", function () {
  document.getElementById("6").style.backgroundColor ="purple";
});

document.getElementById("6").addEventListener("mouseout", function () {
  document.getElementById("6").style.backgroundColor ="white";
});

document.getElementById("7").addEventListener("mouseover", function () {
  document.getElementById("7").style.backgroundColor ="pink";
});

document.getElementById("7").addEventListener("mouseout", function () {
  document.getElementById("7").style.backgroundColor ="white";
});

document.getElementById("8").addEventListener("mouseover", function () {
  document.getElementById("8").style.backgroundColor ="cyan";
});

document.getElementById("8").addEventListener("mouseout", function () {
  document.getElementById("8").style.backgroundColor ="white";
});

document.getElementById("9").addEventListener("mouseover", function () {
  document.getElementById("9").style.backgroundColor ="grey";
});

document.getElementById("9").addEventListener("mouseout", function () {
  document.getElementById("9").style.backgroundColor ="white";
});

document.getElementById("10").addEventListener("mouseover", function () {
  document.getElementById("10").style.backgroundColor ="brown";
});

document.getElementById("10").addEventListener("mouseout", function () {
  document.getElementById("10").style.backgroundColor ="white";
});

document.getElementById("11").addEventListener("mouseover", function () {
  document.getElementById("11").style.backgroundColor ="#98FB98";
});

document.getElementById("11").addEventListener("mouseout", function () {
  document.getElementById("11").style.backgroundColor ="white";
});

document.getElementById("12").addEventListener("mouseover", function () {
  document.getElementById("12").style.backgroundColor ="#FFD700";
});

document.getElementById("12").addEventListener("mouseout", function () {
  document.getElementById("12").style.backgroundColor ="white";
});

document.getElementById("13").addEventListener("mouseover", function () {
  document.getElementById("13").style.backgroundColor ="#7b337d";
});

document.getElementById("13").addEventListener("mouseout", function () {
  document.getElementById("13").style.backgroundColor ="white";
});

document.getElementById("14").addEventListener("mouseover", function () {
  document.getElementById("14").style.backgroundColor ="#c874b2";
});

document.getElementById("14").addEventListener("mouseout", function () {
  document.getElementById("14").style.backgroundColor ="white";
});

document.getElementById("15").addEventListener("mouseover", function () {
  document.getElementById("15").style.backgroundColor ="#003B59";
});

document.getElementById("15").addEventListener("mouseout", function () {
  document.getElementById("15").style.backgroundColor ="white";
});

document.getElementById("16").addEventListener("mouseover", function () {
  document.getElementById("16").style.backgroundColor ="#FF5349";
});

document.getElementById("16").addEventListener("mouseout", function () {
  document.getElementById("16").style.backgroundColor ="white";
});

document.getElementById("17").addEventListener("mouseover", function () {
  document.getElementById("17").style.backgroundColor ="#39beff";
});

document.getElementById("17").addEventListener("mouseout", function () {
  document.getElementById("17").style.backgroundColor ="white";
});

document.getElementById("18").addEventListener("mouseover", function () {
  document.getElementById("18").style.backgroundColor ="#454545";
});

document.getElementById("18").addEventListener("mouseout", function () {
  document.getElementById("18").style.backgroundColor ="white";
});

document.getElementById("19").addEventListener("mouseover", function () {
  document.getElementById("19").style.backgroundColor ="#ff6600";
});

document.getElementById("19").addEventListener("mouseout", function () {
  document.getElementById("19").style.backgroundColor ="white";
});

document.getElementById("20").addEventListener("mouseover", function () {
  document.getElementById("20").style.backgroundColor ="#cc1d1d";
});

document.getElementById("20").addEventListener("mouseout", function () {
  document.getElementById("20").style.backgroundColor ="white";
});
// function to start game
function startGame(event) {
  // call function to get goods array and life events array
  getLifeEventsArray();
  getGoodsArray();

  // get response from user, add the character selected traits to local storage and to variable
  switch (event.currentTarget.id) {
    case "workaholic":
      userIcon = "fa-horse";
      userMoney = 5000;
      userDopaLevel = 30;
      break;
    case "free-spirit":
      userIcon = "fa-otter";
      userMoney = 1000;
      userDopaLevel = 80;
      break;
    case "work-life":
      userIcon = "fa-dragon";
      userMoney = 2500;
      userDopaLevel = 50;
      break;
  }

  // hide startGame menu
  startGameCardEl.hide();

  // edit character card
  updateCharacterTurnCard();

  // show character turn el
  characterTurnCardEl.show();

  // set dragon to starting position (this will get moved to the start game function later)
  $(tileArray[0]).addClass(`fa-solid ${userIcon}`);
}

function startTurn() {
  // variable with rollDie number
  const dieRole = rollDie();
  // update rollResultEl text
  rollResultEl.text(dieRole);

  // get player position -- loop through divs and see if class exists
  for (let i = 0; i < tileArray.length; i++) {
    if (
      tileArray[i].classList[tileArray[i].classList.length - 1] === userIcon
    ) {
      const startPosition = tileArray[i].id;
      // console.log(currentPosition)

      // remove class in that div
      $(tileArray[startPosition - 1]).removeClass(`fa-solid ${userIcon}`);
      // transitions opacity -- 0 - 100% in a second or so

      // get new position on board
      currentPosition = parseInt(startPosition) + parseInt(dieRole);
      console.log(currentPosition);
      if (currentPosition >= tileArray.length) {
        currentPosition = tileArray.length;
      }
    }
  }

  // update position
  $(tileArray[currentPosition - 1]).addClass(`fa-solid ${userIcon}`);
  // todo transitions opacity -- 0 - 100% in a second or so

  // call show card functions
  characterTurnCardEl.hide();
  showAcquirableGoodsCard();
  showLifeEvents();
}

// function to show acquirable goods card
function showAcquirableGoodsCard() {
  // set this card to display block
  acquiredGoodCardEl.show();

  // edits the info on this card
  $("#product-name").text(`${goodsBucket[currentPosition].product_name}`);
  $("#product-money-stats").text(
    `Costs: ${goodsBucket[currentPosition].money_change}`
  );
  $("#product-mood-stats").text(
    `Mood Change: ${goodsBucket[currentPosition].dopa_change}`
  );
}

// function to show life events card
function showLifeEvents() {
  //set this card to display block
  lifeEventsCardEl.show();
}

// function to show acquirable goods card
function showPickedAcquirableGoodsCard() {
  // set lifeevents and goods cards to display none
  acquiredGoodCardEl.hide();
  lifeEventsCardEl.hide();

  // set this card to display block
  pickedGoodsCardEl.show();

  // update user scores
  userMoney += goodsBucket[currentPosition].money_change;
  userDopaLevel += goodsBucket[currentPosition].dopa_change;
  userOwnItems.push(goodsBucket[currentPosition].product_name);

  // edit the info on this card
  // $("#goods-description").text(`${goodsBucket[currentPosition].description}`);
  $("#picked-good-name").text(
    `You are a proud owner of a ${goodsBucket[currentPosition].product_name}`
  );
  $("#new-picked-goods-money").text(`You now have: $${userMoney}`);
  $("#new-picked-goods-dopa").text(`Your new mood level is: ${userDopaLevel}`);
}

// function to show life events card
function showPickedLifeEvents() {
  // set lifeevents and goods cards to display none
  acquiredGoodCardEl.hide();
  lifeEventsCardEl.hide();

  //set this card to display block
  pickedLifeEventCardEl.show();

  // update user scores
  userMoney += lifeEventsBucket[currentPosition].money_change;
  userDopaLevel += lifeEventsBucket[currentPosition].dopa_change;
  userEventItems.push(lifeEventsBucket[currentPosition].event_name);

  // edit the info on this card
  $("#life-event-name").text(`${lifeEventsBucket[currentPosition].event_name}`);
  $("#new-picked-life-money").text(`You now have: $${userMoney}`);
  $("#new-picked-life-dopa").text(`Your new mood level is: ${userDopaLevel}`);
}

// update character turn card
function updateCharacterTurnCard() {
  $("#character-name").text(userCharacterName);
  $("#character-money").text(`You have: $${userMoney}`);
  $("#character-dopa").text(`Your mood level is: ${userDopaLevel}`);
}

//  function to check if game is over
function checkGameOver() {
  // if current position is >= last game tile then game over
  if (currentPosition >= tileArray.length) {
    pickedGoodsCardEl.hide();
    pickedLifeEventCardEl.hide();

    endGame();
  } else {
    // edit character card
    updateCharacterTurnCard();

    characterTurnCardEl.show();
  }
}

// function to end game
function endGame() {
  // join arrays in a way to print
  const goodsSummary = userOwnItems.join(" , ");
  const lifeSummary = userEventItems.join(" , ");

  // print game over and stats
  $("#final-good-amount").text(`Your final money count is : $${userMoney}`);
  $("#final-good-dopa").text(`Your final mood level is : ${userDopaLevel}`);
  $("#final-goods-summary").text(
    `Shopping list complete!  
    You are a proud owner of : 
    ${goodsSummary}`
  );
  $("#final-life-summary").text(
    `Your life has been a roller coaster!  
    Here's some of what's happened :
    ${lifeSummary}`
  );

  gameOverCardEl.show();
  
  // todo set values from local storage to user Database
}

// todo function for play again
function playAgain() {
  // todo clear local storage

  // clear buckets and values
  currentPosition = 0;
  userMoney = 0;
  userDopaLevel = 0;
  lifeEventsBucket = [];
  goodsBucket = [];

  // hide gameOver card and remove class on last tile
  gameOverCardEl.hide();
  $(tileArray[tileArray.length - 1]).removeClass(`fa-solid ${userIcon}`);
  // refresh play game page
  startGameCardEl.show();
}

// functions to get random life events and gooods and put them in an array at beginning of game
const getLifeEventsArray = async () => {
  const response = await fetch("/api/lifeEventRoutes", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    const data = await response.json();
    // shuffle the data array
    data.sort(function (a, b) {
      return 0.5 - Math.random();
    });
    // push into lifeEventBucket
    for (let i = 0; i < tileArray.length; i++) {
      lifeEventsBucket.push(data[i]);
    }
  } else {
    alert(response.statusText);
  }
  console.log(lifeEventsBucket);
};

const getGoodsArray = async () => {
  const response = await fetch("/api/acquiredGoodsRoutes", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    const data = await response.json();
    // shuffle the data array
    data.sort(function (a, b) {
      return 0.5 - Math.random();
    });
    // push into goodsBucket
    for (let i = 0; i < tileArray.length; i++) {
      goodsBucket.push(data[i]);
    }
  } else {
    alert(response.statusText);
  }
  console.log(goodsBucket);
};

// todo function for local storage
function getLocalStorage() {
  // get the items
}

function setLocalStorage() {
  // set the items
}

// ************************ Helper Functions ************************//
function rollDie() {
  return 1 + Math.floor(Math.random() * 4);
}

// ************************ Initiating functions ************************//
rollbtnEl.on("click", startTurn);

lifeEventsCardbtn.on("click", showPickedLifeEvents);

acquiredGoodCardbtn.on("click", showPickedAcquirableGoodsCard);

pickedLifeEventCardbtn.on("click", function () {
  pickedLifeEventCardEl.hide();
  checkGameOver();
});

pickedGoodsCardbtn.on("click", function () {
  pickedGoodsCardEl.hide();
  checkGameOver();
});

workaholicStartbtn.on("click", startGame);
freeSpiritStartbtn.on("click", startGame);
workLifeStartbtn.on("click", startGame);

playAgainbtn.on("click", playAgain);
