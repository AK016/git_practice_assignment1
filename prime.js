let n=13;
let c=0;
for(j=2;j<n;j++){
    if(n%j==0){
        c++
    }
}
if(c==0){
    console.log("It is a Prime");
}
else{
    console.log("It is not a Prime");
}