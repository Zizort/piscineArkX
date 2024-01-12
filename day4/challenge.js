const books = require("./books.json");

const l = books.length;
//books is an array of objects
function priceOfBook(bookName) {
  // write your code here
  console.log(books[0].id);
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
  // not yet completed
  let genresObj = {genre: "", book: []};
  const arr = []; // array of genres
  const groups = []; // array of objects
  for (let i = 0; i < l; i++)
  {
    for (let j = 0, n = books[i].genres.length; j < n; j++)
    {
      if (search(arr, books[i].genres[j]) == false || arr.length == 0)
      {
        arr.push(books[i].genres[j]);
      }
    }
  } 
  //loop
  genresObj.genre = arr[i];//books[i].genres[j];
  genresObj.book = findBookByGenre(arr[i]);
          groups.push(genresObj.genre);
}

function sortBooksByPrice() {
  // write your code here  
  let x = -1;
  let temparr = [];
  while (x != 0)
  {
    x = 0;
    for (let i = 0; i < l - 1; i++)
    {
      if (books[i].price < books[i + 1].price) // switch to > to sort from small to big
      {
        temparr[0] = books[i];
        books[i] = books[i + 1];
        books[i + 1] = temparr[0];
        x++;
      }
    }
  }

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
