import React from 'react'
import { motion, AnimatePresence} from 'framer-motion'
import { TodoItem } from './TodoItem'

export const TodoList = ({todo, dispatch}) => {


    const deleteTodo = (todo) => {
        dispatch({
            type: 'DELETE_TODO',
            payload: todo.id,
        })
    }

    const handleToggle = (todo) => {
     
        dispatch({
            type: 'TOGGLE_TODO',
            payload: todo.id,
        })
    }
    
  

  return (

    
       
            <ul
             
             className=" w-96 mx-auto py-1 rounded-sm ">
                  <AnimatePresence>
                    {
                        todo.map( (todo) =>(
                        
                            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} handleToggle={handleToggle} />
                        ))
                    }
                  </AnimatePresence>
            </ul>
  

  )
}
