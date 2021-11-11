<!DOCTYPE html>
<script>
  "use strict";

  //Напишите функцию sumInput(), которая:
  //Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
  //Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
  //Подсчитывает и возвращает сумму элементов массива.
  //P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

  function sumInput() {

    let arrNum = [];
    while (true) {
      let val = prompt("Введите число", 0);
      if (val === "" || val === null || !isFinite(val)) break;
      arrNum.push(+val);
    }

    let sum = 0;
    for (let num of arrNum) {
      sum += num;
    }
    return sum;
  }

  alert(sumInput());
</script>