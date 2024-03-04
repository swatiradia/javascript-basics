// if-else loop

console.log("\n IF- ELSE LOOP \n")
const flag = true

if(!flag){
    console.log("condition satisfied ")
}
else{
    console.log("condition not satisfied ")
}

//while loop
console.log("\n WHILE LOOP\n\n")

let i =0;
while(i <= 10){

    console.log(i)
    i++;
}

// do-while loop, runs atlest once even if the condition doesn't hold for the first time, runs only once if the condition doesnt hold good.

console.log("\n DO-WHILE LOOP \n\n")

let j =0;
do{
    console.log(j)
    j++;
}while(j>5)

// FOR LOOP, run when we know how many time we want to run the loop. while only when a particular statement become true

console.log("\n FOR LOOP \n\n")

for(let k=0; k<10; k++){
    console.log(k)
}

console.log("***********************")

for(let k=1; k<10; k++){

    if(k%2 ==0 || k%5 ==0){
    console.log(k)
    }
}