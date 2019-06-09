import { configure } from "mobx";
import QrStore from "./QrStore";
import VerhalenStore from "./VerhalenStore";

configure({ enforceActions: `observed` });

class RootStore {
  constructor() {
    this.qrStore = new QrStore(this);
    this.verhalenStore = new VerhalenStore(this);
  }
}

export default new RootStore();
