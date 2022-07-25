class    Node  {
    constructor(element) {
        this.data   =  element
        this.next  =    null
        
    }
    
}


class    LinkedList{
   constructor(){
    this.head =    {
        next  :   null
    }
    this.size  =  0;
    this.tail   =   null;
   }
   add(element){
    let  node   =  new   Node(element)
    let    current  
    if(this.head ==0){
        this.head =   node
    }else   {
        
        current =   this.head
        while(current.next){
            current=   current.next
        }
         current.next =    node
    }

    this.size++;
   }


     insert(element ,   index){
        if(index   -  this.size==1 ){
            this.add(element)
        }
        else  if (index ==0){
            let  node   =   new  Node(element)
            node.next=     this.head.next
            this.head.next =   node
            this.size++
        }


        else   {
            this.size++;
            let  node =  new   Node(element)
            let  current  =  this.head
            let  count   = 0
            while(count <   index){
                count++
                current = current.next
            }
            node.next = current.next
            current.next = node
        }
         
    
     }




}




let list   =   new  LinkedList()
list.add(100)
list.add(100)
list.add(100)
list.add(100)
list.insert(999,3)

console.log(list);