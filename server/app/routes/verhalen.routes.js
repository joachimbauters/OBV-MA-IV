module.exports = app => {
  const controller = require('../controllers/verhalen.controller.js');

  app.post('/api/verhaal', controller.create);
  app.get('/api/verhaal', controller.findAll);
};
