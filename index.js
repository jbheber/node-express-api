const http = require("http");
const config = require("config");
const app = require("./routes/index");
const logger = require("./logger/logger");

const server = http.createServer(app);

server.listen(process.env.PORT || config.port || 3000);

server.on("listening", () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;

  logger.appStarted(bind);
});
