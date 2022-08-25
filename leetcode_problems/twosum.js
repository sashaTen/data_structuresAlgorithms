/*  
function  accepts    target  and  the arr
check  single  time
function  that   is  called on  each  elt
and returns  the   index   of    current and  the rest

*/


const   arr=     [2,7,11,15,87, 3]
const   targetOne   =     9
const   targetTwo  =  13
const   targetThree =   3+87

function     checkRest(arr   ,   remainder){
    for(let i  =0 ;  i <    arr.length ;  i++){
        if (arr[i]===remainder){
            return   i 
        }
    }
}

function   twoSum(arr   ,  target){
    for(let   i  = 0  ;  i  <     arr.length ;  i ++){
        let    remainder = target -      arr[i]
        if(checkRest(arr,remainder)){
            return    i+' '+checkRest(arr, remainder)
        }
    }
}

/*
if(checkRest(arr ,      targetThree-arr[i])){
        console.log( i   +  "   "+      checkRest(arr ,      targetOne-arr[i]));
       // return    i   +  "   "+      checkRest(arr ,      targetOne-arr[i])
    }

*/


console.log(
   twoSum(arr,    targetThree)
  //  checkRest(arr , 15)
);