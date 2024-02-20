//this file only functions to call inside (req, res)
//we have a json file instead of an array
//const blogs = require("../blogs.json"); on the controller or main
const fs = require("fs");
// read and wrtie to a json file
function writeFile(path, data) {
    return new Promise((resolve, reject) => { 
        fs.writeFile(path, data, (err) => {
        if (err) {
            reject(err);//console.error("")
        } else {
            resolve('File created successfully.');
        }});
    });
}

function readf(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });

}

module.exports = { 
    writeFile
}

