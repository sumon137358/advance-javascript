const numbers =[2,3,4,5,6];
for (let x = 0; x < numbers.length; x++) {
    const element = numbers[x];
    if(element <= 3){
        continue;
    }
    console.log(element);
}