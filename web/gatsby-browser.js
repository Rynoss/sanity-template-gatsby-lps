const sourcebuster = require('sourcebuster');

exports.onClientEntry = () => {
  try {
    sourcebuster.init();
    console.log('Sourcebuster initialized');
  } catch (error) {
    console.error('Sourcebuster initialization failed:', error);
  }
};