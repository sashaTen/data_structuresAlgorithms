
const  list    =  [1,2,3,4];
const  productArrayExceptSelf=(arr)=>{
let   list   =  [];
for(let i  =0 ; i  <     arr.length ;  i++){
    list.push(sumOfElts(arr)/arr[i])

}
return list

}

function    sumOfElts(arr){
    let   sum    = 1;
    for(let i  =0 ;    i   <     arr.length ;  i++){
    sum*=arr[i]
}

return  sum 
}


/*
shift()
and  the    sum  of   the  rest  of array 
sum   of  elements  of   array 
push it's  sum    in   the  element 
list

*/

console.log(
    productArrayExceptSelf(list)


);
