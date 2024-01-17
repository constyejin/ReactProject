// Destructuring
// 구조를 분해한다는 뜻
// 객체를 분해해서 값을 가져온다.
let person = {
  name : "yejin",
  age : 20
}

// name이랑 age라는 값을 변수로 뽑아내고 싶다면?
// 옛날 문법
// let name = person.name
// let age = person['age']
// console.log(name, age)


// 단축 표기법
// 변수 선언 후 객체를 써놓고 그 안에 내가 가져오고 싶은 key값을 입력한다.
// person이라는 객체에서 name과 age라는 key값을 분해하고 그 값을 let으로 선언한 변수로 만든다.
let {name, age} = person
console.log(name, age)
console.log(age)

// 어떤 객체 안에서 가져오고 싶은 키 값을 맨션하면 그 키값의 이름인 변수가 만들어지고,
// 그 변수 안에는 그 키의 값이 들어가게 된다.
// 이 문법은 객체 뿐만 아니라 배열에서도 적용된다.

// Array (State에서 사용하는 문법 *정말 많이 쓰임*)
let arr = [1,2,3,4,5]
// a와 b라는 변수가 생성되고, a랑 b에는 배열의 순서대로 첫번째 값이 a에 들어가고
// 두번째 값이 b에 들어가게 된다.
// let [a,b] = arr
// console.log(a,b)

// 배열 안에 나머지 값들도 가져오고 싶을 때는 ...rest 사용!
// a,b 값을 제외한 나머지 값을 rest 안에 넣어준다
let [a,b,...rest] = arr
console.log(rest)
