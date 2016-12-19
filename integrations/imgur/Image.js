(function() {
  var imgur = require('imgur');
  var Jimp = require('jimp');

  function Image(url, image) {
    if (url !== undefined) {
      this.url = url;
    }
    if (image !== undefined) {
      this.image = image;
    }
  }

  Image.prototype.rescale = function rescale(width, height, onSuccess, onError) {
    if (!(this.image instanceof Jimp)) {
      if (typeof this.url === "string") {
        Jimp.read(this.url).then(function (i) { this.image = i; }).catch(function (e) { onError("Failed to read image"); });
      } else {
        onError("Image not bound to an URL");
      }
    }
    var rescaledImage = new Image(undefined, );
    rescaledImage.scaleToFit(width, height).then(
      function (ri) {
        onSuccess(ri);
      }
    ).catch(
    );

    onSuccess(new Image(undefined, rescaledImage);
  }

  Image.prototype.save = function save() {
  }

  module.exports = {
    isValidDish: isValidDish,
    saveDishes: saveDishes
  };

})();
