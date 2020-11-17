interface IRadio {
  switchRadio: (trigger:String) => void;
}

interface IBattery {
  checkBatteryStatus: () => boolean;
}


interface IPhone extends IRadio, IBattery {
}

class MiPhone implements IPhone {
  checkBatteryStatus = () => {
    console.log(`手机电池状态是: 可用!1`);
    return true;
};
  switchRadio = (trigger: String) => {
    console.log(`收单机开关状态是: ${trigger}`);
  };
}

const myPhone = new MiPhone();
myPhone.checkBatteryStatus();
myPhone.switchRadio('开');
