import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Verhaal {
  constructor(
    naam,
    leeftijd,
    vraag,
    verhaal,
    typevervoer,
    stoelnummer,
    voertuignummer,
    date,
    id = uuid.v4()
  ) {
    this.id = uuid.v4();
    this.naam = naam;
    this.leeftijd = leeftijd;
    this.vraag = vraag;
    this.verhaal = verhaal;
    this.typevervoer = typevervoer;
    this.voertuignummer = voertuignummer;
    this.stoelnummer = stoelnummer;
    this.date = date;
  }

  get values() {
    return {
      naam: this.naam,
      leeftijd: this.leeftijd,
      vraag: this.vraag,
      verhaal: this.verhaal,
      typevervoer: this.typevervoer,
      voertuignummer: this.voertuignummer,
      stoelnummer: this.stoelnummer,
      date: this.date
    };
  }

  setId = id => (this.id = id);
  setNaam = value => (this.naam = value);
  setLeeftijd = value => (this.leeftijd = value);
  setVraag = value => (this.vraag = value);
  setVerhaal = value => (this.verhaal = value);
  setTypevervoer = value => (this.typevervoer = value);
  setVoertuignummer = value => (this.voertuignummer = value);
  setStoelnummer = value => (this.stoelnummer = value);
  setDate = value => (this.date = value);

  updateFromServer = values => {
    this.setId(values._id);
    this.setNaam(values.naam);
    this.setLeeftijd(values.leeftijd);
    this.setVraag(values.vraag);
    this.setVerhaal(values.verhaal);
    this.setTypevervoer(values.typevervoer);
    this.setVoertuignummer(values.voertuignummer);
    this.setStoelnummer(values.stoelnummer);
    this.setDate(values.date);
  };
}

decorate(Verhaal, {
  id: observable,
  naam: observable,
  leeftijd: observable,
  vraag: observable,
  verhaal: observable,
  typevervoer: observable,
  stoelnummer: observable,
  voertuignummer: observable,
  date: observable,
  values: computed,
  setId: action,
  setNaam: action,
  setLeeftijd: action,
  setVraag: action,
  setVerhaal: action,
  setTypevervoer: action,
  setVoertuignummer: action,
  setStoelnummer: action,
  setDate: action
});

export default Verhaal;
