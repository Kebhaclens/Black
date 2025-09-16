//for in
let obj={
    name:"kebha",
    age:22
}

for(let key in obj){

    console.log(key);
    
}
// for of 
let arr=["one","two"]
let str="kebha"
for(let a of str){
    console.log(a);
    
}
// for each
//only for array
arr.forEach((val, ind, arr)=> {
    console.log(val,ind,arr)

})
    
    
