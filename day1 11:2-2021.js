let array = [1991, 1999, 2001, 2002];

function myFilter(array, callback, year) {
  let a = [];

  array.forEach((element) => {
    if (callback(element, year)) {
      a.push(element);
    }
  });
  return a;
}

function filter(i, k) {
  if (i > k) {
    return true;
  } else {
    return false;
  }
}

let result = myFilter(array, filter, 2000);

console.log(result);

const result2 = initArray.filter(element => element >= 2000);

Array.prototype.myUcase = function() {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};
Array.prototype.myFilter = function (callback) {
  let a = [];

  array.forEach((element) => {
    if (callback(element)) {
      a.push(element);
    }
  });
  return a;
};

let result5 = array.myFilter((x) => x > 2000);

console.log(result5);

var all = ["Lars", "Peter", "Jan", "Bo"];

let hej = all.join(",");

console.log(hej);
let members = [
 {name : "Peter", age: 18},
 {name : "Jan", age: 35},
 {name : "Janne", age: 25},
 {name : "Martin", age: 22},
]

console.log(members.reduce((reducer2), 0));

let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ];

var reducer2 = function(accumulator, member, index, arr) {
    let total = accumulator + member.age;
    if((index + 1) == arr.length) {
        total = total/arr.length;
    }
    return total;
};
console.log(members.reduce((reducer2), 0));
let countedVotes = votes.reduce(function (allVotes, candidate) {
  if (candidate in allVotes) {
    allVotes[candidate]++;
  } else {
    allVotes[candidate] = 1;
  }
  return allVotes;
}, {});

console.log(countedVotes);