/*Task3**. Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются*/
const n='1';
const nn=n+n;
const nnn=n+n+n;
const result=parseInt(n)+parseInt(nn)+parseInt(nnn);
console.log(result);
