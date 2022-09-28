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
    // main.innerHTML = ""
    // const backButton =  document.createElement('button');
    // backButton.textContent = "back"
    // back.appendChild(backButton)
    // let li;
    // gameDataJson.forEach(element => {
    //     li = document.createElement('li')
    //     li.textContent = element.name;
    //     resultList.appendChild(li)
    // });
    let div;
    gameDataJson.forEach(element => {
        div = document.createElement('div')
        div.innerHTML = `
            <ul>
                <li>${element.name}</li>
                <li>${element.genre}</li>
                <li>${element.description}</li>
            </ul>
        `
        resultList.appendChild(div)
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
