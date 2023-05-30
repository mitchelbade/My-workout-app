const path = require('path');

module.exports = {
  resolve: {
    alias: {
      './theme': path.resolve(__dirname, '../client/src/theme.jsx'),
    },
  },
};