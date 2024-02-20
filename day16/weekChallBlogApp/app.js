const express = require('express');
const app = express();
const port = 3000;
const postModel = require('./models/post.js');
const blogs = require("./blogs.json");
//const fs = require("fs");
//modules
// function writeFile(path, data) {
//     return new Promise((resolve, reject) => { 
//         fs.writeFile(path, data, (err) => {
//         if (err) {
//             reject(err);//console.error("")
//         } else {
//             resolve('File created successfully.');
//         }});
//     });
// }

// function readf(path) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         });
//     });

// }

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
app.post('/blogs', async (req, res, next) => {
    try {
        const data = req.body;
        let newBlog = {id: blogs[blogs.length - 1].id + 1, text: data.text};
        blogs.push(newBlog);
        //write this into the file
        await postModel.writeFile("./blogs.json", JSON.stringify(blogs));
        res.json({message: "succesful posting"});

    } catch(error) {
        next(error);
    }
});

app.put('/blogs/:id', async (req, res, next) => {
    try {
        let ID = req.params.id;
        //let j = 0
        let wanted = blogs.find((ele) => { return ele.id == ID});//or just index of() if its -1 it oes not exist
        if (wanted) {
            let i = blogs.indexOf(wanted);
            const data = req.body; //if data contains the whole object
            // products[wanted] = data; //this does not work //using the object as an index in array of objects
            if (data.text)
                blogs[i].text = data.text; 
            //or let newprocucts = {...  ,...req.body};
            //write it to file
            //overwrite it with the new data
            await postModel.writeFile("./blogs.json", JSON.stringify(blogs));
            res.json({message: "modification succesful"});
            //res.json(products);
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

app.delete('/blogs/:id', async (req, res, next) => {
    try {
        let ID = parseInt(req.params.id);
        //let j = 0
        let wanted = blogs.find((ele) => { return ele.id == ID});//j++; 
        if (wanted) {
            let i = blogs.indexOf(wanted);//you cant compare objects / this works
            //const data = req.body;
            blogs.splice(i, 1);
            //write it to file
            await postModel.writeFile("./blogs.json", JSON.stringify(blogs));
            res.json({message: "deletion succesful"});
            // console.log(products);
            //res.json(blogs);
        } else {
            //res.status(400).send("not found");
            const error = new Error("nothing to delete");
            error.status = 400;
            next(error);
        }
    } catch (error) {
        next(error);
    }    
});

app.use((error, req, res, next) => {
    
    console.log(error);
    res.status(error.status).json({error: error.message});
    
})
app.use((req, res) => {
     // including the parameters: error and next does not work
    res.status(404).send("404 page not found");
});