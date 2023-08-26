import React, { useContext } from 'react';
import { TodoContext } from './context';
import AddTodo from './addTodo';
import { Form } from 'react-bootstrap';
import List from './list';
const TodoListAll = () => {

    const { todoList } = useContext(TodoContext);

    return (
        <div className='box'>
            <AddTodo />
            <div className='box'>
                <List todo={todoList} />
            </div>
        </div>
    )

}

export default TodoListAll;