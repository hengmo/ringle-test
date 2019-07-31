import React from 'react';
import './FileView.css';

const FileViewComponent = () => {
  return (
    <div className="f-main">
      <div className="f-title-box">
        <span className="f-main-title">Marver: Social anxietied in pop culture</span>
        <span className="f-main-subtitle">Marvel</span>
      </div>
      <div className="f-main-content">
        <iframe title="fileview" src="https://s3-ap-northeast-2.amazonaws.com/ringlecourseasia/pdf/1315/5ddfe4d7.pdf" className="f-main-iframe" />
      </div>
    </div>
  )
};

export default FileViewComponent