export const dataProcessingAboutSalary = (f, s) => {
  return f + s;
};

export const calculateCashback = (isCashback, sum, cb) => {};

export const getHolidaysNotifications = (f, s) => {};

export const getHolidayPrizes = (f, s, t) => {
  let name = f;
  let bDate = new Date(s);
  let prace = t;
  let today = new Date();
  let month;
  let day;
  let monthToday;
  let dayToday;
  let msg;
  let sum;

  month = bDate.getMonth();
  day = bDate.getDate();

  monthToday = today.getMonth();
  dayToday = today.getDate();

  sum = Math.round((prace * 0.1 + month * day) * 0.1) * 10;
  if (month == monthToday && dayToday == day) {
    msg = `У ${name} сегодня праздник, его премия составляет  ${sum}`;
  }

  return msg;
};
