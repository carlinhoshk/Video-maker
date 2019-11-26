const readline = require('readline-sync')
const robots = {
    text: require('./robots/text.js')
}
async function start(){
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    await robots.text(content)

    function askAndReturnSearchTerm(){
        return readline.question('Type a wikipedia search term: ')
    }
    function askAndReturnPrefix(){
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixeIndex = readline.keyInSelect(prefixes, 'Chose one option: ')
        const selectedPrefixeText = prefixes[selectedPrefixeIndex]

        return selectedPrefixeText
    }

    console.log(content)
}

start()


