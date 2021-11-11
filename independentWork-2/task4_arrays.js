<!DOCTYPE html>
<script>
  "use strict";
  //Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
  // То есть дефисы удаляются, а все слова после них получают заглавную букву.
  function camelize(str) {
    let outStr;
    let arr = [];
    arr = str.split ('-');
    for (let i = 0; i < arr.length; i++) {
      if (i !=0){
        arr [i] = arr [i][0].toUpperCase()+arr [i].slice(1);
      }
    }
    outStr = arr.join('');
  return outStr;
}

  alert(camelize("background-color"));
  alert(camelize("list-style-image"));
  alert(camelize("-webkit-transition"));
</script>
