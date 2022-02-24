import './App.css';
import React, { useState, useEffect } from 'react'
import db from './firebase';

function App() {

  const [student, setStudent] = useState([])
  const [loading, setLoading] = useState(false)

  const ref = db.firestore().collection('school')

  console.log(ref)

  function getStudent() {
    setLoading(true)
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((i) => {
        items.push(i.data())
      })
      setStudent(items)
      setLoading(false)
    })
  }

  student.forEach((e)=>{
    console.log(e)
  })

  useEffect(() => {
    getStudent()
  }, [])

  if (loading) {
    return <h1>Loading....</h1>
  }

  return (
    <div className='bg-blue-400 h-screen'>
      <h1 className='text-center text-4xl text-white'>Student</h1>
      {student.map((e) => {
        return(
        <div className='text-white' key={e.id}>
          <h1>{e.name}</h1>
          <h1>{e.regdNo}</h1>
        </div>)
      })}

    </div>
  );
}

export default App;
