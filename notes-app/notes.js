const chalk = require('chalk')
const fs = require('fs')


//Add notes
const addNotes = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title
    // })
    //const duplicateNotes = notes.filter((note) => note.title === title)

    //Find stop searching if first match is found while filter don't stop but find in 
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added..'))
    }else {
        console.log(chalk.red.inverse('Note title taken'))
    }
   
}
//Remove notes
const removeNote = (title) => {
    const notes = loadNotes()
    // const noteToKeep= notes.filter(function(note){
    //     return note.title !== title
    // })
    const noteToKeep= notes.filter((note) => note.title !== title)

    if(notes.length > noteToKeep.length){
        console.log(chalk.bgGreen('Note Remove!'))
        saveNotes(noteToKeep)
    }else{
        console.log(chalk.bgRed('No note found!'))
    }
    
    //console.log(noteToKeep)
}
//List notes
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('your notes'))
    notes.forEach((note) => {
        console.log(note.title)
    });
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
//Read notes

const readNote = (title) => {
    const notes = loadNotes()

    const readNotes = notes.find((note) => note.title === title)
    if(readNotes){
        console.log(chalk.inverse('Your note'))
        console.log(readNotes.title)
        console.log(readNotes.body)
    }else{
        console.log(chalk.red.inverse('Note not found'))
    }
    
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch{
        return []
    }
    
}

module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}