let num=13;
let count=0;
for(i=2;i<num;i++){
    if(num%i==0){
        count++
    }
}
if(count==0){
    console.log("Prime");
}
else{
    console.log("Not a Prime");
}