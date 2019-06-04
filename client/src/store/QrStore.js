import { decorate, observable, configure, action } from "mobx";
import Code from "../models/Code";

configure({ enforceActions: "observed" });

class QrStore {
  qrcodes = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  addCodes = data => {
    const newCode = new Code();
    newCode.updateFromServer(data);
    this.qrcodes.push(newCode);
  };

  removeCodes = () => {
    this.qrcodes = [];
  };
}

decorate(QrStore, {
  qrcodes: observable,
  addCodes: action,
  removeCodes: action
});

export default QrStore;
