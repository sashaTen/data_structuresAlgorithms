
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

function returnNODEbyINDEXfromEND(index){
    if(index===0){
        return  returnLASTnode()
    }
let  length  =   returnLENGTH()
if(index >  length){
    return  "too  big"
}else if(index<0){
return   "index  must  be  positive"
}
else   {
let count   =  0;
let  current =   returnLASTnode()
while(current.prev){
    count++
    current =   current.prev
    if (count   ===index){
        return    current
    }

}
}
}


function    insertAFTERindexFROMstart(index ,   value){
    const   nodeBEFORE =   returnNODEbyINDEX(index)
    const  node   =    new Node(value)
    node.next    =   nodeBEFORE.next
    node.prev =    nodeBEFORE
    nodeBEFORE.next   =    node
}


function   insertAFTERindexFROMend(index ,    value){
const  node   =   new  Node(value)
const  nodeBYindex   =  returnNODEbyINDEXfromEND(index)
node.next =   nodeBYindex.next
node.prev  =  nodeBYindex
nodeBYindex.next   =   node

}
function  deleteFROMstart(index){
    const   nodeTOdelete  =    returnNODEbyINDEX(index)
    const   nodeAFTER   =     nodeTOdelete.next
    const   nodeBEFORE    =   nodeTOdelete.prev
    nodeBEFORE.next   =   nodeTOdelete.next
    nodeAFTER.prev  =   nodeBEFORE

    
}

function   deleteFROMend(index){
    const  nodeTOdelete =    returnNODEbyINDEXfromEND(index)
    const   nodeAFTER   =     nodeTOdelete.next
    const   nodeBEFORE    =   nodeTOdelete.prev
    nodeBEFORE.next   =   nodeTOdelete.next
    nodeAFTER.prev  =   nodeBEFORE

}
function   pringALLitems(){
    let   arr =   []
    let  current   =  head
    while(current.next ){
        arr.push(current)
        current =  current.next
    }
    return   arr
}
function  printREVERSE(){
    let  last   =   returnLASTnode()
    let  arr= []
    while(last.prev){
        arr.push(last)
        last  =   last.prev
    }
    return   arr
}



push(1)
push(2)
push(3)
push(4)
push(5)

push(1000)
push(2000)
push(3000)
push(4000)
push(5000)
deleteFROMstart(3)
deleteFROMend(2)
console.log(printREVERSE());




