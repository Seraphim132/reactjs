import React, { useState } from 'react'
import Loading from './Loading'
import { BiEdit, BiTrash } from 'react-icons/bi'

const Todolist = () => {
     const [loading, setloading] = useState(true)
          if(loading === true){
            setTimeout( () => {
              setloading(false)
            }, 500)
          }
          const [OneName, setOneName] = useState('')
          const [Names, setNames] = useState([''])
          const deleteName = (any) => {
            const newNameList = Names.filter((newName, nld) => nld !== any)
            setNames(newNameList)
          }
          const addTask = () => {
            setNames([...Names,OneName])
            setOneName('')
          }
          const handleEdit = (index) => {
            const newIndex = Names[index]
            setOneName(newIndex)
            const newNameList = Names.filter((newName, nld) => nld !== index)
            setNames(newNameList)
          }
  return (
    <div className='body'>
      {loading && <Loading/>}
      <h1 className='blog'>
        To Do List
      </h1>
      
      <div className='ib'>
        <input className='inp' type="text" value={OneName}   onChange={(e) => {setOneName(e.target.value)}}/>
        <button  className='Button' onClick={() => {
          setNames([...Names, OneName])
          setOneName('')

        }}>
          Add an activity
        </button>
      </div>
      
      <div className='todo'>
        <h1 className='main'>List of Activities</h1>
        {Names.map((name, ind) => (
          <p className='items' key={ind}>{name} <BiTrash className='trash' color='red'  onClick={() => deleteName(ind)}/> <BiEdit color='green' onClick={() => handleEdit(ind)} /> </p>
        ))}
      </div>
    </div>
  )
}

export default Todolist
