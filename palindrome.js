

let string = "racecar";

let reverse = "";
for(let i=string.length-1; i>=1; i--) {//change i>=1 to i>=0;
reverse += string[i];
}

if(string===reverse) {
    console.log("palindrome");
}
else{
    console.log("Not palindrome");
}