import { decorate, observable, configure, action, runInAction } from "mobx";
import Code from "../models/Code";
import Api from "../api";

configure({ enforceActions: "observed" });

class QrStore {
  qrcodes = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`qrcode`);
  }

  getAll = () => {
    this.api.getAll();
  };

  addCodes = data => {
    const newCode = new Code();
    newCode.updateFromServer(data);
    console.log(newCode);
    this.qrcodes.push(newCode);
    return this.api
      .create(newCode)
      .then(codeValues => newCode.updateFromServer(codeValues));
  };

  _addCodes = values => {
    const code = new Code();
    code.updateFromServer(values);
    runInAction(() => this.qrcodes.push(code));
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
