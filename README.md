> http://tcpschool.com/javascript/js_object_propertyMethod
> 어제 푸시 못 해서 꼬임 집 가서 정리

참고 자바스크립트 정리

# 자바스크립트

### 데이터 타입
: 기본 데이터 타입-> 원시 타입, 객체 타입
1. 원시타입
<br>숫자 number
<br>문자열 string
<br>boolean
<br>심볼symbol: ECMAScript 6부터 제공; 객체 프로퍼티를 위한 식별자
<br>undefined
<br>객체 object

> 참고: 심볼의 사용 찾아보기

2. typeof 연산자
: 피연산자의 타입을 반환함

### 객체 프로퍼티
: 객체는 object 객체와 object.prototype 객체의 모든 프로퍼티를 상속 받음
: prototype 프로퍼티: 새로운 프로퍼티와 메소드를 쉽게 추가 가능

### 객체 메소드
: 메소드도 상속받음
: hasOwnProperty(), propertyIsEnumerable(), isPrototypeOf(), isExtensible(), toString(),  valueOf()

1. hasOwnProperty()
: 특정 프로퍼티가 객체에 존재하는지