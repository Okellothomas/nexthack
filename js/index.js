// The javascript beginning

// The variables. 

let first_card = getRandomCard()
let second_card = getRandomCard()

let cards = [first_card, second_card]
let my_sum = first_card + second_card 

let hasBlackJack = false
// message challange
let message = ""
// the alive code. 
let isAlive = true
// the conditional if statement.

// the function 

// the sum variable 

// let sumEl = document.getElementById("sum-el")

let messageEl = document.getElementById("message-el")

let cardEl = document.querySelector("#card-el")

// random function 

function getRandomCard() {

    let random = Math.floor(Math.random() * 13) + 1

    if (random === 1) {
        return 11
    }
    else if (random === 11 || random === 12 || random === 13) {
        return 10
    }
    else {
      return random  
    }
    
}

function startGame() {
    renderGame()
}

function renderGame() {
    let sumEl = document.querySelector(".sum-one").textContent = "Sum:" + my_sum
    cardEl.textContent = "Cards: "

for (let count = 0; count < cards.length; count++){
        cardEl.textContent += cards[count] + " "
    }
if (my_sum <= 20) {
    message = "Do you want to draw another card"
}
else if (my_sum === 21) {
    message = "Woow, you have gotten a blackjack"
       hasBlackJack = true
}
else {
    message = "You're out of the game regretfully."
       isAlive = false
}
messageEl.textContent = message
}

function newGame() {
    if (isAlive === true && hasBlackJack === false) {
    console.log("Do you want to draw another card?")
    let newCard = getRandomCard()
    cards.push(newCard)
    console.log(cards)
    my_sum = my_sum + newCard
    renderGame()
    } 
}