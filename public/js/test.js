// ****************** Reference variables ******************//
const container = $("#container");
// const titleEl = $("#title");
const rollbtnEl = $("#roll-btn");
const rollResultEl = $("#die-result");
// const winningCardEl = $(".winning-card");
// const resetbtnEl = $(".restart-btn");
// const clearScorebtnEl = $(".clear-btn");
// const cardHeaderEl = $(".card-heading"); 
// const cardScoreEl = $("#p-custom"); 

// this creates an array of all the tile divs 
const tileArray = $(".col-4");

let currentPosition = 0;

// this sorts the tile divs by id 
tileArray.sort((a, b) => parseInt(a.id) - parseInt(b.id) )
console.log(tileArray)

// set dragon to starting position 
$(tileArray[0]).addClass("fa-solid fa-dragon");

function rollDie() {
    return 1 + Math.floor(Math.random() * 4) 
}

function startTurn() {
    // variable with rollDie number 
    const dieRole = rollDie();
    // update rollResultEl text
    rollResultEl.text(dieRole)

    // get player position -- loop through divs and see if class exists 
    for (let i = 0; i < tileArray.length; i++) {
        if (tileArray[i].classList[tileArray[i].classList.length-1] === "fa-dragon"){
            const startPosition = tileArray[i].id
            // console.log(currentPosition)

            // remove class in that div 
            $(tileArray[startPosition-1]).removeClass("fa-solid fa-dragon");
                // transitions opacity -- 0 - 100% in a second or so 


            // get new position on board 
            currentPosition = parseInt(startPosition) + parseInt(dieRole);
            console.log(currentPosition)
        }
    }

    // update position 
    $(tileArray[currentPosition-1]).addClass("fa-solid fa-dragon");
    // transitions opacity -- 0 - 100% in a second or so 
}

rollbtnEl.on("click", startTurn)