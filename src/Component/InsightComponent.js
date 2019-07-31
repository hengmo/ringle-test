import React from 'react';

const InsightComponent = (props) => {
  const { fontSize, isEnglish, summary_eng, summary_kor, toggleLanguage, fontSizeHandler } = props;
  return (
    <div className="insight-content" style={{ fontSize: `${fontSize}rem` }}>
      <div className="main-content-tools">
        <div className={isEnglish ? "btn-translate" : "btn-translate-active"} onClick={toggleLanguage}>{isEnglish ? "Korean" : "English"}</div>
        <div className="btn-minus" value="-" onClick={fontSizeHandler}><i className="fas fa-minus" style={{ pointerEvents: 'none', }}></i></div>
        <div className="btn-plus" value="+" onClick={fontSizeHandler}><i className="fas fa-plus" style={{ pointerEvents: 'none', }}></i></div>
      </div>
      {isEnglish ? (<div className="insight-content-eng" dangerouslySetInnerHTML={{__html: summary_eng}} />) : (<div className="insight-content-kor" dangerouslySetInnerHTML={{__html: summary_kor}}/>)}
    </div>
  )
}

export default InsightComponent;