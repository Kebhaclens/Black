//DAY 2
//function
//syntax
//funtion name(){}

//funtion statement declaration --parameter & argumment
function a (hi){
    console.log(hi);
    
}
a("hello");

//funtion expression or anonymous function
let box= function b (js){
    console.log(js);
    
}
box("world");

//    
setTimeout (function() {
  console.log("Anonymous function executed");
} );

//immediate invoke funtion expression
(function(){
    console.log("iife");
    
})();
//Arrow function
//syntax
//()=>{}
    let aro= (age)=>{console.log(age)}
        aro("arrow function");

