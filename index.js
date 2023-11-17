//***********VAR***********/
//cuando se declara var dentro de una funcion se interpreta como variable local y solo se puede usar en esa funcion,
//cuando se declara fuera de una funcion se interpreta como global y se puede usar en cualquier lado.
var tester = "hey, hola";
    
function nuevaFuncion() {
    var hola = "hola";
}
//si le pasamos como parametro hola nos da error: hola is not defined
console.log(tester);

//hoisting de var
console.log (saludar);
var saludar = "dice hola"
//se interpreta asi:
//var saludar;
//console.log(saludar); // saludar is undefined
//saludar = "dice hola"

//***********LET***********/
//let tiene un ámbito de bloque ("let puede modificarse pero no volver a declararse")
let letsaludar = "dice Hola";
letsaludar = "dice Hola tambien";
console.log(letsaludar)
//esto devolverá un error:
// let letsaludar = "dice Hola";
// let letsaludar = "dice Hola tambien"; // error: Identifier 'letsaludar' has already been declared

//Sin embargo, si la misma variable se define en diferentes ámbitos, no habrá ningún error:
let saludar2 = "dice Hola";
    if (true) {
        let saludar2 = "dice Hola tambien";
        console.log(saludar2); // "dice Hola tambien"
    }
    console.log(saludar2); // "dice Hola"

//***********CONST***********/
//Las declaraciones const tienen un ámbito de bloque
//const debe ser inicializada en el momento de la declaración.
//const no puede modificarse ni volver a declararse
//no se puede hacer esto:
const saludar3 = "dice Hola const";
//saludar = "dice Hola tambien";// error: Assignment to constant variable. 
console.log(saludar3);
//ni esto:
//const saludar = "dice Hola";
//const saludar = "dice Hola tambien";// error: Identifier 'saludar' has already been declared

//cuando se definen objetos con const es diferente
//las valores de las propiedades definidas de los objetos si pueden ser modificadas
const saludarObj = {
    mensaje: "dice Hola",
    tiempos: 4
}
console.log(saludarObj);
//las propiedades del objeto no se pueden cambiar "error:  Assignment to constant variable".


//inicie a usar git

//***********FUNCIONES***********/
function square(number) {
    return number * number;
}

console.log(square(2));


