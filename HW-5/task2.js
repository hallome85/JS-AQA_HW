// 1. Написать скрипт, переводящий количество байт в нужные единицы
//   bytes => kB Mb Gb Tb
//   16 565 846 bytes (16,6 Mb)

//   1 Kb = 1024 byte
//   1 Mb = 1024 Kb
//   1 Gb = 1024 Mb
//   1 Tb = 1024 Gb

//   // Пример: ~ 1000
//   4 548 = 4,5 Kb (Real 4,4 Kb)
//   454 548 = 454,5 Kb
//   1 454 548 = 1,5 Mb

//   Результат должен быть округлен до 1 знака после запятой методом .toFixed(), про который надо почитать самим ;)

const ourNumber = 16565846;
let result;
if (ourNumber <= 1024) {
                    result = ourNumber;
             console.log(result, 'bytes');
                } else if (ourNumber >= 1024 && ourNumber < 1024 * 10**3) {
            result = ourNumber / 10**3;
             console.log(result.toFixed(1), 'Kb');
                 } else if (ourNumber >= 1024 * 10**3 && ourNumber < 1024 * 10**6) {
             result = ourNumber / 10**6;
             console.log(result.toFixed(1), 'Mb');
                 } else if (ourNumber >= 1024 * 10**6 && ourNumber < 1024 * 10**9) {
             result = ourNumber / 10**9;
             console.log(result.toFixed(1), 'Gb');
                 } else if (ourNumber >= 1024 * 10**9) {
             result = ourNumber /10**12;
             console.log(result/toFixed(1), 'Tb');
        } 



        // 2. Сделать из "*" в консоли равнобедренный треугольник и ромб

//Треугольник
const numberOfLines = 10;
let numberOfStars;
let numberOfEmpties;
for (let i = 1; i <= numberOfLines; i++) {        // i считает количество повторов, т.е. строк
    numberOfStars = "*".repeat(i * 2 - 1);    // количество звезд в строке будет 1, 3, 5..., можно связать с i по данной формуле. i делает очередной шаг ПОСЛЕ того, как отработает фомула 
    numberOfEmpties = " ".repeat(numberOfLines - i);     // с каждым шагом треугольник на 1 звезду приближается к оси, => количество пробелов будет уменьшаться, от кол-ва строк отнимаем шаг
    console.log(numberOfEmpties + numberOfStars);      //для тех, кто в танке-порядок сложения ВАЖЕН! сначала пишем пробелы,иначе получится половина ёлки 
}

//Ромб
const numberOfLines = 10;                        //ромб это 2 треугольника, поэтому первую часть кода копируем
let numberOfStars;
let numberOfEmpties;
for (let i = 1; i <= numberOfLines; i++) {       
    numberOfStars = "*".repeat(i * 2 - 1);     
    numberOfEmpties = " ".repeat(numberOfLines - i);
    console.log(numberOfEmpties + numberOfStars);      
}
for (let i = numberOfLines - 1; i > 0; i--) {          // второй треугольник начинаем в обратную сторону, но не с 10, а с 9, иначе в середине ромба будет две длинных строки
  let numberOfEmpties = " ".repeat(numberOfLines - i);          // увеличевается количество пробелов, потому что i уменьшается
  let numberOfStars = "*".repeat(i * 2 - 1);      // уменьшается количество звёзд, потому что см.выше
console.log(numberOfEmpties + numberOfStars);
}git addEventListener.



// 3.  Вам нужно вывести в консоль числа от 1 до 100.
//     Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
//     Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
//     Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
//     Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.

let ourNumber = 1;
while (ourNumber > 0 && ourNumber <= 100){{            //while сначала проверяет входные данные на соответствие и выводит результат, а потом делает следующий шаг. Поэтому формула шага в конце
    if (ourNumber % 3 === 0) {
        console.log("Число "+ ourNumber + " делится без остатка на 3");}
else if (ourNumber % 5 === 0) {
    console.log("Число "+ ourNumber + " делится без остатка на 5");}
    else if (ourNumber % 5 === 0 && ourNumber % 3 ===0) {
        console.log("Число "+ ourNumber + " делится без остатка на 5 и на 3");}
        else  {
            console.log("Просто число");}}
        ourNumber++;
}


// 4. Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре, 
//   у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer


