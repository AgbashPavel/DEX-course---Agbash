import "./styles.css";
import { sort, showPrice, sum, findSuccess, dateToString } from "./workHere";

const calcData = [
  [-1, 1],
  [5, {}],
  [15, "123,5"],
  ["15%", 15],
  ["x0001", 3],
  [true, "+"]
];

const discountData = [
  [100, 10],
  [0.4, 10],
  [15.22, 15]
];

const bankResult = [
  "purchaseFailed",
  "refusedRespone",
  "insufficientFunds",
  "Success",
  "Not Success",
  "Some success response",
  "SomeSuccessResponse"
];

const dates = [
  "2020-11-06T08:13:51.376Z",
  "2021-11-07T08:13:51.376Z",
  "2021-11-08T08:13:51.376Z",
  "2021-11-09T08:13:51.376Z",
  "2021-11-10T08:13:51.376Z",
  "2021-11-11T08:13:51.376Z",
  "2021-11-12T08:13:51.376Z",
  "2021-11-13T08:13:51.376Z",
  "2022-11-14T08:13:51.376Z"
];

const forSorting = [
  "ёж",
  "язь",
  "Евгений",
  "як",
  "август",
  "Ярик",
  "Анна",
  "йод"
];

export default function App() {
  return (
    <div className="App">
      Сумма:
      {calcData.map(([f, s]) => (
        <div>{sum(f, s)}</div>
      ))}
      <p />
      Цена товара:
      {discountData.map(([f, s]) => (
        <div>{showPrice(f, s)}</div>
      ))}
      <p />
      Поиск в строке:
      {bankResult.map((result) => (
        <div>{findSuccess(result)}</div>
      ))}
      <p />
      Обработка дат:
      {dates.map((result) => (
        <div>{dateToString(result)}</div>
      ))}
      <p />
      Сортировка строк:
      {sort(forSorting).map((result) => (
        <div>{result}</div>
      ))}
    </div>
  );
}
