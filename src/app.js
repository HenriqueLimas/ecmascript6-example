import Person from './modules/first-class';

var lukeSkywalker = new Person('Luke', 'Skywalker');

console.log('First name', lukeSkywalker.firstName);
console.log('Last name', lukeSkywalker.lastName);
console.log('Full name', lukeSkywalker.fullName);