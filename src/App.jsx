import { useState } from 'react';
import './App.css';

function App() {
  const [context, setContext] = useState('')
  const [todostate, setTodostate] = useState([{
    id : 1,
    context : 'react를 배워봅시다.'
  }])

  const inputAddBtnHandler = () => {
    const addTodo = {
      id : Date.now(),
      context : context,
    }

    if(context !== ''){
    setTodostate([...todostate, addTodo])
    setContext('')
    }
  }
  return (
    <div className="App">
      <div className='input_container'>
        <input placeholder='텍스트를 입력해주세요' value={context} onChange={(e) => {
          const {value} = e.target
          setContext(value)
        }}></input>
        <button onClick={inputAddBtnHandler}>추가하기</button>
      </div>
      <h2 className='title_h2'>Todo List</h2>
      <div className='todos_container'>
        {todostate.map( (x) => {
          return (<div className='todo_lists' key={x.id}>
            <p>{x.context}</p>
          </div>)
        })}
      </div>
    </div>
  );
}

export default App;
