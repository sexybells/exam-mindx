import React, {useEffect, useState} from 'react';
import { TodoContext } from './context';



const TodoProvider = (props) => {

    const {children} = props;

    const [todoList, setTodoList] = useState([]);
    const [formData, setFormData] = useState({name: '', status: false})


    const handleForm = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value})
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        if (formData.name !== '') {
            const todo = [...todoList];
            todo.push(formData);
            setTodoList(todo);
            setFormData({name: '', status: 'active'})
            localStorage.setItem('todo_list', JSON.stringify(todo));
        } else {
            alert('type something')
        }

    }

    const handleUpdateTodo = (key) => {
        const todo = [...todoList];
        todo[key].status = !todo[key].status;
        setTodoList(todo);
        localStorage.setItem('todo_list', JSON.stringify(todo));
    }

    const handleDeleteTodo = (key) => {
        const todo = [...todoList];
        delete todo[key];
        setTodoList(todo);
        localStorage.setItem('todo_list', JSON.stringify(todo));
    }

    const handleDeleteAll = () => {
        setTodoList([]);
        localStorage.setItem('todo_list', JSON.stringify([]));
    }

    const contextValue = {
        todoList,
        handleAddTodo,
        handleForm,
        handleUpdateTodo,
        handleDeleteTodo,
        formData,
        handleDeleteAll
    }



    useEffect(() => {
        const todo = JSON.parse(localStorage.getItem('todo_list'));
        if (todo && todo.length > 0) {
            setTodoList(todo);
        }
        
    }, [])

    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    )

}

export default TodoProvider;