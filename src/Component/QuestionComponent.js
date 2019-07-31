import React from 'react';

const QuestionComponent = (props) => {
  const { toggleImgSize, questionContent, } = props;
  return (
    <div className="question-content">
      {questionContent.map((question, index) => {
        return (
          <div key={index}>
            <div className="qustion-content" >
              <div className="qustion-title">{`Q${index+1}`}</div>
              <div className="qustion-title">{question.title}</div>
              {question.imgUrl && (
                <div className={`question-img-box ${question.isBigSize ? '-active' : ''}`}>
                  <img className="question-img" src={question.imgUrl} alt={`question${index+1}`} width="100%" height="100%" onClick={() => toggleImgSize(index)}/>
                  <div className="question-plus-btn">{question.isBigSize ? "-" : "+"}</div>
                </div>
              )}
            </div>
            <div className="line" />
          </div>
        )
      })}
    </div>
  )
}

export default QuestionComponent;