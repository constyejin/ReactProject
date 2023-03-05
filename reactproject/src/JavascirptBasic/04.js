// es6 신텍스는 아니지만 정말 많이 사용되는 삼항 연산자
let person = {
  name : "yejin",
  age : 20
}

// 조건문
// person이라는게 존재한다면 person.name을 프린트
if(person) {
  console.log(person.name)
} else {
  console.log('없다')
}

// 삼항연산식에 익숙해져야 한다!
console.log(person ? person.name : "없다")

// 문제 1
// 나이가 18살 이상이라면 '성인 입니다' 아니라면, '미성년자 입니다'
console.log(person.age >= 18 ? '성인 입니다' : '미성년자 입니다')

// 문제 2
// 아무 배열이나 만들고, 배열의 길이가 5개 이상일 경우 '길다' 아니라면, '짧다' 
// 이상이니까 배열의 길이가 5보다 크거나 같아야함
let colors = ['red', 'white', 'black', 'green', 'blue']
let result = colors.length >= 5 ? '길다' : '짧다'
console.log(result)

// 문제 3
// age가 65세 이상일 경우 '노인 입니다', 18세 이상일 경우 '성인 입니다.'
// 그 이하일 경우 '미성년자 입니다.' 
console.log(person.age >= 65 ? '노인 입니다.' : person.age >= 18 ? '성인 입니다.' : '미성년자 입니다.')

// 문제 4
// num1이 num2 보다 큰 경우, 'num1 > num2' 
// num 2가 num3 보다 큰 경우 'num2 > num3'
// 그 외 '숫자가 같거나 num3이 가장 큼'
// result2 변수에 담아서 console.log 출력
let num1 = 1
let num2 = 2
let num3 = 3

let result2 = (num1 > num2) ? "num1 > num2" : (num2 > num3) ? "num2 > num3" : "숫자가 같거나 num3이 가장 큼";
console.log(result2);

// 삼항 연산자 논리 계산(true, false)
console.log(person.name ? "이름" + person.name : "이름이 없다")
console.log(person.name == "" ? "이름이 없다" : "이름" + person.name )
