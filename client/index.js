const searchButton = document.getElementById('search')
const luckyButton = document.getElementById('lucky')
const searchBar = document.getElementById('input')

searchButton.addEventListener('click', handleSearch)
luckyButton.addEventListener('click', handleLucky)

async function handleSearch(e){
    e.preventDefault();
    console.log('hello')
    console.log(searchBar.textContent)
    // const gameData = await fetch(`http://localhost:3000/games`)
    // const gameDataJson = await gameData.json();
    // console.log(gameDataJson)
    return
}

async function handleLucky(e) {
    e.preventDefault();
    
}
