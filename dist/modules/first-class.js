"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Person = (function () {
	function Person(firstName, lastName) {
		_classCallCheck(this, Person);

		this.firstName = firstName;
		this.lastName = lastName;
	}

	_prototypeProperties(Person, null, {
		fullName: {
			get: function () {
				return this.firstName + " " + this.lastName;
			},
			configurable: true
		}
	});

	return Person;
})();

module.exports = Person;