const students = [
    {id:1, name : "sojib"},
    {id:2, name : "sakib"},
    {id:3, name : "sumon"},
    {id:4, name : "sipon"},
]
// const result =students.map(function(x){
//     return x.id;
// })

// const result =students.map(x => x.name);
// console.log(result);

// filter ....
const result =students.filter(x => x.id>2);
console.log(result);






