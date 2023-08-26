import React, { useContext } from 'react';
import { TodoContext } from './context';

const AddTodo = (props) => {

    const { handleAddTodo, handleForm, formData } = useContext(TodoContext)


    return (
        <>
            <form className='form' onSubmit={handleAddTodo}>
                <input type='text' placeholder='Task Name' name='name' value={formData.name} onChange={handleForm} className='form-control' />
                <button className='btn btn-primary' type='submit'>
                    Add
                </button>
            </form>
        </>
    )

}

export default AddTodo;