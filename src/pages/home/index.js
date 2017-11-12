var template = require('./hello.marko.js');

module.exports = function(req, res) {
  template.render({
    name: 'Wali'
  }, res);
};
