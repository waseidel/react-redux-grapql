import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import { addTask, editTask } from '../../features/tasks/task.slice.js'

export const TaskForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const [task, setTask] = useState({
    title: '',
    description: ''
  })
  const tasks = useSelector(state => state.tasks)

  const handleChange = ({ target: { name, value } }) => {
    setTask({
      ...task,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(task))
    } else {
      dispatch(addTask({
        id: uuid(),
        ...task,
        complete: false
      }))
    }
    navigate('/landing')
  }

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find(task => task.id === params.id))
    }
  }, [params.id, task])

  return (
    <form className='bg-zinc-800 max-w-sm p-4' onSubmit={handleSubmit}>
      <label className='block text-xs font-bold mb-1' htmlFor="title">Titulo</label>
      <input
        className='w-full rounded-md bg-zinc-600 mb-2'
        type="text"
        onChange={handleChange}
        name="title"
        placeholder='Titulo'
        value={task.title}
      />
      <label className='block text-xs font-bold mb-2' htmlFor='description'>Descripción</label>
      <textarea
        className='w-full rounded-md bg-zinc-600 mb-2'
        onChange={handleChange}
        name="description"
        placeholder='descripción'
        value={task.description}
      />

      <input className='bg-indigo-600 px-2 py-1' type="submit" value="enviar" />
    </form>
  )
}
