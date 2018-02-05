import { error } from 'util';

var fs = require('fs')

// read from a file
fs.readFile('./data.json', (err, data) =>
{
    if(err)
        return console.error(err)
    console.log(JSON.parse(data));
})

var mydata = 
{
    "name" : "jane",
    "message" : "Hi there!"
}

// write to a file
fs.writeFile('./data.json', JSON.stringify(myData), (error) =>
{
    if(error)
        return console.error(err)
    console.log('File written successfully')
})