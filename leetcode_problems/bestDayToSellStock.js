const     prices = [77,1,5,36 , 0 ,    100,80 ,   50]


function     findBestDay(arr){
      let   min =    0
      for(let  i =0 ;  i <   arr.length  ;  i ++){
            if (arr[i]<   arr[min]){
                  min =    i 
            }
      }
      let   max =    min 
      for (let i =   min;  i  <     arr.length ;  i  ++){
        if (arr[i]>   arr[max]){
            max  =    i
        }
       }
                 return    max
}
console.log(
      findBestDay(prices)

);



