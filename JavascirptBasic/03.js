// spread
let person = {
  name : "yejin",
  age: 20
}

// person 이라는 객체를 그대로 복사하고 싶을 때
// ... 사용시(객체의 깊은 복사 = deep copy)
// 깊은 복사시 기존 객체가 그대로 복사되어서 새로운 객체가 생성된다.
// 내용은 같지만 객체가 두개 (서로 완전 다른 객체)
let person2 = {...person}
console.log(person2)

// 그렇다면 ...없이 얕은 복사와의 차이점은?
// 얕은 복사(Shallow Copy)
let person3 = person
console.log(person3)

// 둘 다 console.log 찍어 봤을 때 똑같아 보이는데 차이점은?
// ...을 넣지 않고 바로 할당할 경우엔, 객체의 주소값만 복사한다.
// 즉 객체는 하나고 그 객체를 참조하는 변수가 두개
// person3가 기존 객체를 참조할 뿐, 객체가 새로 생성된 게 아님.

console.log(person == person2)
// 객체를 가르키고 있는 화살표가 똑같기 때문에 같다고 나온다.
console.log(person == person3)


// Array
let a = [1,2]
// a에 있는 내용을 그대로 복사하고, 추가로 3을 붙인 새로운 객체 생성
let b = [...a,3]
console.log(b)

// a와 b의 값을 둘 다 복사한 새로운 객체 생성
let c = [...a, ...b]
console.log(c)
