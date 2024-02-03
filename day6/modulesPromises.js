//MODULES and asynchronouns (callbacks/ promises) and error handling

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
//console.log("2");
/*
readFileAsync("./day6/firstfunc.txt")
.then(function(value){console.log(value);})
.catch(function(error)
{
    console.log(error);
});
*/
//console.log("3");

//write file
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
/*
writeFileAsync("./day6/secondfunc.txt", "hooooooooooo")
.then(function(value){
    console.log(value);
})
.catch(function(err){
    console.log(err);
});
readFileAsync("./day6/secondfunc.txt")
.then(function(value){console.log(value);})
.catch(function(error)
{
    console.log(error);
});
*/
//processFiles

function processFiles(path1, path2, path3)
{
    const arr = [path1, path2, path3];
    for (let i = 0; i < 3; i++) {
        const fileOps = async function () {
            try {
                // console.log("file " + (i + 1) + ":");
                await fspromise.writeFile(arr[i], "hello");
                await fspromise.appendFile(arr[i], "\nhi");
                const data = await fspromise.readFile(arr[i], 'utf8');
                console.log("file " + (i + 1) + ":\n" + data);
                await fspromise.appendFile(arr[i]+ i, "\nhello number 2");
                const data2 = await fspromise.readFile(arr[i]+ i, 'utf8');
                console.log("file " + i + ":\n" + data2);
            } catch (err) {
                console.error(err);
            }
        }
        fileOps();
    }    
} 
//processFiles("./day6/test.txt","./day6/test1.txt","./day6/test2.txt");