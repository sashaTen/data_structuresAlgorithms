const  elt    =  document.getElementById('id')
let   list   =    [0,1,2,399,66,33,88,7,10  ,3,4,5 -999];

const    findSmallest=(arr)=>{
    let  smallest_number =     arr[0]
    let   index_of_smallest  =   0
    for(let  i=0  ; i  <   arr.length   ;  i ++){
    if(arr[i]< smallest_number){
        smallest_number =   arr[i]
        index_of_smallest =    i 
    }    
    }
    return   index_of_smallest
}


function  selectionSort(list){
    let    sorted   =   []

for(let  i  = 0;  i <   list.length  ; i++){
    swap(list ,  findSmallest(list) )
    sorted.push(

        list.shift()
    )

}

return   sorted

}


function   swap(list   ,     index){
    let  temp   =    list[index];
    list[index] =    list[0]
    list[0] =     temp
    return list
}
elt.innerHTML = selectionSort(list)

