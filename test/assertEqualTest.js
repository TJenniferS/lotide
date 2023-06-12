const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp"); // Non-identical strings
assertEqual("meow", "meow"); // Identical strings
assertEqual(10, 10); // Identical numbers
assertEqual(32, 9); // Non-identical numbers
assertEqual("meow", "Meow"); // Similar strings