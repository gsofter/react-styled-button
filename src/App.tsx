import React from 'react'
import logo from './logo.svg'
import './App.css'
import { SFButton } from './components/Buttons'

function App() {
  return (
    <div className="App">
      <h1> Style Component Testing </h1>
      <SFButton
        type="primary"
        text="Primary Button"
        action={() => alert('Primary Button')}
      />
      <SFButton
        type="secondary"
        text="Secondary Button"
        action={() => alert('Secondary Button')}
      />
      <SFButton
        type="danger"
        text="danger Button"
        action={() => alert('Danger Button')}
      />
      <SFButton
        disabled
        type="danger"
        text="Disabled Danger Button"
        action={() => alert('Danger Button')}
      />
    </div>
  )
}

export default App
