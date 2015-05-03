define(['exports', './modules/person'], function (exports, _modulesPerson) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _Person = _interopRequire(_modulesPerson);

  var lukeSkywalker = new _Person('Luke', 'Skywalker');

  console.log('First name', lukeSkywalker.firstName);
  console.log('Last name', lukeSkywalker.lastName);
  console.log('Full name', lukeSkywalker.fullName);
});