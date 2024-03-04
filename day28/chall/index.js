const mongoose = require("mongoose");
const Product = require("./products");

mongoose.connect("mongodb://localhost:27017/day28DB");
const productss = [
    {
      name: 'Laptop',
      price: 1200,
      description: 'High-performance laptop with powerful specs.',
      inStock: true,
      category: 'ab',
    },
    {
      name: 'Smartphone',
      price: 800,
      description: 'Latest smartphone with advanced features.',
      inStock: true,
      category: 'ab',
    },
    {
      name: 'Headphones',
      price: 150,
      description: 'Over-ear headphones with noise-cancelling technology.',
      inStock: true,
      category: 'ab',
    },
    {
      name: 'Smartwatch',
      price: 250,
      description: 'Fitness tracker and smartwatch with health monitoring.',
      inStock: false,
      category: 'ab',
    },
    {
      name: 'Camera',
      price: 600,
      description: 'Digital camera with high-resolution imaging.',
      inStock: true,
      category: 'ab',
    },
    {
      name: 'Gaming Console',
      price: 400,
      description: 'Next-gen gaming console for immersive gaming experiences.',
      inStock: true,
      category: 'bc',
    },
    {
      name: 'Bluetooth Speaker',
      price: 80,
      description: 'Portable Bluetooth speaker with crisp sound.',
      inStock: true,
      category: 'bc',
    },
    {
      name: 'Tablet',
      price: 300,
      description: 'Slim and lightweight tablet for on-the-go productivity.',
      inStock: true,
      category: 'bc',
    },
    {
      name: 'Coffee Maker',
      price: 50,
      description: 'Automatic coffee maker for brewing your favorite coffee.',
      inStock: true,
      category: 'bc',
    },
    {
      name: 'Fitness Tracker',
      price: 100,
      description: 'Wearable fitness tracker with heart rate monitoring.',
      inStock: false,
      category: 'bc',
    },
    {
      name: 'External Hard Drive',
      price: 120,
      description: 'Large-capacity external hard drive for data storage.',
      inStock: true,
      category: 'bc',
    },
    {
      name: 'Wireless Mouse',
      price: 30,
      description: 'Ergonomic wireless mouse for comfortable computing.',
      inStock: true,
      category: 'bc',
    },
    {
      name: 'Portable Charger',
      price: 20,
      description: 'Compact portable charger for on-the-go device charging.',
      inStock: true,
      category: 'cd',
    },
    {
      name: 'Smart Bulbs',
      price: 15,
      description: 'Set of smart bulbs for customizable lighting at home.',
      inStock: true,
      category: 'cd',
    },
    {
      name: 'Backpack',
      price: 40,
      description: 'Durable backpack with multiple compartments for storage.',
      inStock: true,
      category: 'cd',
    },
    {
      name: 'Wireless Earbuds',
      price: 120,
      description: 'True wireless earbuds for immersive audio experiences.',
      inStock: false,
      category: 'cd',
    },
    {
      name: 'Graphic Tablet',
      price: 200,
      description: 'Digital graphic tablet for artists and designers.',
      inStock: true,
      category: 'cd',
    },
    {
      name: 'Desk Chair',
      price: 150,
      description: 'Comfortable desk chair with adjustable features.',
      inStock: true,
      category: 'cd',
    },
    {
      name: 'Air Purifier',
      price: 80,
      description: 'HEPA air purifier for cleaner and fresher indoor air.',
      inStock: true,
      category: 'cd',
    },
    {
      name: 'Electric Toothbrush',
      price: 40,
      description: 'Electric toothbrush for effective dental care.',
      inStock: true,
      category: 'cd',
    },
  ];
let page = 0;
const booksPerPage = 4;
async function run() {
    try {
      //await Product.deleteMany({});
        // for(let i = 0; i < productss.length; i++) {
        //     const products = new Product(productss[i]);
        //     await products.save();
        //     console.log("done" + (i + 1));
        // }
//-----------------------------
        const products = await Product.find().sort({ price: -1 });
        //console.log(products);
//-------------------------------
        const products1 = await Product.find().skip(page * booksPerPage).limit(booksPerPage)
        //console.log(products1);
//------------------------------------
        const products2 = await Product.aggregate([
            {
               $match: {
                 inStock: true
               }
            },
            {
               $count: "inStockCount"
            }
        ]);
        //console.log(products2)=> [ { inStockCount: 17 } ]
        //console.log(products2[0].inStockCount);// => 17
//--------------------------------
        const products3 = await Product.aggregate([
            {
            $group: {
                _id: null, // Group all documents together
                averagePrice: { $avg: "$price" } // Calculate the average price
            }
            }
        ]);
        // console.log(products3);// => [ { _id: null, averagePrice: 237.25 } ]
        // console.log(products3[0].averagePrice);// => 237.25
//----------------------------------------------
        const products4 = await Product.find().sort({ name: 1 });
        //console.log(products4);
//------------------------------------------
        const products5 = await Product.aggregate([
          {
            $group: {
              _id: "$category", // Group by category
              products: { $push: "$$ROOT" } // Push the entire product document into an array
            }
          }
        ]);
        //console.log(products5[0].products[0]);
        products5.forEach(category => {
          console.log(`Category: ${category._id}`);
          category.products.forEach(product => {
             console.log(`Product Name: ${product.name}, Price: ${product.price}`);
          });
         });
//-----------------------------------

    } catch (err) {
        console.log(err);
    }
}
run();