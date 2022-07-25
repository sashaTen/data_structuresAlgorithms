const  elt   =  document.getElementById('id')

let   list1=  [1,2,8,10]
let   list2=   [3,4,9]


/*   

//   every  time  you  create   new   instance  of the 
you   invoke the   constructor    which   is  bascially   just  the   function
"this"   keyword   reders  to  the object 
constructor has to   contain   "this" 

also   you  can    pass the   parameters  into  the   constructor
   User.prototype.age = 25;   ///    using the prototype  
   you can   change  the  properties  of all    instances 

*/



class    Node   {//     every   instance of this class   will  have  two  properties 
    constructor(data){              //       "data"   and the  "next"
        this.data = data   //    data  object  key  will be  equal  to   what  you  pass as the  data
        this.next =  null  //
    }
}


class   LinkedList {
    constructor() {
        this.head  = null;
        this.tail =    null;
        this.size  =    0    
        
    }



    add(element){
    let    node =    new Node(element)
    let   current
     if(this.head ===null){
        this.head =   node
     } else  {   current  =    this.head
    
        while(current.next){
            current =   current.next
         }
    
    
         current.next =  node
    }
    



     this.size++;
    }
    
}




let   node1 =   new   Node(50)  //    we  created the   node  with    data  : 50   and   next  :   null

let     list  = new LinkedList()

list.add(node1)
list.add(85)
list.add(1000000000000)
list.add("hello     lonked   ist q")
console.log(list);


/*   
   if   you  dont  understand   something   try  to   viszualze  it  

or try  to   draw it   on  the  paper



   */








