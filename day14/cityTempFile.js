// file operations
const fs = require('fs');

// Creating a new file
//wrape call back function around promise or just use fs.promise where the fs functions return promises
function newwriteFile(path, data) {
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

function deleteFile(path) {
    return new Promise((resolve,reject) => {
        fs.unlink(path,(err) => {
            if (err)
            {
                reject(err);
            }
            else {
                resolve();//important so thecode knows in the if statement below
            }
        });
    });
}


function selectRandomCity(cities) {
    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex];
}

const cities = [
    { name: 'New York', lat: 40.7128, lng: -74.0060 },
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
    { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
    { name: 'Rome', lat: 41.9028, lng: 12.4964 },
    { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
    { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
    { name: 'Rabat', lat: 34.0209, lng: -6.8416 }
  ];


async function main() {
    try {
        const city = selectRandomCity(cities);
        await newwriteFile('./input.txt', city.name);//./day14/input.txt'; need to change the path based on where we execute it
        const cityName = await readf('./input.txt');
        await deleteFile('./input.txt'); //works without await
        //console.log(cityName);
        let foundCity = cities.find(object => object.name == cityName);


        //fetch the data related to the city lat and lng values
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${foundCity.lat}&longitude=${foundCity.lng}&current_weather=true`);
        const data = await response.json();
        if (fs.existsSync('./cityname.txt'))//
        await deleteFile('./cityname.txt');// or just overwrite it
        await newwriteFile('./cityname.txt', foundCity.name + ' ' + data.current_weather.temperature + data.current_weather_units.temperature);
        const x = await readf('./cityname.txt');
        console.log(x);
        //const fileExists = fs.existsSync('./day14/cityname.txt');
        //console.log(fileExists);
        // await deleteFile('./day14/cityname.txt'); //to delete file

    }
    catch (err) {
        console.log(err);
    }
}
main();