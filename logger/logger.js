/* eslint-disable no-console */
const chalk = require("chalk");

/**
 * Logger middleware, you can customize it to make messages more personal
 */
const logger = {
  /**
   * Called whenever there's an error on the server we want to print
   * @param err Error to be logged
   */
  error: err => {
    console.error(chalk.red(err));
  },

  /**
   * Log information to stdout
   * @param {string} text Text to be logged to console
   */
  log: text => {
    console.log(chalk.white(text));
  },

  /**
   * Called when express.js app starts on given port w/o errors
   * @param {string} bind Where the app is listening on
   */
  appStarted: bind => {
    console.log(`Server started ! ${chalk.green("✓")}`);
    console.log(`Listening on ${bind}`);
  }
};

module.exports = logger;
