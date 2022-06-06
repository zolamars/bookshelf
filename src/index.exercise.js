import '@reach/dialog/styles.css'
import React from "react";
import { Logo } from "components/logo";
import { createRoot } from 'react-dom/client';
import {Dialog} from '@reach/dialog'

function App() {
  const [openModal, setOpenModal] = React.useState('none');
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
      </Dialog>
      <Dialog aria-label='register-modal' isOpen={openModal === 'register'}>
        <div>
          <button onClick={()=> setOpenModal('none')}>Close</button>
        </div>
        <h3>Register</h3>
      </Dialog>
    </div>
  )
}
const root = createRoot(document.getElementById('root'))
root.render(<App />)
export { root }
