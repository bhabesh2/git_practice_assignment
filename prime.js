

let a = 11;

let b = 1;
let count = 0;
let ans = "No";
while(b<=a){
    if(a%b===0){
        count++;
    }
    b++;
}
if(count===1){//replace one with two;
    ans = "it is a prime";
}
console.log(ans);