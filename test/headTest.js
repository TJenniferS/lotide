const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5, 6, 7]), 5); //yields head 0
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //yields head 0
assertEqual(head([602]), 602); //yields the only one element as its head
assertEqual(head(["meow"]), "meow"); //yields the only one element as its head
assertEqual(head([]), undefined); //yields undefined as it's empty