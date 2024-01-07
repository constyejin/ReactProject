// 리액트에 필요한 Javascript 최신 문법(ES6)

// 01. Object Shorthand Assignment
let name = 'john';
let age = 15;

// key, value 값이 일치할 때는 생략 가능
let person = {
  name,
  age 
}
console.log(person)


// 02. Destructuring
let person2 = {
  name2 : 'Anna',
  age2 : 20
}

// let name2 = person2.name
// let age2 = person2.age

let {name2, age2} = person2
console.log(name2, age2)

let arr = [1,2,3,4,5]
let [a,b,...rest] = arr;
console.log(a,b)
console.log(rest)




