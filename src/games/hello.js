const add = (a, b) => a + b;
const add1 = (a, b) => {
  return a + b;
};

add(3, 5); // 8

function calculator(func, a, b) {
  return func(a, b);
}

calculator(add, 3, 5) // 8

// add 함수
// add() 함수호출, 함수의 리턴값 (함수의 호출은 리턴값으로 대체)
// document.querySelector('#header).addEventLister('click', add)
// document.querySelector('#header).addEventLister('click', add()) - 함수호출 // 잘못됨
// document.querySelector('#header).addEventLister('click', undefined + undefined) - 함수호출 // 잘못됨
// const onclick = () => {
//   return () => {
//     console.log('hello')
//   }
// }
// document.querySelector('#header').addEventListener('click', onClick()); 이건 가능


// 함수선언
// function c() {
//   console.log('c');
// }

// function a() {
//   console.log('a');
//   function b() {
//     console.log('b');
//     c();
//   }
//   b();
// }

// 함수호출
// a(); // a, b, c
// c(); // c