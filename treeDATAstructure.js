class   Node  {
    constructor(value){
        this.value =   value 
        this.left =   null
        this.right =   null 
    }
}


class   TREE{
    constructor(){
        this.root   =  null
    }
insert(value){
    const    node =   new Node(value)
    if(this.root===null){
       
       this.root  =    node
        
    } 
    else {
        return   this.insertNEWnode(this.root ,    value)
    }
}


returnROOT(){
    return  this.root
}

insertNEWnode( currentNode, value){
const    node   =    new  Node(value) 
if(node.value >  currentNode.value){
    if(currentNode.right===null){
        currentNode.right =   node

    }
    else     return   this.insertNEWnode(currentNode.right ,    value)
}
else if(node.value<  currentNode.value){
    if(currentNode.left===null){

        currentNode.left  =     node;
    }else   {
        return  this.insertNEWnode(currentNode.left ,   value)
    }
    }

}


searchNODEbyVALUE(value  ,    currentnode){
if(value  ===   currentnode.value){
    return     currentnode
}
else   if(value<     currentnode.value){
     if(currentnode.left){
    return   this.searchNODEbyVALUE(value   ,    currentnode.left)    
    }
    else   {

        return    "node with  that  value does  not   exist"
    }
}
else  if (value>    currentnode.value){
    if(currentnode.right){
        return    this.searchNODEbyVALUE(value  ,   currentnode.right)
    }else   {
    return    "node   with  that   value  does  not  exist "    
    }
    
}





}


}


let  tree  =  new   TREE()
tree.insert(500)
tree.insert(98)
tree.insert(8)
tree.insert(1198)
tree.insert(2000)
tree.insert(1540)
console.log(tree.searchNODEbyVALUE(20001 ,   tree.returnROOT() ));



