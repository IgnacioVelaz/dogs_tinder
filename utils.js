// Get a random number from 0 to a limit passed as a parameter
const randomNum = (length) => {
    return Math.floor(Math.random()*length)
}

export {randomNum}