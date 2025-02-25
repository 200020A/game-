function seasonsGame() {
   let season = Number(prompt("Введите номер любого месяца года"));

   if (season > 0 && season <= 2 || season === 12) {
      alert("Это зима!");
   } else if (season >= 3 && season <= 5) {
      alert("Это весна!");
   } else if (season >= 6 && season <= 8) {
      alert("Это лето!");
   } else if (season >= 9 && season <= 11) {
      alert("Это осень!");
   } else {
      alert('Дурачок, месяц не верный');
   }
}




function fruits() {
   let arrFruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
   alert(arrFruits = arrFruits.sort(() => Math.random() - 0.5));

   let firstElement = prompt('Чему равнялся первый элемент массива?');
   let lastElement = prompt('Чему равнялся последний элемент массива?');
   if (lastElement && firstElement) {
      if (firstElement.toLowerCase() === arrFruits[0].toLowerCase() && lastElement.toLowerCase() === arrFruits[arrFruits.length - 1].toLowerCase()) {
         alert("Поздравляю, вы все угадали!")
      } else if (firstElement.toLowerCase() === arrFruits[0].toLowerCase() || lastElement.toLowerCase() === arrFruits[arrFruits.length - 1].toLowerCase()) {
         alert("Вы были близки к победе!")
      } else {
         alert("Вы ответили неверно!")
      }
   } else {
      console.log('Пустая строка')
   }
}

