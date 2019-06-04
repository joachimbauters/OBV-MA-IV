import { configure } from "mobx";
import QrStore from "./QrStore";

configure({ enforceActions: `observed` });

class RootStore {
  constructor() {
    this.qrStore = new QrStore(this);
  }
}

export default new RootStore();
