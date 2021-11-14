export const processCartData = (cartData) => {
  //TODO: Нужно добавить поле discount(oldPrice - price)
  // убрать поле oldPrice
  cartData.forEach(function (el) {
    if (el.oldPrice - el.price > 0) {
      el.discount = el.oldPrice - el.price;
    }
    delete el.oldPrice;
  });
  return cartData;
};

export const makeCartItemCopy = (cartItem) => {
  //TODO: сделать копию элемента "Пицца с анчоусами"
  // После увеличить кол-во добавленного ингредиента
  let clone;
  cartItem.forEach(function (el) {
    if (el.name === "Пицца с анчоусами") {
      clone = Object.assign({}, el);
      el.addedIngredients.forEach(function (item) {
        item.count++;
      });
    }
  });
  cartItem.push(clone);
  return cartItem;
};

export const calcSum = (cartData) => {
  //TODO: посчитать суммы по типам товаров и их цены

  //const totalCnt = cartData.reduce((sum, current) => sum + current.count,0);
  //const totalSum = cartData.reduce((sum, current) => sum + current.price,0);

  let totalCnt = 0;
  let totalSum = 0;
  let waterCnt = 0;
  let waterSum = 0;
  let pizzaCnt = 0;
  let pizzaSum = 0;
  let otherCnt = 0;
  let otherSum = 0;
  
  cartData.forEach(function (el) {
    switch (el.type) {
      case "water":
        waterCnt += el.count;
        waterSum += el.price;
        break;
      case "pizza":
        pizzaCnt += el.count;
        pizzaSum += el.price;
        break;
     case "other":
        otherCnt += el.count;
        otherSum += el.price;
        break;
      default:
    }
    totalCnt += el.count;
    totalSum += el.price;
  });

  return {
    total: { count: totalCnt, sum: totalSum },
    water: { count: waterCnt, sum: waterSum },
    pizza: { count: pizzaCnt, sum: pizzaSum },
    other: { count: otherCnt, sum: otherSum }
  };
};

export const getCartItemsByDate = (cartData, date) => {
  //TODO: выбрать покупки сделанные за выбранную дату
  const jsDate = new Date(Date.parse(date));
  jsDate.setHours(0, 0, 0, 0);
  let dateCart;
  let newCart = [];
  cartData.forEach(function (el) {
    dateCart = new Date(Date.parse(el.date));
    dateCart.setHours(0, 0, 0, 0);
    if (jsDate.getTime() === dateCart.getTime()) {
      newCart.push(el);
    }
  });

  return cartData;
};

export const repeatOrder = (cartData, date) => {
  //TODO: нужно повторить заказ за выбранную дату
  // дублиовать соответствующие элементы
  // поставить в начало спиcка
  // дату текущую
  // поменять id на уникальный
  const jsDate = new Date(Date.parse(date));
  jsDate.setHours(0, 0, 0, 0);
  let dateCart;
  let newCart = [];
  let maxId = 0;
  //выбираем нужные элементы за дату
  cartData.forEach(function (el) {
    dateCart = new Date(Date.parse(el.date));
    dateCart.setHours(0, 0, 0, 0);
    maxId = el.id > maxId ? el.id : maxId;
    if (jsDate.getTime() === dateCart.getTime()) {
      newCart.push(el);
    }
  });

  //добавляем выбранные элементы в начало списка
  newCart.forEach(function (el) {
    el.id = ++maxId;
    cartData.unshift(el);
  });
  return cartData;
};

export const addItem = (cartData, item) => {
  //TODO: увеличить кол-во товара в полученном элементе
  cartData.forEach(function (el) {
    if(Object.toJSON(el) === Object.toJSON(item)) {
      el.count ++;
    }
  });

  return cartData;
};

export const checkPromo = (cartData) => {
  //TODO: нужно проверить корзина подходит под правила промоакции
  // проверить что суммарно в корзине больше 1000р
  // что есть пункт больше чем на 500р
  // что нет скидочных товаров

  const totalSum = cartData.reduce((sum, current) => sum + current.price * current.count,0);
  const cnt500 = cartData.filter((item) => item.price > 500).length;
  const cntDiscount = cartData.filter((item) => "discount" in item).length;

  return {
    total: totalSum > 1000,
    oneBigPosition: cnt500 > 0,
    notDiscounted: !cntDiscount > 0
  };
};
