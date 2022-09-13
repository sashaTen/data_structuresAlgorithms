let   head 
//console.log(head);
class  Node{
    constructor(data){
            this.data   =   data
            this.next   =  null
    }
}




function    push(value){
let    firstNode =    new  Node(value)
firstNode.next  =  head
head =    firstNode   

}




function    insertLast(value){
    const    elt   =   new Node(value)
    if (head===null){
        elt.next =     head
        head =   elt
    }


    let last   =   head
    while(last.next){
        last =   last.next
    }
    last.next =    elt
    elt.next   =   null
}



/*  
global    head    is  undefiene   initially
then   we  create  new node with   value 1 
new  node's next   refers  to  head   and   becomes  undefined
and   the  head  will  refer  to   new   node  which   has   value   of  1

then    we  declare second   elt   which   value is  2
it's  next   will  refer  to  head  which  value  is   1 
and the the head   will  refer to   elt which   value  is   2

*/

function   findNodeByValue(value){
    let  current   =    head
    while(current.data !==value){
        current =  current.next
    }

    
    return   current
    
   
}


function   removeByValue(value){
    let    node    =    findNodeByValue(value)
   // console.log(node);   
    let    prev =  head
    while(prev.next!==node){
       prev =  prev.next
    }
    prev.next =   node.next
    node =  null
   // console.log(prev);
    
}

 

function  insertAfter(prevNODEvalue ,   value){
    let   prevNode  =    findNodeByValue(prevNODEvalue)
    const    elt    =    new    Node(value)
    elt.next =    prevNode.next
    prevNode.next =     elt
}

function   findLength(){
    let  count 
    if(head.next){
        count =  1
    }else  if(head.next==null)   {
        count=0
    }
    let  current  =   head
    while(current.next){
        count++;
        current =  current.next
    }
    return   count

}



function   recFINDlength(node){
    if(node==null){
        return   0

    }

    return   1+   recFINDlength(node.next)
}



push(1)
push(2)
push(3)
push(4)
push(5)


console.log(recFINDlength(head));

















