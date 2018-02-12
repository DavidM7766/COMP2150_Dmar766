var fs = require('fs')

var myNum = undefined

function addOne(callback)
{
    fs.readFile('number.txt', function doneReading(err, fileContents)
{
    myNum = parseInt(fileContents)
    myNum++
    callback()
})
    
}

function logMyNumber()
{
    console.log(myNum)
}
addOne(logMyNumber)

