import uuid from "uuid";
import { decorate, observable, action } from "mobx";

class Code {
  constructor(type, voertuignummer, id = uuid.v4()) {
    this.id = uuid.v4();
    this.type = type;
    this.voertuignummer = voertuignummer;
    this.stoelnummer = 0;
  }

  get values() {
    return {
      type: this.type,
      voertuignummer: this.voertuignummer,
      stoelnummer: this.stoelnummer
    };
  }

  updateId = value => (this.id = value);
  updateType = value => (this.type = value);
  updateVoertuignummer = value => (this.voertuignummer = value);
  updateStoelnummer = value => (this.stoelnummer = value);

  updateFromServer = values => {
    if (values._id) this.updateId(values._id);
    this.updateType(values.type);
    this.updateVoertuignummer(values.voertuignummer);
    this.updateStoelnummer(values.stoelnummer);
  };
}

decorate(Code, {
  id: observable,
  type: observable,
  voertuignummer: observable,
  stoelnummer: observable,
  updateId: action,
  updateType: action,
  updateVoertuignummer: action,
  updateStoelnummer: action
});

export default Code;
