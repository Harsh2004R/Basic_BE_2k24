import { useState ,useEffect} from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

useEffect(()=>{
  axios.get("/api/users").then((res)=>{
    setUsers(res.data)
    console.log(res)
  }).catch((error)=>{
    console.log(error)
  })
},[])

  return (
    <>
      <h1>Hello Harsh!</h1>
      <p>users: {users.length}</p>
      {users.map((el,index) => (
          <div key={el.id}>

            <h2>name:{el.name}</h2>
            <p>age:{el.age}</p>
          </div>
        
      ))}
    </>
  )
}

export default App
