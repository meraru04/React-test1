## 230629 리액트 과제 작성

[배포사이트](https://react-test1-chi.vercel.app/)

### App.jsx
1. const context : useState로 input태그의 상태값을 가짐 초기값은 빈 문자열
2. const todostate : useState로 todolist의 더미데이터를 상태값으로 가짐
3. inputAddBtnHandler : 핸들러 함수로 addTodo 변수에 추가할 더미데이터 객체를 넣고 context가 빈 문자열이 아닐 떄만 setTodostate 함수를 통해 구조 분할후 뒤의 값을 addTodo를 추가해준다.


#### 구조
구조는 크게 input, title, todo 3부분으로 나뉜다.
1. input container
 + 사용자가 todolist에 담을 내용을 적고 추가하기 버튼을 클릭한다면 todostate에 값이 추가된다.

2. title
 + Todo List 라는 값의 타이틀 h2태그가 들어있다.

3. todo_container
 + todostate의 값을 map() 메서드를 통해 카드 형태의 div와 input박스의 내용이 담긴 글이 출력된다.
