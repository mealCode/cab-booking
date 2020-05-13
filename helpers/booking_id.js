const { v4: uuidv4 } = require('uuid');

exports.bookingId = function () {
  return uuidv4();
}