/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let catMap = new Map();
  let transList;
  let objArr = [];

  for (let i = 0; i < transactions.length; i++) {
    element = transactions[i];
    if (catMap.has(element["category"])) {
      catMap.set(element["category"], catMap.get(element["category"]) + element["price"]);
    }
    else {
      catMap.set(element["category"], element["price"]);
    }
  }


  for (let [key, value] of catMap) {
    objArr.push({ "category": key, "totalSpent": value })
  }

  return objArr;
}

module.exports = calculateTotalSpentByCategory;
