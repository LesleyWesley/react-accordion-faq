import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx"
import QuestionSection from "./components/QuestionSection.jsx"

function App() {
 return (
   <div className="app">
      <Header />
      <QuestionSection />
   </div>
 )
}

export default App
