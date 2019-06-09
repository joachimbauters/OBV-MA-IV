const Verhaal = require('../models/verhaal.model.js');
//const Rating = require('../models/rating.model.js');

exports.create = async (req, res) => {
  if (!req.body.verhaal) {
    return res.status(500).send({err: 'verhaal can not be empty'});
  }

  const verhaal = new Verhaal({
    naam: req.body.naam,
    leeftijd: req.body.leeftijd,
    vraag: req.body.vraag,
    verhaal: req.body.verhaal,
    voertuignummer: req.body.voertuignummer,
    stoelnummer: req.body.stoelnummer
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
    res.status(500).send({err: err.verhalen || 'Error'});
  }
};
