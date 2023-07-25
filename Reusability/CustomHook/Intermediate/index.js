import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Toggle from "./components/Toggle/index"

function App() {
  return (
    <>
      <Star />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
