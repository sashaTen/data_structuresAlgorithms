let  list  =   [40,52,9,30,20000,7000,5,81,9];
let   length = list.length



function   PutTheBiggestAtIndex0(arr){
        let  biggest =  arr[0]
        let   index_of_biggest =    0
        let temp
        for(let   i  = 0 ; i  <  arr.length   ;   i++){
        if(biggest  <  arr[i]){
        biggest =   arr[i]
        index_of_biggest =  i
        }
        }
       temp  =  arr[0]
       arr[0] =      arr[index_of_biggest]
       arr[index_of_biggest] =  temp
        /*  
        ex :  5th  element  is the  biggest  
       swap   5th  and  0th
       temp  =  arr[0]
       arr[0] =      arr[5]
       arr[5] =  arr[0]

        */
        //return   index  works well
        return   arr
}




function  SelectionSort(arr){
    
   let   sorted =  []
   let count =  0

   for(let i  =0 ;    i <length;  i++){
    
    sorted.push(PutTheBiggestAtIndex0(arr).shift())
   }
   /*
   sorted.push(
   PutTheBiggestAtIndex0(arr).shift()
   )
     //   
     create   []   
     put  the  biggest  in  front
     [].push(unsorted.shift()) 
     
     */
     
          
               

    console.log(sorted);
}

   SelectionSort(list)