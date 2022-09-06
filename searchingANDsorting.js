/*
i gotta   solve  a   lot  of  porblems   for 
searching   and  sorting 



*/ 



// Bubble sort Implementation using Javascript
 
 
// Creating the bblSort function
function bblSort(arr){
    
    for(var i = 0; i < arr.length; i++){
       
      // Last i elements are already in place 
      for(var j = 0; j < ( arr.length - i -1 ); j++){
         
        // Checking if the item at present iteration
        // is greater than the next iteration
        if(arr[j] > arr[j+1]){
           
          // If the condition is true then swap them
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }
    // Print the sorted array
   console.log(arr);
   }
    
    
   // This is our unsorted array
   var arr = [234, 43, 55, 63,  5, 6, 235, 547];
    
    
   // Now pass this array to the bblSort() function
   //bblSort(arr);







   let   list   =  [1,2,3,6,50 ,0,-9,-5,5,5,5];
   console.log(

       list.length -4
   );

function    bubbleSort(arr){


    for(let i   =0 ; i   <   arr.length  ;  i++){

        for(let   j  =0 ; j  <    arr.length-i-1 ;  j++)

            if(arr[j]<arr[j+1]){
                let   temp  =   arr[j]
                arr[j] =   arr[j+1]
                arr[j+1] =   temp

            }
        }
        console.log(arr);
    }



bubbleSort(list)



