const searchButton = document.getElementById('search')
const luckyButton = document.getElementById('lucky')


searchButton.addEventListener('click', handleSubmit)

async function handleSubmit(e){
    e.preventDefault();
    const gameData = await fetch(`http://localhost:3000/games`)
    const gameDataJson = await gameData.json();
    console.log(gameDataJson)



}
