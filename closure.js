function main() {
    let count =0;
    return function increment(){
        count++;
        return count;
    }
}
const result =main();
const result2 =main();
console.log(result());
console.log(result());
console.log(result2());
console.log(result2());
console.log(result());
