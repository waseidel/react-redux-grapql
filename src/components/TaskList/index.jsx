import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { deleteTask } from '../../features/tasks/task.slice'

export const TaskList = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks)

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }
  return (
    <div className='w-4/6'>
      <header className='flex justify-between items-center py-4'>
        <h1 className='text-3xl'>Tareas {tasks.length}</h1>
        <Link to='/landing/create' className="bg-indigo-600 px-2 py-1 rounded-sm text-sm">Crear tarea</Link>
      </header>
      <div className='grid grid-cols-3 gap-4'>

        {
          tasks.map((task) => (
            <div key={task.id} className='bg-neutral-800 p-4 rounded-md'>
              <header className='flex justify-between'>
                <h3>{task.title}</h3>
                <div className="flex gap-x-2">
                  <Link className='bg-zinc-600 px-2 py-1 text-xs rounded-md self-center' to={task.id}>Editar</Link>
                  <button className='bg-red-500 px-2 py-1 text-xs rounded-md self-center' onClick={() => handleDelete(task.id)}>Delete</button>
                </div>
              </header>
              <p>{task.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
