const { rejects } = require('assert');
const http = require('http');
const { resolve } = require('path');
const url = require('url');
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
//let citytemp;
const server = http.createServer((req, res) => {
    // Request handling logic goes here
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;
    // Inside the request handler
    // deponds on the URL
    if (path === '/weather') {
    // Handle the '/users' endpoint
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });// the type of content to write;
        //; charset=utf-8' to fix the 'A' in the output
        let city = query.city; // this works
        //console.log(city);
        main(city, res);
        // async function main(name, req) {
        //     try {
        //         let foundCity = cities.find(object => object.name == name);
        //         //fetch the data related to the city lat and lng values
        //         const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${foundCity.lat}&longitude=${foundCity.lng}&current_weather=true`);
        //         const data = await response.json();
        //         console.log(data.current_weather_units.temperature);
        //         console.log(typeof (foundCity.name + ' ' + (data.current_weather.temperature) + data.current_weather_units.temperature));
        //         let x = (foundCity.name + ' ' + (data.current_weather.temperature) + ' ' + data.current_weather_units.temperature);
        //         res.write(x);
        //         res.end()
        //     }
        //     catch (err) {
        //         res.write(err);
        //         res.end();
                
        //     }
        // }

        // main(city).then((value) => {
        //     console.log(value);
        //     res.write(value); // value is undefined
        // })
        // .catch((err) => {
        //     res.write("error" + err);
        // })
        //res.write(citytemp); 
     } else {
     //Handle unknown endpoints
     res.write("nothing here go to: /weather?city=nameOfCity");
     res.end();
    }

});

async function main(name, res) {
    try {
        let foundCity = cities.find(object => object.name == name);
        //fetch the data related to the city lat and lng values
        if (foundCity) {
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${foundCity.lat}&longitude=${foundCity.lng}&current_weather=true`);
            const data = await response.json();
            //console.log(data.current_weather_units.temperature);
            let x = (foundCity.name + ' ' + (data.current_weather.temperature) + ' ' + data.current_weather_units.temperature);
            res.write(x);
            res.end();
        } else {
            throw "city name not found";
        }
    }
    catch (err) {
        //console.log(err.message);
        //maybe change the res.writehead();
        if (typeof err === 'string')
        {
          res.write(err);
        }
        else {
            res.write(err.message);
        }
        res.end();
        
    }
}


server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});