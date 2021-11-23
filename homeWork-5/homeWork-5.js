import { compareText } from "./data";

// Написать 2 функции,
// первая обработает ответ от compareText (положительный и отрицательный)
// TODO: первая функция использует then и catch
const getData = (str) => {
  compareText(str)
    .then((resolve) => {
      console.log(resolve);
    })
    .catch((err) => {
      console.log(err);
    });
};

// TODO: вторая использует try и catch
// TODO: Если ответ положительный вывести в консоль: "Success: ..."
// TODO: Если ответ отрицательный вывести в консоль: "Error: ..." (тескт ошибки)
const processingData = async (str) => {
  getData(str);

  try {
    await compareText (str)
    .then(resolve => console.log("Success: ..."));
  }
  catch(err) {
    console.log("Error: ..."+err);
  }
};

processingData("короткий текст");
processingData("длинный тексттттттттттт");

// Используя конструкции then catch
// к положительному ответу добавьте " :)"
// к ответу с ошибкой добавьте " :("
// Если длина ответа меньше 20 символов, то нужно добавить "(" или ")" в зависимости от ответа,
// скобочки нужно добавлять пока длинна не станет равна 20
// TODO: на каждое действи должна быть отдельная конструкция then или catch
// Например первый then для добавления " :)", второй для подсчёта количества символов и добавления недостающих
const getResponse = async (str) => {
  compareText(str)
  .then(result => result + " :)")
  .catch(error => {
    return (error +" :(");
  })
  .then(result => console.log(result.padEnd(20/*30*/, result[result.length-1])))
};

getResponse("короткий текст");
getResponse("Длинный текстттт");
getResponse("");


// Написать функцию, которая принимает url и выводит в консоль ответ
// TODO: обработать ошибки и вывести в консоль "Ошибка"
// TODO: ошибка если тстатус меньше 200 и больше 299
const getDataFromAPI  = async (url) => {
  try {
    let response = await fetch(url);
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
        console.log(await response.json());
      } else {
        throw new Error("Ошибка HTTP: " + response.status);
      }
    }
  catch (error) {
    console.log('Ошибка:', error);
  }
};

getDataFromAPI("https://randomuser.me/api");
getDataFromAPI("https://randomuser123.me/api");
getDataFromAPI("https://randomuser.me/api123");
