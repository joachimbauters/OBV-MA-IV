import { decorate, observable, configure, runInAction, action } from "mobx";
import Verhaal from "../models/Verhaal";
import Api from "../api";

configure({ enforceActions: "observed" });

class VerhalenStore {
  verhalen = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`verhaal`);
    this.getAll();
  }

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addVerhaal));
  };

  addVerhaal = data => {
    const newVerhaal = new Verhaal();
    newVerhaal.updateFromServer(data);
    this.verhalen.push(newVerhaal);
    return this.api
      .create(newVerhaal)
      .then(verhaalValues => newVerhaal.updateFromServer(verhaalValues));
  };

  _addVerhaal = values => {
    const verhaal = new Verhaal();
    verhaal.updateFromServer(values);
    runInAction(() => this.verhalen.push(verhaal));
  };
}

decorate(VerhalenStore, {
  verhalen: observable,
  addVerhaal: action
});

export default VerhalenStore;
