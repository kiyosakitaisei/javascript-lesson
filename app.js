

// Q1
let nickname = 'ごっしー';
let age = 28;
let greet = '私のニックネームは' + nickname + 'です。年齢は'  + age + 'です。';
console.log(greet);


// Q2
let languages = ['JavaScript', 'PHP', 'RUdy', 'Python', 'Go'];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);


// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);


// Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1])


// Q5
let sum = 0;
for (let i = 0; i < playerList.length; i++) {
  sum += playerList[i].age;
}
console.log(sum / playerList.length);


// Q6
// Hello とコンソールに出力する関数 sayHello を定義し、実行してください。
function sayHello() {
  console.log('Hello');
}
sayHello();


// 変数 sayWorld に World とコンソールに出力する無名関数を代入し、実行してください。
const sayWorld = function() {
  console.log('World');
};

sayWorld();


// Q7
// Q3 で定義した変数 user に '2000-09-27'を値とする birthday プロパティを追加してください。
user.birthday = '2000-09-27';


// Q3 で定義した変数 user に Hello！とコンソールに出力するメソッド sayHello を追加し、実行してください。
user.sayHello = function () {
  console.log('Hello！');
}

user.sayHello();


// Q8
let calc = {
    add: function(x, y) {
    console.log(x + y);
  },

    subtract: function(x, y) {
    console.log(x - y);
  },

    multiply: function(x, y) {
    console.log(x * y);
  },

    divide: function(x, y) {
    console.log(x / y);
  }
};

calc.add(3,4);
calc.subtract(11,1);
calc.multiply(7,7);
calc.divide(25,5);


// Q9
function remainder(x,y) {
  return x % y;
}

console.log('5 を 3 で割った余りは' + remainder(5,3) + 'です');


// Q10
//「let x」は関数内で定義されており「console.log(x);」はスコープの参照範囲外であるため。







// 応用編 問題
// Q1
let random = Math.floor(Math.random() * 10); 

console.log('random => ', random);


// Q2
setTimeout(function() {
  console.log("Hello World!");
}, 3000);

// Q3
let num = 0;
if (num > 0) {
  console.log('num is greater than 0');
}
else if (num < 0) {
  console.log('num is less than 0');
}
else {
  console.log('num is 0');
}


// Q4
let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

console.log(numbers);

// Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++){
  let element = mixed[i];

  if (typeof element ==='number' && element % 2 === 0) {
    console.log('even');
  } else if (typeof element ==='number' && element % 2 === 1) {
    console.log('odd');
  } else {
    console.log('not number');
  }
}