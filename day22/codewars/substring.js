function searchSubstr( fullText, searchText, allowOverlap = true ){
    let first = searchText[0];
    let count = 0;
    for (let i = 0; i < fullText.length; i++) {
      if (fullText[i] == searchText[0] && fullText.substring(i, i + searchText.length) == searchText) {
          count++;
        if (allowOverlap == false) {
          i = i + searchText.length - 1;
        }
          
      }
    }
    return count;
  }