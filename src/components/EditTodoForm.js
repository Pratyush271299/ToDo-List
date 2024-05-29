import React, {useState} from 'react';

const EditTodoForm = ({editTodo, task}) => {

    const [value, setValue] = useState(task.task)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === '') {alert('Please Enter a task.')} else
        editTodo(value, task.id);
        setValue('')
    }
  return (
    <form className='EditTodoForm' onSubmit={handleSubmit}>
      <input type='text' value={value} className='todo-input' placeholder='Update Task' onChange={(e) => setValue(e.target.value)}/>
      <button type="submit" className='todo-btn'>Update Task</button>
    </form>
  );
}

export default EditTodoForm;
