describe("Eventbrite", function() {
  var eventbrite = require('../index');

  it("list users", function(done) {
    eventbrite.getOrder("560247020", process.env.TOKEN).then(function(order) {
      expect(order.name).not.toBe(null);
      expect(order.surname).not.toBe(null);
      done();
    }, function() {
      fail();
      done();
    });
  });

});
