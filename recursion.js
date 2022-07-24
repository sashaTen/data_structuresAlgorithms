const  elt   =  document.getElementById('id')



//    multiplication     recursion
/*   

function       factorial(num){
    if(num===6){
        return    num
    }
  return    num *    factorial(num+1)
}
elt.innerHTML =     factorial(1)


*/



/*  
input     number   into   function 
if   number   ===0   return   sum
sum =    1   in  the   beginning



sum =   num *    factorial(num-1)


*/




//number   grows   1 * 2 * 3 *4
/*   




*/


function  factorial(num){
    let  sum   = 1;
    if(num===0){
        return sum
    }

   return     sum*=num*factorial(num-1)





}

elt.innerHTML =   factorial(6)



