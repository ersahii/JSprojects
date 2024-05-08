var guestList = ["amir", " junaid" , "umer" , "faizan", "rayees" , "zubair"];
function checkGuest(guest){
        if(guestList.includes(guest)){
            console.log("Welcome", guest)
        }
        else{
            console.log("Sorry you were not invited");
        }
}
let name = prompt("Enter your name:");
checkGuest(name);