const searchButton = document.getElementById('search')
const luckyButton = document.getElementById('lucky')
const searchBar = document.getElementById('input')
const resultList = document.getElementById('results')

searchButton.addEventListener('click', handleSearch)
luckyButton.addEventListener('click', test)

async function handleSearch(e){
    e.preventDefault();
    const gameData = await fetch(`http://localhost:3000/games`)
    const gameDataJson = await gameData.json();
    console.log(gameDataJson)
    let li;
    gameDataJson.forEach(element => {
        li = document.createElement('li')
        li.textContent = element.name;
        resultList.appendChild(li)
    });
     
}

async function handleLucky(e) {
    e.preventDefault();
    
}

function test () {
    console.log('hello')
}
