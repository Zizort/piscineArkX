function solution(str){
  
    let x = str.length;
   let arr = [];
   if (str.length % 2 == 0) {
     for (let i = 0; i < x; i = i + 2) {
       arr.push(str[i] + str[i + 1]);
     }
   }else {
     for (let i = 0; i < x; i = i + 2) {
       if (i != x - 1) {
         arr.push(str[i] + str[i + 1]);
       } else {
         arr.push(str[i] + '_');
       }
   }
 }
   return arr;
 }  