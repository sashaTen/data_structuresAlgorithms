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




///    what    i  have  noticed  in recursive   proccess   
/*    
it is   like the    for  loop   but  slightly   different   
you return    the  condition   and 
i++    -    the  variation  is   
how your   variable   will be changed  is inside of the  function
like   factorial(num -1)

*/



