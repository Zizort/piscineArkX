function findMissingLetter(array)
{
  for (let i = 0; i < array.length - 1; i++) {
    //array[i] + 1 != array[i + 1]
    //(array[i].charCodeAt(0)) + 1 != (array[i+1].charCodeAt(0)
    if (String.fromCharCode(array[i].charCodeAt(0) + 1) != String.fromCharCode(array[i + 1].charCodeAt(0))) {
      return String.fromCharCode(array[i].charCodeAt(0) + 1);
    }
  }
  return ' ';
}