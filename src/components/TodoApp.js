import React, { useEffect, useReducer } from 'react'
import { useForm } from '../hooks/useForm'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

const TodoApp = () => {


    const [todos, dispatch] = useReducer(todoReducer,[], init)

    const [{desc}, handleInputChange, reset] = useForm({
        desc: '',
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
 

    const handleSubmit =(e) => {
        e.preventDefault()
        if(desc===""){
            return 
        }

        const newTodo = {
            id: new Date().getTime(),
            desc:desc,
            completed: false,
        }
        const action = {
            type: 'ADD_TODO',
            payload: newTodo
        }
        dispatch(action)
        reset();
      
    }

   

  return (
    <div className="text-center font-poppins">
            <h1>SuperMarket List</h1>
        <form className="p-3"
        onSubmit={handleSubmit}
        >
            <input type="text"
            autoComplete='off'
            value={desc}  
            name='desc'
             className="bg-gray-200 rounded h-8" 
                placeholder="Agrega una tarea...
                "
                onChange={handleInputChange}
             />

            <button type="submit" className="bg-blue-900 rounded w-20 px-2 py-2 hover:bg-blue-800/90 text-white font-semilight ml-3">Agregar</button>
        </form>

        <div>
            <TodoList todo={todos} dispatch={dispatch} />
              
           
           
        </div>

    </div>  
  )
}

export default TodoApp