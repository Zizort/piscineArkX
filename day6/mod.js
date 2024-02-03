({ readFileAsync, writeFileAsync, processFiles} = require('./modulesPromises.js'))

console.log("hello");
//-----------------------------------------
readFileAsync("./day6/firstfunc.txt")
.then(function(value){console.log(value);})
.catch(function(error)
{
    console.log(error);
});

console.log("3");
//--------------------------
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
//----------------------------------------
processFiles("./day6/test.txt","./day6/test1.txt","./day6/test2.txt");