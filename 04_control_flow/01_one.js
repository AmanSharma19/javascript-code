// if condiational statement
// if(true) console.log("AMan"), console.log("AMAN"); UNREADABLE CODE BUT IT WORKS FINE
// real time use case

const userLoggedIn =  true;
const debitCard = true;

if(userLoggedIn && debitCard){
    console.log("Can procced with the purchase")
}else{
    console.log("Cannot procced with the purchase")
}

const loggedInfromEmail = true
const loggedInfromPhone = true

if(loggedInfromEmail || loggedInfromPhone){
    console.log("loggedin successfully");
}else{
    console.log("login unsuccessfully");
}


// Switch case
switch (true) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March") // to duplicate the selected text press shift + alt + down arrow
        break;

    default:
        break;
}
