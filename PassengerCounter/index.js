let savedEntriesEl = document.getElementById("saved-entries");
let counterDisplayEl = document.getElementById("counter-display");
let passengerCount = 0;

function incrementCounter() {
    passengerCount += 1;
    counterDisplayEl.textContent = passengerCount;
}

function saveCounter() {
    let passengerCountStr = passengerCount + " - ";
    savedEntriesEl.textContent += passengerCountStr;
}