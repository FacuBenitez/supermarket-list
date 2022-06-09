import {motion} from 'framer-motion'
import React from 'react'

export const TodoItem = ({todo, deleteTodo,handleToggle }) => {

    const variants = {
        visible: {
            opacity: 1,
            y:0,
        },
        hidden: { 
            opacity: 0,
            
        },
        transition:{

           delay:0.5,
        }
    }
    
  return (
  
            <motion.li
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="p-2 m-2 mt-4 rounded flex justify-evenly cursor-pointer  bg-gradient-to-tr from-slate-900 to-blue-500"
            >
                <p
                onClick={()=>handleToggle(todo)}
                className={todo.completed ? 'line-through my-auto mr-8 text-white' : 'text-center font-[500] my-auto mr-8 text-white'}
                >
                    {todo.desc}
                </p>   
                <button className="bg-red-500 opacity-90 rounded shadow w-14 h-10 mx-7 font-[500] text-white px-1 hover:bg-red-800"
                    onClick={() => deleteTodo(todo)}
                >Borrar</button>
            
            </motion.li>
    )
  }