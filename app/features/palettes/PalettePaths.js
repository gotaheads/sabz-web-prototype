angular.module('sabzPrototypeApp')
  .factory('PalettePaths',
    function ($q, $log,
              Validations) {
      var PalettePaths = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;

      PalettePaths.toPath = function (palette) {
        return '/palettes/' + createPalettePath(palette);
      }

      var createPalettePath = function (palette) {
        return createPath(palette.owner,palette.name);
      }

      var createPath = function (owner, name) {
        return owner + '/' +name;
      }

      PalettePaths.createPalettePath = createPalettePath;
      PalettePaths.createPath = createPath;

      return PalettePaths;


    })
