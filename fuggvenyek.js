// let add = function add(a, b) {
//     return a + b;
// }
// console.log(add(3, 2));

let add = (a, b) => a + b;
console.log(add(5, 3));

(function() { 
    // Prompt the user for their name
    let nev = prompt("Add meg a nevedet: "), 
    // Declare a function to greet the user
    udv = function() 
    { 
        // Return a greeting with the user's name
        return "Szia! " + nev + " vagyok!"; 
    }
console.log(udv()); }());
console.log(nev)
