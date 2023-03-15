// Import stylesheets
import './style.css';

const list = [
  {
    name: 'Just a Name',
    id: 1,
    data: 500,
  },
  {
    name: 'My a new Name',
    id: 2,
    data: 600,
  },
];

const listB = [
  {
    prodName: 'A product A',
    id: 1,
    price: 500,
  },
  {
    prodName: 'A product B',
    id: 2,
    price: 400,
  },
];

const error = {
  invalidArray: new Error('Not valid array'),
};
const joinArraysByProperty = (arr1, arr2, property) => {
  const map1 = arr1.reduce((acc, value) => (acc[value[property]] = value), {});

  const result = arr2.reduce((acc, obj) => {
    const key = obj[property];
    const combinedObj = { ...map1[key], ...obj };
    acc.push(combinedObj);
    return acc;
  }, []);

  return result;
};
console.log(joinArraysByProperty(list, listB, 'id'));
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
