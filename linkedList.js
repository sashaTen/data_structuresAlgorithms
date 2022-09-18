let   head 

let   secondLIST


function    insertLast2(value){
    const    elt   =   new Node(value)
    if (!secondLIST){
    
    
        secondLIST =  elt
    }
   else   {
    let last   =   secondLIST
    while(last.next){
        last =   last.next
    }
    last.next =    elt
    elt.next   =   null
   }
   
}








class  Node{
    constructor(data){
            this.data   =   data
            this.next   =  null
    }
}




function    push(value  ,   linkedHEAD){
let    firstNode =    new  Node(value)
firstNode.next  =  linkedHEAD
linkedHEAD =    firstNode   

}




function    insertLast(value){
    const    elt   =   new Node(value)
    if (!head){
    
    
        head =  elt
    }
   else   {
    let last   =   head
    while(last.next){
        last =   last.next
    }
    last.next =    elt
    elt.next   =   null
   }
   
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


function   deleteWHOLElist(){
    head.next =  null
    head.data =   null
    return    head
}




function   findNODEbyNUMBER(number){

let    length    =   findLength()
let  current  =  head
let  count =  0
if(number   ===0){
    return    head
}
if(number>    length){
    return    " the   number  exceeds  the  size  of  list "
}else   {
    while(current.next){
        count++
        current =  current.next
        if(count   ===number){
            return   current
        }
    
}


}
}






function    getNthNODEfromEND(number){
    const   length   =    findLength()    
    if(number>   length){
        return   "too  big"
    }
    else   {
        let Nth    =   length -  number;
        let  current  =   head
        let  count =0
        while(current.next){
            count++
            current =current.next
            if(count==Nth){
             return    current
            }
        }
    }
   
}


function   pop(){
let   last   =    head
let   beforeLAST =   last
while(last.next){
    beforeLAST =   last
    last =    last.next
}   
beforeLAST.next =  null
return last
}

function   returnLASTnode(){
    let   last   =  head;
    while(last.next){
        last =   last.next
    }
    return last
}


function  putBIGGESTinEND(){
    let   biggest   =  head
    while(biggest.next){
        if(biggest.data  >     biggest.next.data){
            let temp   =    biggest.data
            biggest.data =  biggest.next.data
            biggest.next.data =  temp
        }
        biggest =     biggest.next
    }
    return  biggest
}

function  putLEASTinEND(){
    let   least   =  head
    while(least.next){
        if(least.data  <     least.next.data){
            let temp   =   least.data
            least.data =  least.next.data
            least.next.data =  temp
        }
        least =     least.next
    }
    return  least
}




function  mergeLISTS(){
    let last   =   returnLASTnode()
    last.next =   secondLIST
//    selectionSORT()
 selectionSORTAscending()

}

function  selectionSORT(){
let  length    =   findLength()

for(let  i=0    ;  i  < length ;  i++){
putBIGGESTinEND()    

}

}

function  selectionSORTAscending(){

    let  length    =   findLength()

    for(let  i=0    ;  i  < length ;  i++){
    putLEASTinEND()    
    
    }

}

insertLast(1)
insertLast(-200)
insertLast(300)
insertLast(1999)
insertLast(2)
insertLast(3)
insertLast(1220)
insertLast(4)
insertLast2(180)
insertLast2(185)
insertLast2(186)
insertLast2(188)
insertLast2(1800)
mergeLISTS()

console.log(head);













