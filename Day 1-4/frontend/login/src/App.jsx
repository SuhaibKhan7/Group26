import { useState } from 'react'
import './App.css'
import { useRef } from 'react'


function App() {
  const username = useRef();
  const password = useRef();
  const [userlist, setUserlist] = useState([]);
  const [message, setMessage] = useState('');

  const oldUserName = useRef();
  const newUserName = useRef();


  async function validation(e) {
    e.preventDefault();
    setMessage('')
    const usr = username.current.value
    const data = {
      username: username.current.value,
      password: password.current.value
    }
    const regexp = /^[A-Za-z]{7,}$/
    if (!regexp.test(usr)) {
      console.log('invalid user')
      return;
    }
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      console.log(response)
      if (response.status == 200) {
        const dataR = await response.json()
        setUserlist(dataR.usr);
        console.log(dataR);
        setMessage('Singup Successfull')
      }
      else if (response.status == 400) {
        setMessage('Invalid input')
      }
    }
    catch (error) {
      console.log(error);

    }
  }

  async function updateUser() {
    const data = {
      oldusername: oldUserName.current.value,
      newusername: newUserName.current.value
    }

    const response = await fetch('http://localhost:4000/update', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)

    })
    if (response.status == 200) {
      const dataR = await response.json()
      setUserlist(dataR.usr);
      console.log(dataR);
      setMessage('Update  Successfull')
    }




  }

  return (
    <>
      <form action="" onSubmit={validation}>
        <input type="text" placeholder='Enter username' ref={username} />
        <input type="password" name="" id="" ref={password} placeholder='Enter password' />
        <input type='submit' value='Signup' />
      </form>

      <h3>update</h3>
      <input type="text" placeholder='Enter oldname' ref={oldUserName} />
      <input type="text" placeholder='Enter new name' ref={newUserName} />
      <button onClick={updateUser}>update</button>







      {/* //userlist */}

      <ol>
        {userlist.map((user) =>
          <li>{user.username}</li>

        )}


      </ol>
      <p>{message}</p>
    </>
  )
}
export default App
