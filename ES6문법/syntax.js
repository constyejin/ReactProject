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


// 03. Spread
let person3 = {
  name3 : 'Lisa',
  age3 : 17
}

// 객체의 깊은복사(Deep Copy)
// 객체를 하나 더 생성하는 것 (person3와 다른 객체)
let copyPerson1 = {...person3, name3 : 'Jimin'}
// 객체의 주소값만 복사 (즉 객체는 하나고 그 객체를 참조하는 변수가 두 개)
let copyPerson2 = person3
console.log(copyPerson1)
console.log(copyPerson2)
console.log(person3 == copyPerson1) // false
console.log(person3 == copyPerson2) // true

let c = [1, 2];
let d = [...c, 3, 4, 5]
console.log(d)

let e = [...c, ...d];
console.log(e)


// 04. 삼항 연산자 (Ternary Operator)
// if(person) {
//   console.log(person.name + '님, 안녕하세요')
// } else {
//   console.log('There is no person.')
// }
 
console.log(person ? person.name + '님, 안녕하세요!' : 'There is no person');
