const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const publicRoutes = require("./public");

// Create Express App
const app = express();

app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));

const v1 = express.Router();

// Enable CORS
app.use(cors());

// import routes - public
publicRoutes(app);

// catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404).send({ code: 404, message: "Resource not found" });
});

module.exports = app;


const init = () => {
  
  v1.use((req, res, next) => {
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    );
    res.header(
      'Access-Control-Allow-Methods',
      'GET,PUT,POST,PATCH,DELETE,OPTIONS',
    );
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });

  // import routes - private
  healthRoutes.registerHealthcheckRoutes(v1);
  levelRoutes.registerLevelRoutes(v1);

  // catch 404 and forward to error handler
  v1.use((req, res) => {
    res.status(404).send({ code: 404, message: 'Resource not found' });
  });

  return v1;
};

module.exports = {
  init,
};

