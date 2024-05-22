/*Task2*. Решить квадратные уравнения. Переменные называть по правилам.
Вывести в консоль ответы в виде "Ответ к уравнению 1: <корень>", "Ответ к уравнению 2: <корень> и <корень>"
1.  x2 - 6x + 9 = 0. - один корень
2.  x2 - 4x - 5 = 0. - два корня
*/

//Уравнение с одним корнем:
const aFirstTerm1=1;
const bSecondTerm1=-6;
const cFreeTerm1=9;
const result1=-(bSecondTerm1/2*aFirstTerm1);
//console.log('Ответ к уравнению 1:', result);

//Уравнение с двумя корнями:
const aFirstTerm2=1;
const bSecondTerm2=-4;
const cFreeTerm2=-5;
const discriminant =bSecondTerm2**2-4*aFirstTerm2*cFreeTerm2;
const result2_1=((-bSecondTerm2+Math.sqrt(discriminant))/2*aFirstTerm2);
const result2_2=((-bSecondTerm2-Math.sqrt(discriminant))/2*aFirstTerm2);
//console.log('Ответ к уравнению 2:', result2_1,'и', result2_2);