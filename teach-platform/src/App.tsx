import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Excalidraw } from "@excalidraw/excalidraw";

function App() {

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", width: "100vw" }}>
      <div style={{ height: "80%", width: "80%" }}>
        <Excalidraw />
      </div>
    </div>
  )
}

export default App