import React from "react";
import { Logo } from "components/logo";
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => alert('login clicked!')}>Login</button>
      </div>
      <div>
        <button onClick={() => alert('register clicked!')}>Register</button>
      </div>
    </div>
  )
}
const root = createRoot(document.getElementById('root'))
root.render(<App />)
export { root }
