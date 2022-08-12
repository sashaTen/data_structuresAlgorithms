// count  down 

/*
1   10 log   it  
2   9  (number -1)log  it
if   number   =  ===0     log it and  return 


*/

function    countDown(number){

    if(number===1){
        console.log(number);
        return
    }
    console.log(number);
   return  countDown(number-1)
}


//countDown(10)
//  number to  power   
/*
ex  :     (2,5)
2**2*2*2*2

*/
function   exponent(base    ,  power){
    if(power===1){
        return  base
    }
return    base*   exponent(base ,     power-1)

}




//console.log(exponent(2,30));

/*   
increassing   order   numbers   print

10
0
1
2
3  ... 10

*/


function    increaseOrder(number ,     limit){
    if(number<=limit){

        console.log(number);
        increaseOrder(number+1 , limit)
    }else   return 
}






/*    

find  the  factorial 
5!
1*2*3*4*5
*/





function    factorial(number){


    if(number===1){
        return   1
    }


    return    number*   factorial(number-1)
}




console.log(
    
    factorial(12)
);