function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }




function getMonthName(month) {
let name
switch (month) {
    case 1:
        name = "January"
        break;
    case 2: 
        name = "February"
        break;
    case 3: 
        name = "March"
        break;
    case 4: 
        name = "April"
        break;
    case 5: 
        name = "May"
        break;
    case 6:
        name = "June"
        break;
    case 7:
        name = "July"
        break;
    case 8:
        name = "August"
        break;
    case 9: 
        name = "September"
        break;
    case 10: 
        name = "October"
        break;
    case 11: 
        name = "November"
        break;
    case 12:
        name = "December"
        break;

    default:
        name = "Not a month"
        break;
}
return name
}

function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
            message = "will be your lucky day!"
            break;
        case 2:
            message = "you will land your dream job!"
            break;
        case 3: 
            message = "you will become very fortune and will receive a package in the mail!"
            break;
        case 4:
            message = "wear yellow for good fortune!"
            break;
        case 5:
            message = "pet a dog!"
            break;
        default:
            message = "An error occured"
            break;
    }
    return message
    
}



let fate = getRandomIntInclusive(1, 5)
let day = getRandomIntInclusive(1, 30)
let month = getRandomIntInclusive(1, 12)
const monthName = getMonthName(month)
// const fortune = getFortune(fate)

// const fortuneRevealed = `On ${monthName} ${day}, you will ${fate}`
const fortuneRevealed = `On ${monthName} ${day}, ` + getFortune(fate)

console.log(fortuneRevealed)

console.log(getFortune(fate))

document.querySelector('#fortune').innerText = fortuneRevealed

// fortune.appendChild(fortuneRevealed)