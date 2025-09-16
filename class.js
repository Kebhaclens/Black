class Info{
    name="shalini"
    age=7
    nation="india"    //properties
    details(){ //methods
        console.log("my name is:", this.name, "my age is", this.age,"my nationality is", this.nation); 

    }
    
}
let a = new Info
a.details()          //objects
console.log(a.name);

class student{
    constructor(name, cls, rollno){
       this.name=name
       this.cls=cls
       this.rollno=rollno
    }

    detail(){
        console.log("student name is",this.name);
        console.log("students cls is",this.cls);
        console.log("roll no is",this.rollno);
        
        
        
    }
}
const stu = new student("shalini","bcom","223")
stu.detail()