 // 1 => A. Print odd numbers in an array

 var array = [12,13,14,15,1,58,11,21,51,846,31,51,71];
 var result = [];
 
 function odd(){
   
    for(i=0;i<array.length;i++){
 
       if(array[i]%2==1){
        result.push(array[i]);
    } 
    }
     return result;
   } 
    
    console.log(odd());
 
 // ---------------------------------------
 
 // B. Convert all the strings to title caps in a string array
 
 
 var array1 = ["naruto","sasuke","kakashi","sakura"];
 
 var result1 = [];
 
 function printCaps(){
    
    for(var i=0;i<array1.length;i++){
 
       result1.push(array1[i].toUpperCase());
    }
   return result1;
 }
 
 console.log(printCaps(array1))
 
 // ---------------------------------------
 
 // C. Sum of all numbers in an array
 
 
 var array3 = [10,10,20,30,40,50];
 
 function sumValue(){
   
   var sum = 0 ;
   
   for(var i=0;i<array3.length;i++){
   
       sum = sum + array3[i];  
 
   }
 
   return sum;
 }
 
 console.log(sumValue(array3))
 
 // ---------------------------------------
 
 // D. Return all the prime numbers in an array
 
 
 // ---------------------------------------
 
 // E. Return all the palindromes in an array
 
 var array5 = ["rotor","level","razeeth","abdul","reviver","gotcha","golog"];
 
 var result5 = [];
 
 function printPalindrome(){
 
    for(var i=0;i<array5.length;i++){
    
     var split = array5[i].split("");
     var rev = split.reverse();
     var join = rev.join("");
 
     if(join===array5[i]){
       result5.push(array5[i]);
     }
 
    }
    return result5;
   }
 
   console.log(printPalindrome(array5));
 
 
   // ---------------------------------------
 
 // F. Return median of two sorted arrays of the same size.
 
 
 const median = arr => {
 
   const mid = Math.floor(arr.length / 2),
     num = [...arr].sort((a, b) => a - b);
 
   return arr.length % 2 !== 0 ? num[mid] : (num[mid - 1] + num[mid]) / 2;
 };
 
 console.log(median([1,2,3,4,5,6,7,8,9,10,11]));
 console.log(median([1, 2, 3, 4, 2.5]));
 
 
   // ---------------------------------------
 
 // G. Return median of two sorted arrays of the saRemove duplicates from an array.
 
  var array6 = ["one","two","three","three","two","four"]
  var result6 = [];
 
  const removeDup = ()=>{
 
     for(var i=0;i<array6.length;i++){
       
       if(!result6.includes(array6[i])){
 
         result6.push(array6[i])
       }
   
     }
     return result6;
   }
 
   console.log(removeDup(array6));
  
   // ---------------------------------------
 
 // H. Rotate an array by k times
 
 
 var rotate = (array8,k) => {
  
     for(var i=0;i<k;i++){
     
         array8.unshift(array8.pop());
        
     }
   return array8;
 }
  
 console.log(rotate([3,4,5,1,2],2))
 
 
 