import { Vehicle, ElectricCar, ICECar } from "./types";

// ВАЖНО: ни в одной задаче нельзя использовать глобальные
// переменные. Проверяться будет только содержание уже
// существующих деклараций файла

// Необходимо описать класс "Привод", который будет принимать
// тип привода автомобиля ("FWD", "RWD", "AWD"). Предусмотреть
// метод canDrive(cover), который на основе полученного параметра
// будет определять может ли автомобиль передвигаться по поверхности:
// - "asphalt" доступен для всех;
// - "sand" доступен для полного привода ("AWD");
// - "rocks" не доступен для всех;
// - при получении иных вариантов параметра — выбрасывать ошибку
export class Drive {
  constructor(type) {
    this.type = type;
    this.canDrive = this.canDrive.bind(this);
  }

  canDrive(cover) {
    if (cover === "asphalt"){
      return true;
    }
    if (cover === "sand" && this.type === "AWD") {
      return true;
    }
    if (cover === "sand" && this.type !== "AWD") {
      return false;
    }
    if (cover === "rocks" ){
      return false;
    }
    else {
      throw new Error("not supported cover");
    }
  }
}

// Необходимо описать класс "Зарядная станции" для зараядки
// электирческих автомобилей (chargeVehicle должен вызывать vehicle.charge()).
// Имейте в виду, что электромобили возгараются от перезарядки
// (>100%) или при слишком интенсивной зарадке (импульс заряда должен
// быть не чаще чем 1раз в 0,5сек).
export class Charger {
   timeoutId = {};

  chargeVehicle(auto) {
    if (this.timeoutId[auto.id] == null &&
       auto instanceof ElectricCar &&
       auto.battery < 100
    ) {
        this.timeoutId[auto.id] = setTimeout(() => {
        auto.charge();
        this.timeoutId[auto.id] = null;
      }, 500);
    }
  }
}

// Унаследуйте класс Vehicle. Необходимо создать класс таким образом,
// чтоб пробег всех автомобилей можно было получить без параметров.
// Реализуйте функцию получения суммарного пробега всех автомобилей
export class Car extends Vehicle {
  static totalMilage = 0;
  trip(milage) {
    super.trip(milage);
    Car.totalMilage += milage;
  }
}

export function getTotalCarsMileage() {
  return Car.totalMilage;
}
