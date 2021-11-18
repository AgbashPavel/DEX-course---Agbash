// Создать функцию обёртку
// которая в начало каждой строки будет добавлять слово "Hello"

//  const funcChild = funcContainer("Hello ");
//  function funcContainer (arg) {
//     return function(param) {
//       return arg + param;
//     };
//   }

//  console.log(funcChild("word"));
//  console.log(funcChild("Ben"));

// Создать функцию, которая будет выполняться как func(1)(2)(3)
// function funcСurrying (arg1) {
//   return function (arg2) {
//     return function (arg3) {
//       return arg1 +arg2+arg3;
//     };
//   };
// };

// console.log("funcСurrying(1)(3)(4) ", funcСurrying(1)(3)(4));

// Создать функцию, которая будет выполняться
// при вызове func(1,2,3), func(1,2)(3),func(1)(2,3), func(1)(2)(3)
// и возвращать их сумму

// function funcСurryingArgs(...rest) {
//   if (rest.length >= 3) {
//     return rest.reduce((sum, s) => sum + s, 0);
//   } else {
//     return (...rest2) => funcСurryingArgs(...rest, ...rest2);
//   }
// }

// console.log('funcСurryingArgs(1,3,4) ', funcСurryingArgs(1, 3, 4));
// console.log('funcСurryingArgs(1,3)(4) ', funcСurryingArgs(1, 3)(4));
// console.log('funcСurryingArgs(1)(3,4) ', funcСurryingArgs(1)(3, 4));
// console.log('funcСurryingArgs(1)(3)(4) ', funcСurryingArgs(1)(3)(4));

// Создать функцию обёртку
// которая будет принимать количество аргументов
// и считать сумму передаваемых чисел , после того как кол-во аргументов
// будет равнятся передаваемому значению

const funcCurrent = funcСurryingCount(3);

 function funcСurryingCount(n) {
   return function fnSum (...args) {
     if (args.length === n) {
       return args.reduce((sum, s) => sum + s, 0);
     }
     else {
       return function(...args2) {
         return fnSum.apply(this, args.concat(args2));
       };
     };
   };
 };

console.log("funcCurrent(1,3,4) ", funcCurrent(1, 3, 4));
console.log("funcCurrent(1,3)(4) ", funcCurrent(1, 3)(4));
console.log("funcCurrent(1)(3,4) ", funcCurrent(1)(3, 4));
console.log("funcCurrent(1)(3)(4) ", funcCurrent(1)(3)(4));

// const func1 = () => {
//   console.log(func2());
// };

// const func2 = () => {
//   console.trace();
//   return "func2!!!!!!!";
// };

// func1();
