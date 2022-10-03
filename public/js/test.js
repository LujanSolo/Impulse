// ************************ Reference variables ************************//
const container = $("#container");
const characterTurnCardEl = $(".character-turn-card");

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

// ************************ Global variables ************************//
// this creates an array of all the tile divs
const tileArray = $(".col-4");

let currentPosition = 0;

// this sorts the tile divs by id
tileArray.sort((a, b) => parseInt(a.id) - parseInt(b.id));
console.log(tileArray);

// set dragon to starting position
$(tileArray[0]).addClass("fa-solid fa-dragon");

// ************************ Functions ************************//

// todo function to start game
function startGame() {
  // call function to get goods array and life events array
  // get response from user, add the character selected traits to local storage and to variable 

  // hide startGame menu
  // show character turn el 
  // characterTurnCardEl.show();

}

function startTurn() {
  // variable with rollDie number
  const dieRole = rollDie();
  // update rollResultEl text
  rollResultEl.text(dieRole);

  // get player position -- loop through divs and see if class exists
  for (let i = 0; i < tileArray.length; i++) {
    if (
      tileArray[i].classList[tileArray[i].classList.length - 1] === "fa-dragon"
    ) {
      const startPosition = tileArray[i].id;
      // console.log(currentPosition)

      // remove class in that div
      $(tileArray[startPosition - 1]).removeClass("fa-solid fa-dragon");
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
  $(tileArray[currentPosition - 1]).addClass("fa-solid fa-dragon");
  // transitions opacity -- 0 - 100% in a second or so

  // todo call show card functions
  showAcquirableGoodsCard();
  showLifeEvents();
  characterTurnCardEl.hide();
}

// at start turn, show both cards (each has a button to choose it)
// at button pick, show only that card (picked card in handlebar partial)
// add event stats to user stats
// button to continue

// todo function to show acquirable goods card
function showAcquirableGoodsCard() {
  // set this card to display block
  acquiredGoodCardEl.show();

  // todo edit the info on this card
}

// todo function to show life events card
function showLifeEvents() {
  //set this card to display block
  lifeEventsCardEl.show();

  // todo edit the info on this card
}

// todo function to show acquirable goods card
function showPickedAcquirableGoodsCard() {
  // set lifeevents and goods cards to display none
  acquiredGoodCardEl.hide();
  lifeEventsCardEl.hide();

  // set this card to display block
  pickedGoodsCardEl.show();

  // todo edit the info on this card
}

// todo function to show life events card
function showPickedLifeEvents() {
  // set lifeevents and goods cards to display none
  acquiredGoodCardEl.hide();
  lifeEventsCardEl.hide();

  //set this card to display block
  pickedLifeEventCardEl.show();

  // todo edit the info on this card
}

// todo function to check if game is over
function checkGameOver() {
  // if current position is >= last game tile then game over
  if (currentPosition >= tileArray.length) {
    pickedGoodsCardEl.hide();
    pickedLifeEventCardEl.hide();

    endGame();
  } else {
    characterTurnCardEl.show();
  }
}

// todo function to end game
function endGame() {
  // check win or lose
  // print game over and stats
  gameOverCardEl.show();
  // set values from local storage to user Database 
}

// todo function for play again
function playAgain() {
  // clear local storage
  // refresh play game page 
}

// todo function to get random life events and gooods and put them in an array at beginning of game
// const getLifeandGoodsArrays = async () => {
//   const response = await fetch("/", {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   });

//   if (response.ok) {
//     console.log("this is okay");
//   } else {
//     alert(response.statusText);
//   }

//   console.log(response);
// };

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
playAgainbtn.on("click", playAgain);

// getLifeandGoodsArrays();
