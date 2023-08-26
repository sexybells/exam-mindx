import React, { useContext } from 'react';
import { TodoContext } from './context';
import AddTodo from './addTodo';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const List = (props) => {

    const { handleUpdateTodo, handleDeleteTodo, handleDeleteAll } = useContext(TodoContext);

    const { todo, isCompleted } = props;
    return (
        <>
            <div>
                {todo.map((v, k) => (
                    <div key={k} className="mb-3">
                        <div className='list-todo'>
                            <div className='todo'>
                                <input type='checkbox' className='form-check-input' id={k} checked={v.status} onChange={() => handleUpdateTodo(k)} />
                                <p style={{ textDecoration: v.status ? 'line-through' : 'none' }}>
                                    {v.name}
                                </p>
                            </div>
                            {isCompleted && (
                                <div>
                                    <button className='btn btn-danger' onClick={() => handleDeleteTodo(k)}>
                                        <FontAwesomeIcon icon="fa-solid fa-trash" />  Deleted
                                    </button>
                                </div>
                            )}

                        </div>

                    </div>
                ))}
                {isCompleted && todo.length > 0 && (
                    <div className='delete-all'>
                        <button className='btn btn-danger' onClick={() => handleDeleteAll()}>
                            <FontAwesomeIcon icon="fa-solid fa-trash" /> Delete All
                        </button>
                    </div>
                )}

            </div>
        </>
    )

}

export default List;