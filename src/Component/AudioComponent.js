import React from 'react';
import queryString from 'query-string';
import './Audio.css';

// 쿼리스트링 파싱 모듈을 사용하여 쿼리스트링으로 넘어온 mp3 url을 사용합니다.
const AudioComponent = (props) => {
  const recordUrl = JSON.stringify(queryString.parse(props.location.search));
  return (
    <div className="audio-container">
      <div className="audio-box">
        <audio controls="controls">
          <source src={recordUrl} type="audio/mp3" />
        </audio>
      </div>
    </div>
  )
};

export default AudioComponent