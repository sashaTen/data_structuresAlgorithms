/*

function   exponent(base    ,  power){
    if(power===1){
        return  base
    }
return    base*   exponent(base ,     power-1)

}



function    increaseOrder(number ,     limit){
    if(number<=limit){

        console.log(number);
        increaseOrder(number+1 , limit)
    }else   return 
}










function    factorial(number){


    if(number===1){
        return   1
    }


    return    number*   factorial(number-1)
}




console.log(
    
   // factorial(12)
);




[1,2,3,6]





function   sumArr(arr){
    if(arr.length ===0){
        return
    }


    
    return      arr.shift()
}

let  list   =   [11,22,33,44,55,66,77]
sumArr(list) 
sumArr(list) 
sumArr(list) 
sumArr(list) 
sumArr(list) 

sumArr(list) 



console.log(
    sumArr(list)
    
);



/*


*/
function   countDown(number){
    console.log(number);
    if(number===0){
        return    0
    }
    else    {
        countDown(number- 1)
    }
}



function    increaseOrder(number ,    target){
    if(number===target){
        return   number
    }
    else   {
        console.log(number);
        increaseOrder(number+=1 ,      target)
}
    
}

function   exponent(base ,   power){
      if(power===1){
        return    base
      }  
      else     {
    return base   =    base*exponent(base,     power   -1)     
      }
    }

  


function   factorial(number){
if(number===1){
    return   1
}else    {
    return   number*    factorial(number-=1)
}
}


function   sumArr(arr){
    if(arr.length===0){
        return   0
    }
    else   {
        return arr.pop()+   sumArr(arr)
    }
}
