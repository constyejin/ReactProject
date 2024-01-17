//  object shorthand assignment
// ES6에서는 객체를 반환할 때 불필요한 반복을 하지 않아도 된다.
// key, value 형식으로 object의 프로퍼티를 추가 했다면 shorthand 방식으로 작성 가능
  let name = 'yejin'
  let age = 10

  // person 이라는 객체 하나 생성 
  // 이 객체에 들어가는 값은 이름과 나이
  // 이렇게 작성하는 게 일반적인 문법
  let person = {
    name : name,
    age : age
  }

  console.log(person)

  // 단축 표기법
  // 키와 키값에 들어가는 변수의 이름이 같다면, 생략하고 한번만 작성해도 된다.
  // 키와 벨류 값이 일치할 때만 줄여서 사용할 수 있다.
  // 키 이름으로 선언된 값이 있다면 value를 생략해도 그 값을 매칭 해준다.
  let person2 = {
    name,
    age
  }

  console.log(person2)



