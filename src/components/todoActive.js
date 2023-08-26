import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from './context';
import AddTodo from './addTodo';
import List from './list';
const TodoActive = () => {

    const { todoList } = useContext(TodoContext);
    const [todo, setTodo] = useState([])
    useEffect(() => {
        const filterTodo = todoList.filter((v) => v.status === false);
        setTodo(filterTodo);
    }, [todoList])

    return (
        <div className='box'>
            <AddTodo />
            <div className='box'>
                <List todo={todo} />
            </div>
        </div>
    )
}

export default TodoActive