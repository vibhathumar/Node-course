const yargs = require('yargs')
const utils = require('./utils.js')
const notes = require('./notes')


console.log(utils.name)
console.log(utils.age)
console.log(utils.add(4,2))
console.log(utils.getNotes())

// const command = process.argv[2]

// console.log(process.argv)

// if(command === 'add'){
//     console.log('Adding notes!..')
// }else if(command === 'remove'){
//     console.log('Removeing Notes!')
// }


//Customize yargs version
yargs.version('1.1.0')

//Cerate add command
yargs.command({
    command: 'add',
    describe: 'Add a new notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type : 'string'
        },
        body: {
            describe : 'Note body',
            demandOption : true,
            type: 'string'
        }
    }, 
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

//Cerate remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//Cerate list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler(){
        notes.listNotes()
    }
})

//Cerate read command
yargs.command({
    command: 'read',
    describe: 'Read your notes',
    builder: {
        title: {
            describe : 'Read a Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)   