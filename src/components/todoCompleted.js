import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from './context';
import AddTodo from './addTodo';
import List from './list';
const TodoCompleted = () => {

    const { todoList } = useContext(TodoContext);
    const [todo, setTodo] = useState([])
    useEffect(() => {
        const filterTodo = todoList.filter((v) => v.status !== false);
        setTodo(filterTodo);
    }, [todoList])

    return (
        <>
            <div className='box'>
                <List todo={todo} isCompleted={true} />
            </div>
        </>
    )

}

export default TodoCompleted;