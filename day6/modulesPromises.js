const fs = require('node:fs/promises');

function readFileAsync(filePath)
{
    fs.readFile(filePath, "utf-8")
    .then(function(result) 
        {
            console.log(result);
        })
    .catch(function(error)
    {
        console.log(error);
    })    
}
console.log("hello");
readFileAsync("./day6/test.txt");
console.log("3");