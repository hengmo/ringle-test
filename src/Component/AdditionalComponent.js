import React from 'react';

const AdditionalComponent = (props) => {
  const { article, video } = props;
  return (
    <div className="additional-content">
      <div className="additional-title">Videos</div>
      <div className="youtubes">
      {/* 이 컴포넌트의 페이지로 넘어올 때 비디오 화면의 화질이 좋은 화면으로 렌더링되어 렌더링 속도가 좀 더딥니다. 화질을 낮춰 렌더링 될 수 있게 만들면 더 좋을 것 같습니다.  */}
        <iframe title={video[0].title} className="youtube-iframe" allow="accelerometer" src="https://www.youtube.com/embed/JQbjS0_ZfJ0?enablejsapi=1&origin=https%3A%2F%2Fwww.ringleplus.com&widgetid=1 " frameBorder="0" allowFullScreen="1" width="100%" height="390px" />
        <iframe title={video[1].title} className="youtube-iframe" allow="accelerometer" src="https://www.youtube.com/embed/mmP1aHJjJ-U?enablejsapi=1&origin=https%3A%2F%2Fwww.ringleplus.com&widgetid=2" frameBorder="0" allowFullScreen="1" width="100%" height="390px" />
        <iframe title={video[2].title} className="youtube-iframe" allow="accelerometer" src="https://www.youtube.com/embed/zm1cPHZbDPI?enablejsapi=1&origin=https%3A%2F%2Fwww.ringleplus.com&widgetid=3" frameBorder="0" allowFullScreen="1" width="100%" height="390px" />
      </div>
      <div className="additional-title">Articles</div>
      <div className="articles">
        {article.map(article => {
          return (
            <div key={article.id}>
              <a  href={article.url} rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none' }}>
                <div className="article-box">
                  <div className="article-title">{article.title}</div>
                  <div className="article-btn"><i className="fas fa-chevron-right"></i></div>
                </div>
              </a>
              <div className="line" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AdditionalComponent;