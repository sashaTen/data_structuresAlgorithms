let arr =   [1,2,3,4,5,6]
console.log(arr);
function   toROTATE(arr){
    arr[arr.length] =   arr[0]
    for(let i  = 0 ; i  <  arr.length;  i++){
        arr[i] =   arr[i+1]
    }

    const results = arr.filter(element => {
        return element !== undefined;
      });
    
      return   findleast(results)
}

toROTATE(arr)
toROTATE(arr)
toROTATE(arr)
toROTATE(arr)
function findleast(arr){
let least   =   arr[0]
let count = 0
for(let   i  =0; i  <   arr.length ;  i++){
count ++;
if(least  > arr[i]){
least = arr[i]
}

}
return    findINDEX(arr,    least)
}

function   findINDEX(arr,  number){
    for(let  i=0 ; i <   arr.length ; i ++){
        if(arr[i]===number){
            return arr.length-i
        }
    }

}




console.log(toROTATE(arr));




