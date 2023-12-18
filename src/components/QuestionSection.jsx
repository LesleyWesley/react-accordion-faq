import React from "react"

function QuestionSection(props) {

  const [open, setOpen] = React.useState(false)

  const styles = {
    backgroundImage: open ? `url("../src/assets/icon-minus.svg")` : `url("../src/assets/icon-plus.svg")`
  }

  function toggle() {
    setOpen(prevOpen => !prevOpen)
  }

  return (
    <div className="single-question">
        <div className="question-heading">
            <h2>{props.question.question}</h2>
            <button type="button" onClick={toggle} style={styles}></button>
        </div>
        {open &&
          <p className="answer">
            {props.question.answer}
          </p>
        }
    </div>
  )
}

export default QuestionSection
