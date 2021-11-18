//TODO: Напишите функцию счётчик вызовов, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, кол-во вызовов
export const counter = (fnName, fn) => {
  let count = 0

  function сounterFn(func) {
    return function () {
      count++;
      console.log(`Функция ${fnName} была вызвана ${count} раз`);
      return func.apply(this, arguments);
    }
  }
  return сounterFn(fn);

};

//TODO: Напишите функцию логгер, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, её параметры результат и название
export const logger = (fnName, fn) => {

  function makeLogging(f, fnName) {
    function wrapper() {
        console.log('Аргументы: ' + [].slice.call(arguments).join() +
                    '; результат: ' +  f.apply(this, arguments)+
                    '; имя функции: '+ fnName );
        //console.log('Результат: ' + f.apply(this, arguments));
        return f.apply(this, arguments);
      };
    return wrapper;
  };

  return makeLogging(fn, fnName);
};

//TODO: Напишите функцию каррирования, должна принимать функцию, а возвращать функцию
// Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c)
// Должна работать для любого кол-ва аргументов
export const curry = (func) => {
   const curried = function(fn) {
    const param = [].slice.call(arguments,1);
      //const param = Array.prototype.slice.call(arguments, 1);
    return function() {
      return fn.apply(this, param.concat([].slice.call(arguments,0)));
     // return fn.apply(this, param.concat(Array.prototype.slice.call(arguments, 0)));
    };
  };
  return curried(func);

  // // Должно работать, но не хочет с передаваемой функцией
  // // С фунцией testFn  работает
  // // решение выше подсмотрел, возвращает NaN, но нет ошибки
  // function cur(func) {
  //   return function curried(...args) {
  //     if (args.length >= func.length) {
  //       return func.apply(this, args);
  //     }
  //     else {
  //       return function(...args2) {
  //         return curried.apply(this, args.concat(args2));
  //       };
  //     };
  //   };
  // };

  // function testFn (a, b, c) {
  //   return a+b+c;
  // }

  // const funcCurrent = cur(testFn);
  // console.log("funcCurrent(1,3,4)  ", funcCurrent(1, 3, 4));
  // console.log("funcCurrent(1,3)(4) ", funcCurrent(1, 3)(4));
  // console.log("funcCurrent(1)(3,4) ", funcCurrent(1)(3, 4));
  // console.log("funcCurrent(1)(3)(4)", funcCurrent(1)(3)(4));

};
