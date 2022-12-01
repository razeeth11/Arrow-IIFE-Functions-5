// 1 => A. Print odd numbers in an array 

        //ARROW FUNCTION

        var array = [12,13,14,15,1,58,11,21,51,846,31,51,71];
        var result = [];
        
        const odd = ()=>{
          
           for(var i=0;i<array.length;i++){
        
              if(array[i]%2===1){
               result.push(array[i]);
           } 
           }
            return result;
          } 
           
           console.log(odd(array));
        
           // ---------------------------------------
        
        // B. Convert all the strings to title caps in a string array
        
                  // ARROW FUNCTION
        
            var array1 = ["naruto","sasuke","kakashi","sakura"];
        
            var result1 = [];
        
               const printCaps = ()=>{
           
           for(var i=0;i<array1.length;i++){
        
              result1.push(array1[i].toUpperCase());
              }
               return result1;
            }
        
               console.log(printCaps(array1))
        
               // ---------------------------------------
        
        // C. Sum of all numbers in an array
        
                    //ARROW FUNCTION
        
        
        var array3 = [10,10,20,30,40,50];
        
        const sumValue = ()=>{
          
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
        
                          //ARROW FUNCTION
        
        var array5 = ["rotor","level","razeeth","abdul","reviver","gotcha","golog"];
        
        var result5 = [];
        
            const printPalindrome = ()=>{
        
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
        