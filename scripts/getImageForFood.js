(function() {

  var variables = require('../variables.js');
  var googleImages = require('google-images');

  function getImageForFood(food, callback) {
    var preDefinedImage = variables.PRE_DEFINED_IMAGES[food];
    if (preDefinedImage) {
      callback(null, preDefinedImage);
      return;
    }

    if (!variables.GOOGLE_CSE_ID) {
      callback(new Error('GOOGLE_CSE_ID is not defined in variables.js'), undefined);
      return;
    }

    if (!variables.GOOGLE_API_KEY) {
      callback(new Error('GOOGLE_API_KEY is not defined in variables.js'), undefined);
      return;
    }

    googleImages(variables.GOOGLE_CSE_ID, variables.GOOGLE_API_KEY).search(food).then(function(images) {
      var resultsLength = images.length;
      if (resultsLength > 0) {
        var randomResult = images[Math.floor((Math.random() * resultsLength))];
        callback(null, randomResult.url);
      } else {
        callback(null, undefined);
      }
    }).catch(function(error) {
      callback(error, undefined)
    });
  }

  module.exports = getImageForFood;

})();
