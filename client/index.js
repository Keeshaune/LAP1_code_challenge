const searchButton = document.getElementById('search')
const luckyButton = document.getElementById('lucky')
const searchBar = document.getElementById('input')
const resultList = document.getElementById('results')



const main = document.querySelector('.main')
const back = document.getElementById('bkbutton')


searchButton.addEventListener('click', handleSearch)
luckyButton.addEventListener('click', test)

async function handleSearch(e){
    e.preventDefault();
    const gameData = await fetch(`http://localhost:3000/games`)
    const gameDataJson = await gameData.json();

    console.log(gameDataJson[0])
    // main.innerHTML = ""
    const backButton =  document.createElement('button');
    backButton.textContent = "back"
    back.appendChild(backButton)
    let li;
    gameDataJson.forEach(element => {
        li = document.createElement('li')
        li.textContent = element.name;
        resultList.appendChild(li)
    });

     
}

async function handleLucky(e) {
    e.preventDefault();
    const randomData = await fetch(`http://localhost:3000/games/lucky`)
    const randomDataJson = await randomData.json();
    main.innerHTML = "";
    
}

function test () {
    console.log('hello')
}
