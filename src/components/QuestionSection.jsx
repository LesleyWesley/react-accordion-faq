import React from "react"

function QuestionSection(props) {

  console.log(props)

  return (
    <div className="single-question">
        <div className="question-heading">
            <h2>{props.question.question}</h2>
            <button type="button"></button>
        </div>
        <p className="answer">
          {props.question.answer}
        </p>
    </div>
  )
}

export default QuestionSection
