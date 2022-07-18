//Coerción implícita

4 + "7"; //"47"     El signo + da a entender que es una concatenación, una operación con un string.
4 * "7"; //28       El signo * da a entender que es una multiplicación, una operación con un número.
2 + true; //3       
false - 3; //-3

//Coerción explícita

var a = 5;          //Numero
var b = a + "";     //String

console.log(b);

var c = String(a);  //Convirtiendo numero a string

var d = Number(c);  //Convirtiendo de string a numero