const {Verhaal} = require('../models/verhaal.model.js');

exports.create = async (req, res) => {
  if (!req.body.verhaal) {
    return res.status(500).send({err: 'verhaal can not be empty'});
  }

  const verhaal = new Verhaal({
    naam: req.body.naam,
    leeftijd: req.body.leeftijd,
    vraag: req.body.vraag,
    verhaal: req.body.verhaal,
    typevervoer: req.body.typevervoer,
    voertuignummer: req.body.voertuignummer,
    stoelnummer: req.body.stoelnummer,
    date: req.body.date
  });

  verhaal
    .save()
    .then(verhaal => res.send(verhaal))
    .catch(err => {
      res.status(500).send({error: err.verhaal || 'Error'});
    });
};

exports.findAll = async (req, res) => {
  try {
    const verhalen = await Verhaal.find();

    res.send(verhalen);
  } catch (err) {
    console.log(err);
    res.status(500).send({err: err.verhalen || 'Error'});
  }
};
