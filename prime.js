let number=13;
let counter=0;
for(k=2;k<number;k++){
    if(number%k==0){
        counter++;
    }
}
if(counter==0){
    console.log("Prime Number");
}
else{
    console.log("Not a Prime Number");
}