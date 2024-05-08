prompt("Enter name of first person")
prompt("Enter name of second person")
var ranNum = Math.random();
ranNum *= 99;
ranNum = Math.floor(ranNum) + 1;
if(ranNum === 100){
    console.log(`Your love score is ${ranNum}%. You are perfect match for each other`);
}
else if ( ranNum > 60 && ranNum<= 80 ){
    console.log(`Your love score is ${ranNum}%, You are going good in your relation`);
}
else{
    console.log(`Your love score is ${ranNum}%`);
}
