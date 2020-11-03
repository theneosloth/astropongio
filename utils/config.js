require('dotenv').config();

const PORT = process.env.PORT || 3003;
const INTERVAL = 1000 / 60;

module.exports = {
  PORT,
  INTERVAL,
};
