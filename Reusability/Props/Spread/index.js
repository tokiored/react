import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./Button"
import { FcGoogle } from "react-icons/fc"

function App() {
  return (
    <main>
      <Button variant style={{color: "green"}} onClick={() => console.log("Logging in...")}>
        <FcGoogle />
        Log in with Google
      </Button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);