
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





push(0)
push(1)

push(2)
push(3)
push(4)
push(485)
push(99996)
returnLASTnode()
console.log(head);

