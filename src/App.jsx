import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from "./data.json"
import Header from "./components/Header.jsx"
import QuestionSection from "./components/QuestionSection.jsx"


function App() {


  const questionArray = data.map(singleQuestion => {
    return (
      <QuestionSection
        key={singleQuestion.id}
        question={singleQuestion}
      />
    )
  })
 return (
   <div className="app">
      <Header />
      <div className="single-question-container">
          {questionArray}
      </div>
   </div>
 )
}

export default App
