const express = require('express');
const app = express();
const port = 3000;
const blogs = require("./blogs.json");
//modules
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
// //still missing error handeling
// let products = [
//     { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
//     { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
//     { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
//     { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
//     { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
// ];
// For parsing application/json
app.use(express.json());
 
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});


// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get('/blogs', (req, res, next) => {
    try {
        res.json(blogs);
    } catch (error) {
        next(error);
    }    
});
// app.get('/products/search', (req, res, next) => {
//     try {
//         let a = req.query.q;
//         let b = req.query.minPrice;
//         let c = req.query.maxPrice;
//         //res.send(a + " " + b + " " + c);
//         const arr = products.filter((ele) => { return ele.price <= c && ele.price >= b});
//         //res.send(arr.map((x) => `${a}: id: ${x.id}, name: ${x.name}, price: ${x.price}\n`)); // send and json seem identical // statue code 304
//         if (arr) {
//             res.json(arr);
//         }
//         else {
//             // res.send("nothing");
//             const error = new Error("nothing");
//             error.status = 400;
//             next(error);
//         }
//     } catch (error) {
//         next(error);
//     }    

//     //res.json(arr);
// });
app.get('/blogs/:id', (req, res, next) => {
    try {
        let wanted = req.params.id;
        let found = blogs.find((ele) => ele.id == wanted);
        if (found) {
            res.json(found);
        } else {
            //res.status(400).send("product not found");
            const error = new Error("product not found");
            error.status = 400;
            next(error);
            // return;
        }
    } catch (error) {
        next(error);
    }    
});


//postman
app.post('/blogs', (req, res, next) => {
    try {
        const data = req.body;
        let newBlog = {id: products[products.length - 1].id + 1, text: "hello nice to meet you!"};
        blogs.push(newBlog);
        //write this into the file
        
    } catch(error) {
        next(error);
    }
});

app.put('/blogs/:id', (req, res, next) => {
    try {
        let ID = req.params.id;
        //let j = 0
        let wanted = products.find((ele) => { return ele.id == ID});//or just index of() if its -1 it oes not exist
        if (wanted) {
            let i = products.indexOf(wanted);
            const data = req.body; //if data contains the whole object
            // products[wanted] = data; //this does not work //using the object as an index in array of objects
            if (data.name)
                products[i].name = data.name; 
            if (data.price)
                products[i].price = data.price;
            //or let newprocucts = {...  ,...req.body};
            res.json(products);
        } else {
            // res.status(400).send("not found");
            const error = new Error("products not found for updating");
            error.status = 400;
            next(error);
        }
    } catch (error) {
        next(error);
    }    
});

app.delete('/blogs/:id', (req, res, next) => {
    try {
        let ID = parseInt(req.params.id);
        //let j = 0
        let wanted = products.find((ele) => { return ele.id == ID});//j++; 
        if (wanted) {
            let i = products.indexOf(wanted);//you cant compare objects / this works
            //const data = req.body;
            products.splice(i, 1);
            console.log(products);
            res.json(products);
        } else {
            //res.status(400).send("not found");
            const error = new Error("nothing");
            error.status = 400;
            next(error);
        }
    } catch (error) {
        next(error);
    }    
});

app.use((error, req, res, next) => {
    
    console.log(error);
    res.status(error.status).send(error.message);
    
})
app.use((req, res) => {
     // including the parameters: error and next does not work
    res.status(404).send("404 page not found");
});