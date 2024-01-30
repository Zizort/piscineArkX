//MODULES and asynchronouns (callbacks/ promises) and error handeling
/*const fs = require('node:fs/promises');

function readFileAsync(filePath)
{
    fs.readFile(filePath, "utf-8")
    .then(function(result) 
        {
            console.log(result);
        })
    .catch(function(error)
    {
        console.log("not found");
        else
        {
            console.log(error);
        //}
    })    
}
*/

module.exports = { readFileAsync, writeFileAsync, processFiles}
// read a file
const fs = require("fs");
const fspromise = require("fs").promises;
function readFileAsync(path)
{
    return new Promise(function(resolve, reject)
    {
        fs.readFile(path, "utf8", function(err, value)
        {
            if (err)
            {
                reject("error");
            }
            else
            {
                resolve(value);
            }
        })     
    })
}
console.log("hello");

readFileAsync("./day6/test.txt")
.then(function(value){console.log(value);})
.catch(function(error)
{
    console.log(error);
});

console.log("3");

//write file
//let data = "hooooooooooooo";
function writeFileAsync(path, data)
{
    return new Promise(function(resolve, reject)
    {
        fs.writeFile(path, data, function(err)
        {
            if (err)
            {
                reject("error");
            }
            else
            {
                resolve("File written successfully");
            }
        })     
    })
}
writeFileAsync("./day6/test.txt", "hooooooooooo")
.then(function(value){
    console.log(value);
})
.catch(function(err){
    console.log(err);
});

//processFiles
/*
function processFiles(path1, path2, path3)
{
    const arr = [path1, path2, path3];
    return new Promise(function(resolve, reject)
    {
        for (let i = 0; i < 3; i++)
        {
            fs.readFile(arr[i], "utf8", function(err, value)
            {
                if (err)
                {
                    reject("error");
                }
                else
                {
                    resolve(value);
                }
            })
            fs.appendFile(arr[i], "\n hello", function(err){
                if (err){
                    reject(err);
                }
                else
                {
                    resolve("appended");
                }
            })
        }     
    })
}
*/

function processFiles(path1, path2, path3)
{
    const arr = [path1, path2, path3];
    for (let i = 0; i < 3; i++) {
        const fileOps = async function () {
            try {
                await fspromise.writeFile(arr[i], "\n hello");
                await fspromise.appendFile(arr[i], "\n and you");
                const data = await fspromise.readFile(arr[i], 'utf8');
                console.log(data);
                await fspromise.appendFile(arr[i]+ i, "\n and you");

            } catch (err) {
                console.error(err);
            }
        }
        fileOps();
    }    
} 
processFiles("./day6/test.txt","./day6/test1.txt","./day6/test2.txt");
/*.then(function(value){
    console.log(value);
})
.catch(function(err){
    console.log(err);
});*/

