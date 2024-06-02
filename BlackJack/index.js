let user = {
    username: "Per",
    balance: 200
}

let deck = []
let total = 0
let has21 = false
let isInGame = false
let statusMessage = ""
let statusEl = document.getElementById("message-el")
let totalEl = document.getElementById("sum-el")
let deckEl = document.getElementById("cards-el")
let userEl = document.getElementById("player-el")

userEl.textContent = user.username + ": $" + user.balance

function drawRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum > 10) {
        return 10
    } else if (randomNum === 1) {
        return 11
    } else {
        return randomNum
    }
}

function initiateGame() {
    isInGame = true
    let firstCard = drawRandomCard()
    let secondCard = drawRandomCard()
    deck = [firstCard, secondCard]
    total = firstCard + secondCard
    displayGame()
}

function displayGame() {
    deckEl.textContent = "Cards: "
    for (let i = 0; i < deck.length; i++) {
        deckEl.textContent += deck[i] + " "
    }
    
    totalEl.textContent = "Sum: " + total
    if (total <= 20) {
        statusMessage = "Do you want to draw a new card?"
    } else if (total === 21) {
        statusMessage = "You've got Blackjack!"
        has21 = true
    } else {
        statusMessage = "You're out of the game!"
        isInGame = false
    }
    statusEl.textContent = statusMessage
}

function drawNewCard() {
    if (isInGame === true && has21 === false) {
        let card = drawRandomCard()
        total += card
        deck.push(card)
        displayGame()        
    }
}