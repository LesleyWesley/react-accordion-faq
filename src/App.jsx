import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from "./data.json"
import Header from "./components/Header.jsx"
import QuestionSection from "./components/QuestionSection.jsx"


function App() {
 return (
   <div className="app">
      <Header />
      <div className="single-question-container">
          <QuestionSection />
      </div>
   </div>
 )
}

export default App
