// 1. Напишите функцию min(a, b), которая возвращает меньшее из чисел a и b. Например:
// min(2, 5) // 2; min(3, -1) // -1; min(1, 1) // 1.

function min(a, b) {
    if (a >= b) {
        return b;
    } else {
        return a;
    }
}

// console.log( min(2, 5) );
// console.log( min(3, -1) );
// console.log( min(1, 1) );

console.log('');
console.log('=========');
console.log('');

// 2. Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// ucFirst('вася') // Вася;

function ucFirst(str) {
    let upper = str[0].toUpperCase();
    return upper + str.slice(1);
}

// console.log( ucFirst('вася') );
// console.log( ucFirst('мыша') );
// console.log( ucFirst('свома') );

console.log('');
console.log('=========');
console.log('');

// 3. Напишите функцию truncate(str, maxLength), которая проверяет длину строки str и, если она превосходит maxLength,
// заменяет конец str на "...", так, чтобы ее длина стала равной maxLength. 
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усеченная строка:
// truncate('Вот, что мне хотелось бы сказать на эту тему:', 20) => 'Вот, что мне хотело...'
// truncate('Всем привет!', 20) => 'Всем привет!'

function truncate(str, maxLength) {
    if (str.length < maxLength) {
        return str;
    } else {
        return str.slice(0, 19) + '...';
    }
}

// console.log( truncate('Вот, что мне хотелось бы сказать на эту тему:', 20) );
// console.log( truncate('Всем привет!', 20) );
// console.log( truncate('Люблю мышеньку!', 20) );
// console.log( truncate('Девятнадцать символов, а лишнее отрезать!', 20) );

console.log('');
console.log('=========');
console.log('');

// 4. Напишите функцию camelize(str), которая преобразует строки вида 'my-short-string' в 'myShortString'.
// То есть дефисы удаляются, а все слова после них получают заглавную букву. Например:
// camelize('background-color') => backgroundColor; camelize('list-style-image') => listStyleImage; camelize('-webkit-transition') => WebkitTransition;
// Вам пригодятся методы строк .split(), .toUpperCase() и .slice();

function camelize(str) {
    let array = str.split('');
    array.forEach(function(el, i, arr) {
        if (arr[i] == '-') {
            arr[i + 1] = arr[i+1].toUpperCase();
        }
    });
    return array.join('').split('-').join('');
}

// console.log( camelize('background-Color') );
// console.log( camelize('list-style-image') );
// console.log( camelize('-webkit-transition') );

console.log('');
console.log('=========');
console.log('');

// MOUSE

function camelize2(str) {
    let array = str.split('-');
    array = array.map(function(el, i) {
        if (i >= 1) {
            let upper = el[0].toUpperCase();
            return upper + el.slice(1);
        } else {
            return el
        }
    });
    return array.join('')
}

console.log( camelize2('background-color') );
console.log( camelize2('list-style-image') );
console.log( camelize2('-webkit-transition') );

console.log('');
console.log('=========');
console.log('');

// 5. Код ниже получает из массива строк новый массив, содержащий их длины:
// let arr = ['Не', 'макбук', 'делает', 'из', 'тебя', 'мастера']
// let arrLength = [];
// for (let i = 0; i < arr.length; i++) {
//      arrLength[i] = arr[i].length;
//}
// console.log(arrLength); // [2, 6, 6, 2, 4, 7]
// Перепишите код используя метод .map()

let arr = ['Не', 'макбук', 'делает', 'из', 'тебя', 'мастера']
let arrLength = arr.map(function(el, i, arr) {
    return arr[i].length;
});

console.log(arrLength);


console.log('');
console.log('Исправление от мыша');
console.log('');

let arr1 = ['Не', 'макбук', 'делает', 'из', 'тебя', 'мастера']
let arrLength1 = arr.map(function(el) {
    return el.length;
});

console.log(arrLength);