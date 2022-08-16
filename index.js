const randomStuff = {
    randomPeople: ["the Pope", "Joe Biden's great-great-great-grandmother","Bruce Forsyth","the Holy Roman Emperor","a pulsating green blob from Kwx\'trrrmooool","Zaphod Beebelbrox","an inanimate statue", "the period\'s greatest ostrich-tickler", "the entire nation of Macedonia", "a Russian eunuch", "the Emperor of Prussia", "the first person ever to say \"Wazaaaap\""],
    randomActivity: ["once went to", "once stayed in", "once travelled through", "once performed in"],
    randomLocations: ["London", "Paris", "Bolivia", "Pyongyang", "Guadalajara", "Timbuktu", "Ouagadougou", "Pasadena", "Newcastle-upon-Tyne", "Darkest Peru", "Magadan", "Djibouti"],
    randomVerb: ["bonked", "ate cheese off", "invented Carcassonne with", "very ineffectually punched", "pretended to be", "ran away from a murderous horde with", "played Dungeons and Dragons with", "roundly insulted", "defenstrated"],
    randomOtherPeople: ["Brahms", "Mozart", "Beethoven", "Mendelssohn", "J.S. Bach", "Vivaldi", "Wagner", "Richard Strauss", "Stravinsky", "Schoenberg", "Rachmaninoff", "Shostakovich"]
}

const generateRandomIndex = arr => Math.floor(Math.random() * arr.length)

function pickRandomArray(randomObject) {
    let arrayOfClaims = []
    let claim
    let claimCount = 0
    let randomIndex
    while (claimCount < 5) {
        claim = "Did you know:"
        for (let randomArray in randomObject) {
            let randomIndex = generateRandomIndex(randomObject[randomArray])
            let word = randomObject[randomArray][randomIndex]
            if (randomArray === 'randomPeople') {
                claim += ` ${word}`
            } else if (randomArray === 'randomActivity') {
                claim += ` ${word}`
            } else if (randomArray === 'randomLocations') {
                claim += ` ${word} and`
            } else if (randomArray === 'randomVerb') {
                claim += ` ${word}`
            } else if (randomArray === 'randomOtherPeople') {
                claim += ` ${word}?`
            } 
        }
        arrayOfClaims.push(claim, '\n')
        claimCount++
    }
    return arrayOfClaims
}


const makeClaims = claimsArray => `Today's most random claims are: \n\n${claimsArray.join('\n')}`

console.log(makeClaims(pickRandomArray(randomStuff)))