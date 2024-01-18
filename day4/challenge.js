const books = require("./books.json");

const l = books.length;
//books is an array of objects
function priceOfBook(bookName) {
  // write your code here
  // console.log(books[0].id);
  for (let i = 0; i < l; i++)
  {
    if (books[i].title == bookName)
    {
      return books[i].price;
    }
  }

}

function affordableBooks(budget) {
  // write your code here
  let arr = [];
  for (let i = 0; i < l; i++)
  {
    if (books[i].price <= budget)
    {
      arr.push(books[i]);
    }
  }
  return arr;
}

function findBookByGenre(genre) {
  // write your code here
  let arr = [];
  //console.log(books[0].genres.length);

  for (let i = 0; i < l; i++)
  {
    for (let j = 0, n = books[i].genres.length; j < n; j++)
    {
      if (books[i].genres[j] == genre)
      {
        arr.push(books[i]);
      }
    }
  }
  return arr;
}

function groupByGenre() {
  // write your code here
   // Create an object to store books grouped by genre
   const groupedBooks = {};

   // Iterate through each book in the array
   for (let i = 0; i < books.length; i++) {
     // Iterate through each genre of the current book
     for (let j = 0; j < books[i].genres.length; j++) {
       const genre = books[i].genres[j];
 
       // Check if the genre is already a key in the groupedBooks object
       if (groupedBooks[genre]) { // same as groupedBooks.genre 
         // If yes, push the current book to the existing array
         groupedBooks[genre].push(books[i]);
       } else {
         // If no, create a new array with the current book
         groupedBooks[genre] = [books[i]];
       }
     }
   }
   // Return the object containing books grouped by genre
   return groupedBooks; 
 
}
// console.log(groupByGenre());

function sortBooksByPrice() {
  // write your code here 
  const sortedBooks = JSON.parse(JSON.stringify(books)); 
  let x = -1;
  let temparr;
  while (x != 0)
  {
    x = 0;
    for (let i = 0; i < l - 1; i++)
    {
      if (sortedBooks[i].price > sortedBooks[i + 1].price) // switch to > to sort from small to big
      {
        temparr = sortedBooks[i];
        sortedBooks[i] = sortedBooks[i + 1];
        sortedBooks[i + 1] = temparr;
        x++;
      }
    }
  }
 return sortedBooks;
}

(function main() {
  try {
    if (priceOfBook("The Alchemist") !== 9.49) {
      throw new Error("priceOfBook is not working properly.");
    }
    if (affordableBooks(10).length !== 6) {
      throw new Error("affordableBooks is not working properly.");
    }
    if (findBookByGenre("Fiction").length !== 7) {
      throw new Error("findBookByGenre is not working properly.");
    }
    if (Object.keys(groupByGenre()).length !== 30) {
      throw new Error("groupByGenre is not working properly.");
    }
    if (sortBooksByPrice()[0].price !== 5.99) {
      throw new Error("sortBooksByPrice is not working properly.");
    }
    console.log("All tests passed successfully.");
  } catch (error) {
    console.log(error);
  }
})();
