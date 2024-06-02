let savedLeads = []
const inputElement = document.getElementById("input-el")
const saveInputButton = document.getElementById("input-btn")
const unorderedListElement = document.getElementById("ul-el")
const deleteAllButton = document.getElementById("delete-btn")
const leadsFromStorage = JSON.parse(localStorage.getItem("savedLeads"))
const saveTabButton = document.getElementById("tab-btn")

if (leadsFromStorage) {
    savedLeads = leadsFromStorage
    renderLeads(savedLeads)
}

saveTabButton.addEventListener("click", function() {    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        savedLeads.push(tabs[0].url)
        localStorage.setItem("savedLeads", JSON.stringify(savedLeads))
        renderLeads(savedLeads)
    })
})

function renderLeads(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    unorderedListElement.innerHTML = listItems
}

deleteAllButton.addEventListener("dblclick", function() {
    localStorage.clear()
    savedLeads = []
    renderLeads(savedLeads)
})

saveInputButton.addEventListener("click", function() {
    savedLeads.push(inputElement.value)
    inputElement.value = ""
    localStorage.setItem("savedLeads", JSON.stringify(savedLeads))
    renderLeads(savedLeads)
})