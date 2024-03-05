function spinWords(string){
    //TODO Have fun :)
    let arr = string.trim().split(" ");
    for (let i = 0; i < arr.length; i++) {
      let str = [];
      if (arr[i].length >= 5) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
          str.push(arr[i][j]);
        }
      
        arr[i] = str.join("");
      } 
      
    }
    
    return arr.join(" ");
}