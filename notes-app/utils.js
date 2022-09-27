console.log('utils.js')

const name = 'Vibha'

const age = '31'

const add = function(a, b){
    return a + b
}
const getNotes = function(){
    return "Your notes..."
}

//using module.exports you can use this file's variable and function in another file but you have to import this file to in it.
// with out module.exports you can use this file's variable and function in another file.
module.exports ={name,age,add,getNotes} 