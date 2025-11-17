// class Principal{
//     principalInstance=null
//     _constructor(name)
//     {
//         this.name=name;
//     }
//    static getPrincipal()
//     {
//         if(!principalInstane){
//         let principal=new Principal("Rama rao")
//         principalInstance=principal
//         }
//         return principalInstance;
//     }
//     resticateStudent(name)
//     {

//     }
//     suspend(name)
//     {

//     }
//     removeSuspension(name)
//     {

//     }
//     notify()
//     {

//     }
// }
class Principal{
    
    principalInstance=new Map()
    _constructor(school)
    {
        this.school=this.school;
        
    }
   static getPrincipal(school)
    {
        if(!principalInstane.get(school)){
        let principal=new Principal(school)
        principalInstance.set(school,principal)
        }
        return principalInstance.get(school);
    }
    resticateStudent(name)
    {

    }
    suspend(name)
    {

    }
    removeSuspension(name)
    {

    }
    notify()
    {

    }
}