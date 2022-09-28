const searchButton = document.getElementById('search')
const luckyButton = document.getElementById('lucky')
const searchBar = document.getElementById('input')
const resultList = document.getElementById('results')

const main = document.querySelector('.main')

searchButton.addEventListener('click', handleSearch)
luckyButton.addEventListener('click', handleLucky)

async function handleSearch(e){
    e.preventDefault();
    clearList()
    if (searchBar.value == "") {
        handleNoName()
    } else {
        handleName(searchBar.value)
    }
}

async function handleLucky(e) {
    e.preventDefault();
    clearList()
    const randomData = await fetch(`http://localhost:3000/games/lucky`)
    randomDataJson = await randomData.json();
    createCard(randomDataJson)
}

async function handleNoName() {
    const gameData = await fetch(`http://localhost:3000/games`)
    const gameDataJson = await gameData.json();
    gameDataJson.forEach(element => {
        createCard(element)
    });
}

async function handleName(input) {
    const gameData = await fetch(`http://localhost:3000/games/${input}`)
    const gameDataJson = await gameData.json();
    gameDataJson.forEach(element => {
        createCard(element)
    });
}

function test () {
    console.log('hello')
}

function clearList() {
    resultList.innerHTML = ""
}

function createCard(input) {
    resultList.innerHTML += `
        <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>name:</strong> ${input.name}</li>
                <li class="list-group-item"><strong>genre:</strong> ${input.genre}</li>
                <li class="list-group-item"><strong>description:</strong> ${input.description}</li>
            </ul>
        </div>
        <br>
        `
}
