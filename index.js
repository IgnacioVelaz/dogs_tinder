import dogs from './data.js'
import Dog from './Dogs.js'
import {randomNum} from './utils.js'

let dogsLeft = JSON.parse(JSON.stringify(dogs)) 
const profile = document.querySelector('#profile')
const buttons = document.querySelectorAll('.btn')
const discover = document.querySelector('#discover-container')




const getCurrentDog = () => {
    let currentDogIndex = randomNum(dogsLeft.length)
    let currentDogData = dogsLeft.splice(currentDogIndex, 1)
    let currentDog = new Dog(currentDogData[0])
    console.log(currentDog)
    console.log(dogs[0])
    return currentDog 
}

let currentDog = getCurrentDog()

const renderCurrentDog = (currentDog) => {
    let currentDogHtml = currentDog.innerHtml()
    console.log(currentDogHtml)
    profile.innerHTML = currentDogHtml
    profile.style.backgroundImage = `url('${currentDog.avatar}')`
}

renderCurrentDog(currentDog)

const disableButtons = () => {
    for( let button of buttons){
        button.classList.add('disabled')
    }
}

const enableButtons = () => {
    for( let button of buttons){
        button.classList.remove('disabled')
    }
}

const nextDog = () => {
    disableButtons()
    currentDog.hasBeenSwiped = true
    profile.innerHTML = 
        currentDog.hasBeenLiked? `<img src="images/badge-like.png" alt="liked" class="badge">`:
        currentDog.hasBeenSwiped? `<img src="images/badge-nope.png" alt="nope" class="badge">`:
        ' '
    
    setTimeout(()=>{
        if(dogsLeft.length > 0){
        let currentDog = getCurrentDog()
        renderCurrentDog(currentDog)
        enableButtons()
    } else
        {
         
          profile.innerHTML = 
          `
          <div class="end">
          <p class="end-paragraph">There are no more doggies around you</p>
          <button class="restart"> Start again </button>
          </div>`
          
          profile.classList.add('end')
          document.querySelector('.restart').addEventListener('click', restart)
        }
    }, 1000)
}

const rejectDog = () => {
    currentDog.hasBeenLiked = false
    nextDog()
}

const acceptDog = () => {
    currentDog.hasBeenLiked = true
    nextDog()
}

const restart = () => {
    dogsLeft = JSON.parse(JSON.stringify(dogs)) 
    let currentDog = getCurrentDog()
    renderCurrentDog(currentDog) 
    enableButtons()
    profile.classList.remove('end')
}



document.querySelector('#reject-btn').addEventListener('click', rejectDog)
document.querySelector('#accept-btn').addEventListener('click', acceptDog)








