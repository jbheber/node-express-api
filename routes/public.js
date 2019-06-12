module.exports = function(app) {
  app.route("/ping").get((req, res) => {
    res.status(200).send({ status: "pong" });
  });
};
