export const sum = (f, s) => {
  //TODO: Должны складываться только строки и числа
  // Постарайтесь сложить как можно больше пар и обойти NaN случаи
  function getNum(x) {
    let y;
    if (typeof x === "number") {
      y = x;
    } 
    else if ( typeof x === "string" &&  !isNaN(parseFloat(x.replace(",", ".")))) {
      y = parseFloat(x.replace(",", "."));
    } 
    else {
      y = 0;
    }
    return y;
  }

  return getNum(f) + getNum(s);
};

export const showPrice = (price, discount) => {
  const discountedPrice = price - (price * discount) / 100;
  //TODO: Привести цену к виду: 10.00 р.
  // округлять до копеек в сторону магазина
  let sum;
  sum = Math.round(discountedPrice * 100) / 100;

  return ` ${sum} р. `;
};

export const findSuccess = (bankResponse) => {
  //TODO: Проверьте что в строке есть 'Success' без учёта регистра
  let answer;
  if (bankResponse.toUpperCase().includes("Success".toUpperCase())) {
    answer = "Yes";
  } else answer = "No";

  return answer;
};

export const dateToString = (date) => {
  //TODO: Преобразовать дату к Вчера/Сегодня/Завтра или год:месяц:день
  let dat;
  let dateStr;
  let tod;
  let dayDiff;

  dat = new Date(date);
  tod = new Date();

  dat.setHours(0);
  dat.setMinutes(0, 0, 0);
  tod.setHours(0);
  tod.setMinutes(0, 0, 0);

  dayDiff = (tod.getTime() - dat.getTime()) / (24 * 60 * 60 * 1000);

  switch (dayDiff) {
    case 0:
      dateStr = "Сегодня";
      break;
    case 1:
      dateStr = "Вчера";
      break;
    case -1:
      dateStr = "Завтра";
      break;
    default:
      dateStr =
        dat.getFullYear() + ":" + ("0" + (dat.getMonth() + 1)).slice(-2) + ":" + ("0" + dat.getDate()).slice(-2);
      break;
  }
  return dateStr;
};

export const sort = (data) => {
  //TODO: Отсортируйте массив строк по алфавиту
  data.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  return data;
};
