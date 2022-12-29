// 1. Напишите функцию min(a, b), которая возвращает меньшее из чисел a и b. Например:
// min(2, 5) // 2; min(3, -1) // -1; min(1, 1) // 1.

function min(a, b) {
    if (a >= b) {
        return b;
    } else {
        return a;
    }
}

console.log( min(2, 5) );
console.log( min(3, -1) );
console.log( min(1, 1) );

console.log('');
console.log('=========');
console.log('');

// 2. Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// ucFirst('вася') // Вася;

function ucFirst(str) {
    let upper = str[0].toUpperCase();
    return upper + str.slice(1);
}

console.log( ucFirst('вася') );
console.log( ucFirst('мыша') );
console.log( ucFirst('свома') );

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

console.log( truncate('Вот, что мне хотелось бы сказать на эту тему:', 20) );
console.log( truncate('Всем привет!', 20) );
console.log( truncate('Люблю мышеньку!', 20) );
console.log( truncate('Девятнадцать символов, а лишнее отрезать!', 20) );

console.log('');
console.log('=========');
console.log('');

// 4. Напишите функцию 