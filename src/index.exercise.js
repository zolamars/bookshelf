import '@reach/dialog/styles.css'
import React from "react";
import { Logo } from "components/logo";
import { createRoot } from 'react-dom/client';
import {Dialog} from '@reach/dialog'

function LoginForm({onSubmit, buttonText}){
  function handleSubmit(event){
    event.preventDefault()
    const {userName, password} = event.target.elements
    onSubmit({
      userName: userName.value,
      password: password.value
    })
  }
  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='userName'>Username</label>
        <input id='userName'/>
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input id='password' type='password'/>
      </div>
      <div>
        <button type='submit'>{buttonText}</button>
      </div>
    </form>
  )
}
function App() {
  const [openModal, setOpenModal] = React.useState('none');
  const loginFormData=(formData)=>{
    console.log('login', formData)
  }
  const registerFormData=(formData)=>{
    console.log('login', formData)
  }

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>
      <Dialog aria-label='login-modal' isOpen={openModal === 'login'} >
        <div>
          <button onClick={()=> setOpenModal('none')}>Close</button>
        </div>
        <h3>Login</h3>
      <LoginForm onSubmit={loginFormData} buttonText='login'/>
      </Dialog>
      <Dialog aria-label='register-modal' isOpen={openModal === 'register'}>
        <div>
          <button onClick={()=> setOpenModal('none')}>Close</button>
        </div>
        <h3>Register</h3>
      <LoginForm onSubmit={registerFormData} buttonText='register'/>
      </Dialog>
    </div>
  )
}
const root = createRoot(document.getElementById('root'))
root.render(<App />)
export { root }
