



const  checkDUPLICATS=(arr)=>{
    
    
    function    isPresent(arr  ,   number){
        for(let  i=0;  i < arr.length ;  i++){
            if(arr[i]===number){
                return   true
            }
        }      
    }
    

    
   let    newList   =   []

    for(let   i  = 0 ;   i   <   arr.length ;  i++){
          if(!isPresent(newList ,    arr[i])){

              newList.push(arr[i])
          }else   return   false

    }
    
    return    true
}


console.log(
    checkDUPLICATS([1,2,6,8,100,1])
    

);