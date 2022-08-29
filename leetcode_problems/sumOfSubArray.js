
/*
1 --+-+-   no  work 
2 all  nums   can  be  negtive
3 current  sum  : 
4  it   grows   forward  and    not   backwards
5    dropping the  head
6    if   grows keep  going 
7    between  the two 
if   [110,-50,-50,-5,-4,50]//  drops   all   besicde   i4
if    
if    loop  until   sum  gets bigger than  before 
if decreases  but  still   not   less then  last  biggest   sum  that its okay
if    you   loop  but  sum  gets   smaller   then  last   drop the   part 
arr = arr.slice(-1);  / only  last  left
maybe   i  need  indexex  at  which    sum   grows  and falls
two   varibles   and  while  loop

*/
function     sumOfArray(arr){
    let   sum = 0;
    for(let i = 0   ; i <  arr.length ;   i++){
         sum   +=arr[i]
    }
    return   sum 
}

function     sumOfSubArr(arr){
for(let i =0 ;  i  <     arr.length ;  i++){
    
}
   
}


const  nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(

//   sumOfArray(nums)
);






