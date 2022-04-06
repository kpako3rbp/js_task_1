let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};
let i = 0;

while (i < 2) {
	i++;
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''), 
		b = prompt("Во сколько обойдется?", ''); 
	
	if ( (typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b)) !=null
		&& a != '' && b != '' && a.length < 50) {
		console.log("done");
		appData.expenses[a] = b;
	} else {
		console.log("Bullshit");
		i = 0;
	}	
};

appData.moneyPerDay = appData.budget / 30; // Создадим в объекте appData новое свойство и запишем в него бюджет за 1 день

alert("Ежедневный бюджет: " + appData.moneyPerDay); // Добавляем к тексту рассчитанное значение3

if (appData.moneyPerDay < 100) { // Далее будем выводить в консоль сообщения в зависимости от того, какой уровень дохода получится за день.
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay > 2000) {
	console.log("Средний уровень достатка");
} else if (appDAta.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка");
}











// let money = +prompt("Ваш бюджет на месяц?", ''), // Поставим плюс, чтобы получать только число, а не строку
// 	time = prompt('Введите дату в формате YYYY-MM-DD', '');

// let appData = {
// 	budget: money,
// 	expenses: {},
// 	optionalExpenses: {},
// 	income: [],
// 	timeData: time,
// 	savings: false
// };

// for (let i = 0; i < 2; i++) {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''), 
// 		b = prompt("Во сколько обойдется?", ''); 
	
// 	if ( (typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b)) !=null
// 		&& a != '' && b != '' && a.length < 50) { // Проверяем, что входящие данные должны являться строкой. Так же проверяем, что ответ еще И не будет null, то есть он обязательно должен быть (! значит отрицание). То есть если пользователь отменит действие, то это условие уже не выполнится. То же делаем и для переменной b. Так же нам необходимо запретить пользователю оставлять пустую строку (''). Так же ограничиваем пользователю количество символов в переменной a на менее 50.
// 		console.log("done"); // Выведем в консоль сообщение, когда все ок
// 		appData.expenses[a] = b;
// 	} else {
// 		console.log("Bullshit");
// 		i = 0;
// 	}	
// };

// appData.moneyPerDay = appData.budget / 30; // Создадим в объекте appData новое свойство и запишем в него бюджет за 1 день

// alert("Ежедневный бюджет: " + appData.moneyPerDay); // Добавляем к тексту рассчитанное значение3

// if (appData.moneyPerDay < 100) { // Далее будем выводить в консоль сообщения в зависимости от того, какой уровень дохода получится за день.
// 	console.log("Минимальный уровень достатка");
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay > 2000) {
// 	console.log("Средний уровень достатка");
// } else if (appDAta.moneyPerDay > 2000) {
// 	console.log("Высокий уровень достатка");
// } else {
// 	console.log("Произошла ошибка");
// }














// let money = prompt("Ваш бюджет за месяц?"),
//     time = prompt("Введите дату в формате YYYY-MM-DD");

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: false
// };

// let a1 = prompt("Введите обязательную статью расходов в этом месяце"),
//     a2 = prompt("Во сколько обойдется?"),
//     a3 = prompt("Введите обязательную статью расходов в этом месяце"),
//     a4 = prompt("Во сколько обойдется?");10

// alert(money / 30);



// if (num < 49) {
//     console.log('Неверно')
// } else if (num > 100) {
//     console.log('Много')
// } else {
//     console.log('Верно')
// };

// (num == 50) ? console.log('Верно?') : console.log('Неверно');

// switch (num) {
//     case num < 49:
//         console.log('Неверно');
//         break;
//     case num > 100:
//         console.log('Много');
//         break;
//     case num > 80:
//         console.log('Все еще много');
//         break;
//     case 50:
//         console.log('Верно!');
//         break;
//     default:
//         console.log("Что-то пошло не так!");
//         break;        
// }



// while (num < 55) {
//     console.log(num);
//     num++; // Прибавляем единицу каждый раз
// }
// let num = 50;

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         continue // Мы продолжим цикл дальше, но без этого значения
//     }
//     console.log(i) // Указываем что мы должны сделать на каждое повторение цикла
// }

