var request = require('request'),
    Q = require('q');

exports.getOrder = function(orderId, token) {
  return Q.Promise(function(resolve, reject) {
    if (token === undefined) {
      reject("Missing authorization token");
    }

    request.get("https://www.eventbriteapi.com/v3/orders/" + orderId + "/?token=" + token + "&expand=attendees", function(err, res, body) {
      if (err) {
        return reject(err);
      }

      if (res.statusCode >= 400) {
        return reject("Order not found");
      }

      return resolve(JSON.parse(body));
    });
  });
};
