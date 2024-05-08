// Check leap Year using conditional statements and logical operators.
function isLeap(year){
    if(year < 0 ){
        console.log("Invalid Year! Year cannot be negative")
    }
    else if ((( year % 4 == 0) && (year %100 != 0)) ||(year % 400 == 0)){
        console.log("This is a leap year")
    }
    else{
        console.log("Not a leap year")
    }
}
var year = prompt("Enter Year:");
year = Number.parseInt(year)
isLeap(year);