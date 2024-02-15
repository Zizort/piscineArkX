const express = require('express');
const app = express();
const port = 3000;
//have to use post man to send different other than get
// the browser has only get as a default
// wecan use get to everything but it does not have req.body
let products = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
];
// let y = products[products.length - 1].id;

// let newUser = {id: y, name: data.name, price: data.price};
//     products.push(newUser);
//     console.log(products);

// For parsing application/json
app.use(express.json());
 
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// implicit returns?
// let arr = products.filter((ele) => { return ele.price ==999.99 }); //only works with return
// console.log(arr);
// let arr = products.filter((ele) => ele.price == 999.99);
// console.log(arr);
//console.log(products.map((x) => `id: ${x.id}, name: ${x.name}, price: ${x.price}`).join("\n"));
//join ("\n") does not work on browser
//where is error handeling?

//what is the point of get /post put keywords if we re going to build the entire logic behind them?



app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get('/products', (req, res) => {
    res.json(products)
});
app.get('/products/search', (req, res) => {
    let a = req.query.q;
    let b = req.query.minPrice;
    let c = req.query.maxPrice;
    //res.send(a + " " + b + " " + c);
    const arr = products.filter((ele) => { return ele.price <= c && ele.price >= b});
    //res.send(arr.map((x) => `${a}: id: ${x.id}, name: ${x.name}, price: ${x.price}\n`)); // send and json seem identical // statue code 304
    res.json(arr);
    //res.json(arr);
});
app.get('/products/:id', (req, res) => {
    let wanted = req.params.id;
    let found = products.find((ele) => ele.id == wanted);
    if (found) {
        res.json(found);
    } else {
        res.status(400).send("product not found");
    }
});


//postman
app.post('/products', (req, res) => {
    const data = req.body;
    let newUser = {id: products[products.length - 1].id + 1, name: data.name, price: data.price};
    products.push(newUser);
    console.log(products);
    res.json(products);
});

app.put('/products/:id', (req, res) => {
    let ID = req.params.id;
    //let j = 0
    let wanted = products.find((ele) => { return ele.id == ID});//j++; 
    if (wanted) {
        let i = products.indexOf(wanted);
        const data = req.body; //if data contains the whole object
        // products[wanted] = data; //this does not work //using the object as an index in array of objects
        if (data.name)
            products[i].name = data.name; 
        if (data.price)
            products[i].price = data.price;
        res.json(products);
    } else {
        res.status(400).send("not found");
    }

    
});

app.delete('/products/:id', (req, res) => {
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
        res.status(400).send("not found");
    }
});

app.use((req, res) => {
    res.status(404).send("404 page not found");
});