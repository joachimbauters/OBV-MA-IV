import uuid from "uuid";
import { decorate, observable, action } from "mobx";

class Code {
  constructor(type, voertuignummer, aantal, id = uuid.v4()) {
    this.id = id;
    this.type = type;
    this.voertuignummer = voertuignummer;
    this.aantal = aantal;
    this.stoelnummer = 0;
  }

  updateType = value => {
    this.type = value;
  };

  updateVoertuignummer = value => {
    this.voertuignummer = value;
  };

  updateAantal = value => {
    this.aantal = value;
  };

  updateStoelnummer = value => {
    this.stoelnummer = value;
  };

  updateFromServer = values => {
    this.updateType(values.type);
    this.updateVoertuignummer(values.voertuignummer);
    this.updateAantal(values.aantal);
    this.updateStoelnummer(values.stoelnummer);
  };
}

decorate(Code, {
  type: observable,
  nummer: observable,
  aantal: observable,
  updateType: action,
  updateVoertuignummer: action,
  updateAantal: action,
  updateStoelnummer: action
});

export default Code;
