const kitana = {
    name: 'Kitana',
    hp: 100,
    img: '',
    weapon: ['Flying Blade'],
    attack(){ 
        console.log(`${this.name} Fight...`)
    }
}

const scorpion = {
    name: 'Scorpion',
    hp : 100,
    img: '',
    weapon: ['Kunai'],
    attack(){ 
        console.log(`${this.name} Fight...`)
    }
}

const links = {
    scorpion: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    kitana : 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    liukang : 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    sonya : 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    subzero: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif'
}

const createPlayer = (playerClass, playerName, hp) =>{
    let playerDiv = document.createElement('div')
    let progressBar = document.createElement('div').classList('progressbar')
    let life = document.createElement('div').classList('life')
    let name = document.createElement('div').classList('name')
    let character = document.createElement('div').classList('character');
    let img = document.createElement('img').src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif'
    character.appendChild(img)
    progressBar.appendChild(life).appendChild(name)
    playerDiv.appendChild(progressBar).appendChild(character)
}

createPlayer('player1', kitana, 100)