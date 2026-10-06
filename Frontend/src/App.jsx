import React, { useState, useEffect } from 'react'
import axios from "axios"

const App = () => {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/notes')
    .then((res)=>{
      console.log(res.data)
      setNotes(res.data.notes)
    })
    .catch((error)=>{
      console.log("API ERROR:", error)
    })
  }, [])

  return (
    <div className="notes">
      {
        notes.map((note, index)=>{
          return <div className="note" key={index}>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
          </div>
        })
      }
    </div>
  )
}

export default App