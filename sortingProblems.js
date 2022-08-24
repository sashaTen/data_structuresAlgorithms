///Input: prices = [7,1,5,3,6,4]



/*
1 find   the chepeapest   
2 find  the the   biggest 
3  return  find    index   of the   biggest  dat   after   cheapest 
if    (after   cheapest  no    bigger  then  return 'no  profit')


*/
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