const Qrcode = require('../models/qrcode.model.js');

exports.create = async (req, res) => {
  if (!req.body.type) {
    return res.status(500).send({err: 'type can not be empty'});
  }

  const qrcode = new Qrcode({
    type: req.body.type,
    voertuignummer: req.body.voertuignummer,
    stoelnummer: req.body.stoelnummer
  });

  console.log('hey');

  qrcode
    .save()
    .then(qrcode => res.send(qrcode))
    .catch(err => {
      res.status(500).send({error: err.qrcode || 'Error'});
    });
};

exports.findAll = async (req, res) => {
  try {
    const qrcodes = await Qrcode.find();
    console.log(qrcodes);

    res.send(qrcodes);
  } catch (err) {
    res.status(500).send({err: err.qrcode || 'Error'});
  }
};

exports.findOne = async (req, res) => {
  try {
    const qrcode = await Qrcode.findOne({
      _id: req.params.qrcodeId
    });
    if (qrcode) {
      res.send(qrcode);
    } else {
      res.status(404).send('No qrcode found');
    }
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(500).send('Geen geldig ID');
    }
    return res.status(500).send(err);
  }
};

exports.update = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).send('title mag niet leeg zijn');
  }

  try {
    const qrcode = await Qrcode.findOneAndUpdate(
      {
        _id: req.params.qrcodeId
      },
      {
        type: req.body.type,
        voertuignummer: req.body.voertuignummer,
        stoelnummer: req.body.voertuignummer
      },
      {
        new: true
      }
    );

    if (!qrcode) {
      return res.status(404).send('No post found');
    }
    res.send(qrcode);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(417).send('Geen geldig ID');
    }
    return res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const qrcode = await Qrcode.findOneAndRemove({
      _id: req.params.qrcodeId
    });

    if (!qrcode) {
      return res.status(404).send('No qrcode found');
    }
    res.send(qrcode);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(417).send('Geen geldig ID');
    }
    return res.status(500).send(err);
  }
};
