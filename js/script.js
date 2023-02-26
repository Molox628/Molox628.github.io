"use strict"

let summ = 0;
let days = 0;

const titles = [
    "Тип сайта? 1 - Лендинг 2 - Интернет магазин", "Тип дизайна? 1 - Шаблон 2 - Уникальный", "Адаптивность 1 - Нет 2 - есть"
];

const prices = [[100, 1000], [100, 1000], [0, 1000]];
const dayss = [[1, 2], [1, 2], [1, 2]];

let objects = [];

function position(value, index) {
    this.prices = prices[index][--value];
    this.days = dayss[index][value];
}

function enter(title){
   let res = prompt(title);
   let check = prices[res];
   if(!check){
       enter(title);
   }
   return res;
}

titles.forEach(function (title, index) {
    objects[index] = new position(enter(title), index);
});

objects.forEach(function (name) {
    summ += name.prices;
    days += name.days;
});

alert('Сумма к оплате ' + summ + ' рубль(-ей). Заказ будет готов через ' + days + ' день(-ей).');
