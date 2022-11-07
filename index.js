import {Dog} from '/Dogs.js'
import dogs from '/data.js'

// Select a random dog to show first
// Need to convert into a function that can be reused
let dogsArray = dogs
let nextDogIndex = Math.floor(Math.random()*dogsArray.length)
let newDog = new Dog(dogsArray[nextDogIndex])




function setImage(data){
    document.querySelector('#profile').style.backgroundImage = `url('${data.avatar}')`
}

/* Display the random dog profile and image into the app*/
document.querySelector('#profile').innerHTML = newDog.innerHtml()
setImage(newDog)


/* Change to the next dog */
const dogChange = () => { 
dogsArray.splice(nextDogIndex, 1)
console.log(dogsArray)
nextDogIndex = Math.floor(Math.random()*dogsArray.length)
newDog = new Dog(dogsArray[nextDogIndex])
console.log(newDog)
document.querySelector('#profile').innerHTML = newDog.innerHtml()
setImage(newDog)
}


const dogAccept = (newDog) => {
    
}

// Run dogChange function when clicking any button
document.getElementById('accept-btn').addEventListener('click', dogChange)
document.getElementById('reject-btn').addEventListener('click', dogChange)







