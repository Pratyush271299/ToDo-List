import React, {useState} from 'react';

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === '') {alert('Please Enter a task.')} else
        addTodo(value);
        setValue('')
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' value={value} className='todo-input' placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)}/>
      <button type="submit" className='todo-btn'>Add Task</button>
    </form>
  );
}

export default TodoForm;
