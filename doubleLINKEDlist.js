
let   head 

class  Node  {
    constructor(value){
       this.value  =   value
       this.next  =   null
       this.prev =   null

    }
}

function putINfront(new_data)
{
let    node    =    new Node(new_data)
node.next =    head
node.prev   =   null
if (head)
    head.prev  =    node
    head =    node


}

function   returnLASTnode(){
    let   tail   =    head
    while(tail.next){
        tail   =    tail.next   
    }
    return    tail
}



function    push(value){
    if(!head){
        putINfront(value)
    }
    let  last   =  returnLASTnode()
    let  node   =   new   Node(value)
    
    last.next =    node
    node.prev =   last
}

function   returnLENGTH(){
    let  length =   0;
    let   tail   =  head
    while(tail.next){
        length++
        tail =  tail.next
    }
    return   length
}


function   returnNODEbyINDEX(index){
let   length =   returnLENGTH()
if (index>   length){
    return   "too  big"
}
else if(index<0)  {
return    "index  must be  positive  number"
}else   {
let  count   =  0
let  current =  head
while(current.next){
    current = current.next 
    count++
    if(count===index){
        return   current
    }
}

}

}


push(0)
push(1)

push(2)
push(3)
push(4)
push(485)
push(99996)
returnLASTnode()
console.log(returnNODEbyINDEX(8));

