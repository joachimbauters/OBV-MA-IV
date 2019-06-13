module.exports = app => {
  const controller = require('../controllers/qrcodes.Controller.js');

  app.post('/api/qrcode', controller.create);
  app.get('/api/qrcode', controller.findAll);
  app.get('/api/qrcode/:qrcodeId', controller.findOne);
  app.put('/api/qrcode/:qrcodeId', controller.update);
  app.delete('/api/qrcode/:qrcodeId', controller.delete);
};
