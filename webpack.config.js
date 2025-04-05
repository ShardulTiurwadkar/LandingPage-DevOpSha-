const path = require('path');

module.exports = {
  // Other webpack configuration
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')  // Resolves '@' to the 'src' directory
    }
  }
};
