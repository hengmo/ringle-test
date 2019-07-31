import React, { Component } from 'react';
import './Main.css';
import InsightComponent from './InsightComponent';
import QuestionComponent from './QuestionComponent';
import AdditionalComponent from './AdditionalComponent';

//이 컴포넌트에서 Insight, Question, Additional 컴포넌트가 각가 보이게 됩니다.
class MainComponent extends Component {
  state = {
    content: {},
    active: 'Insight',
    fontSize: 2.2,
    isEnglish: true,
    //질문에 대한 콘텐트는 API에 안들어있어 state로 초기화 했습니다.
    questionContent: [
      { title: "Why did you pick this topic for today's class discussion?", imgUrl: "", isBigSize: false, },
      { title: "What is your favorite Marvel film and why?", imgUrl: "https://s3-ap-northeast-2.amazonaws.com/ringlecourseasia/img/1314/ccc5864f5f4e.jpg", isBigSize: false, },
      { title: "Do you think Iron Man is a successful superhero? What do you think are his main struggles throughout his films? Do you have any critiques of Iron Man, his story or his methods?", imgUrl: "https://s3-ap-northeast-2.amazonaws.com/ringlecourseasia/img/1314/135e1df9502c.jpg", isBigSize: false, },
      { title: "What is the concept of the “Other?” Where does it appear in the Iron Man films, or in any other Marvel film?", imgUrl: "", isBigSize: false, },
      { title: "What contemporary issues does Winter Soldier evoke in its plot? Where do you stand on these issues? Do you think the movie handled them appropriately?", imgUrl: "https://s3-ap-northeast-2.amazonaws.com/ringlecourseasia/img/1314/49e76ebb3109.png", isBigSize: false, },
      { title: "Aside from government spying, Big Data is an increasingly pervasive entity in our tech-reliant modern world. Do you think this is a cause for concern? Why or why not?", imgUrl: "https://s3-ap-northeast-2.amazonaws.com/ringlecourseasia/img/1314/a64af6475f15.bmp", isBigSize: false, },
      { title: "What is the central debate in Civil War? Are you on Team Iron Man or Team Cap? How might you criticize one or both of their arguments?", imgUrl: "https://s3-ap-northeast-2.amazonaws.com/ringlecourseasia/img/1314/d9629988547f.jpg", isBigSize: false, },
      { title: "The Sokovia Accords never come up as an issue in the MCU again. Imagine if the Bucky plot in Civil War never happened—how would you have resolved the debate between Iron Man and Captain America? What would have become of the Accords?", imgUrl: "", isBigSize: false, },
      { title: "In Ragnarok, who is Hela and what does she represent? What do you think it means, that her very source of power is Asgard itself, and Thor cannot defeat her without destroying Asgard?", imgUrl: "", isBigSize: false, },
      { title: "Why do you think the director decided to make Ragnarok a comedy, even when addressing such serious topics? Who are the jokes on? What is never joked about? Why use the genre of comedy when discussing issues of power?", imgUrl: "", isBigSize: false, },
      { title: "What is Afrofuturism? What elements of it can be seen in Black Panther? Why invoke Afrofuturism in the film at all?", imgUrl: "https://s3-ap-northeast-2.amazonaws.com/ringlecourseasia/img/1314/e5a49fcd89d5.jpg", isBigSize: false, },
      { title: "What is Killmonger's ambition in Wakanda? Do you think he's a sympathetic villain? At what point, if any, do you think he crosses the line?", imgUrl: "", isBigSize: false, },
      { title: "What statements does Captain Marvel make about gender? Do you think gender is a central aspect of Carol Danvers' story? Why or why not?", imgUrl: "https://s3-ap-northeast-2.amazonaws.com/ringlecourseasia/img/1314/e937f6218c87.png", isBigSize: false, },
      { title: "Are there Marvel movies not on the list that you would like to analyze and discuss?", imgUrl: "", isBigSize: false, },
    ],
    modalDisplay: false,
  };

  //insight, question, additional중 value로 넘어온 값을 state에 넣고 해당 컴포넌트를 보여줍니다.
  handleClick = e => {
    const value = e.target.getAttribute('value');
    this.setState({ active: value });
  };

  //-, + 클릭시 fontsize를 바꿔주는 함수입니다. 최대 3.05rem, 최소 0.75rem까지 작동됩니다.
  fontSizeHandler = e => {
    let fontSize = Number(this.state.fontSize.toFixed(2));
    let value = e.target.getAttribute('value');

    if(value === '+') {
      if(fontSize === 3.05) return;
      fontSize = Number((fontSize + 0.05).toFixed(2));
    }
    else if (value === '-') {
      if(fontSize === 0.75) return;
      fontSize = Number((fontSize - 0.05).toFixed(2));
    }
    this.setState({ fontSize: fontSize, })
  };

  //초기에 API에 접근하여 데이터를 가져옵니다.
  componentDidMount() {
    fetch("https://www.ringleplus.com/api/v1/course/fetch_course?course_id=1315&fbclid=IwAR1nw41cMNET1CQ9oaT4GR6IxyX_8e7cDWFK_YA5hSIw6rvDgLtDTqBnCxA")
    .then(res => res.json())
    .then(result => {
      this.setState({
        content: result.course,
      })
    })
  };

  toggleLanguage = () => {
    const { isEnglish } = this.state;
    this.setState({ isEnglish: !isEnglish, })
  };

  toggleImgSize = index => {
    let questionContent = Object.assign({}, this.state.questionContent);
    questionContent[index].isBigSize = !questionContent[index].isBigSize;
    questionContent = Object.values(questionContent);
    this.setState({
      questionContent: questionContent,
    });
  };

  modalHandler = () => {
    const { modalDisplay } = this.state;
    this.setState({ modalDisplay: !modalDisplay, })
  };

  render() {
    const { content: { article, id, image_long_url: imageUrl, mp3_link, subtitle1, subtitle2, summary, summary_eng, summary_kor, title, video }, active, fontSize, isEnglish, questionContent, modalDisplay} = this.state;
    return (
      <div className="main">
        <div className="main-body">
          <div className="head-container">
            <div className="head-img-box">
              <img src={imageUrl} alt="img test" width="148" height="182" />
              <span className="head-img-box-back" />
              <div className="head-img-box-title">{subtitle2}<br /><br />2019.07</div>
            </div>
            <div className="title-box">
              <div className="title-box-title">{title}</div>
              <div className="title-box-subtitle">{subtitle1}</div>
              <div className="title-box-btns">
              {/* 파일뷰어, 오디오 플레이 화면으로 전환시 id와 mp3_link를 쿼리스트링으로 전달합니다. 파일뷰어에서 pdf_link도 쓸 수 있도록 하여 파일뷰어 컴포넌트를 공용으로 쓰게 만들면 더 좋을것 같습니다. */}
              {/* mp3오디오 컴포넌트는 공용으로 쓸 수 있도록 만들었습니다. */}
                <a href={`/file_viewer?course_id=${id}`} rel="noopener noreferrer" target="_blank" className="title-box-btn">Download</a>
                <a href={`/audio_play?record_url=${mp3_link}`} rel="noopener noreferrer" target="_blank" className="title-box-btn">Mp3 Download</a>
                <div className="title-box-btn" onClick={this.modalHandler}>Summary</div>
              </div>
            </div>
          </div>
          <div className="tab-container">
          {/* 여기서 onClick메소드를 통해 어떤 컴포넌트를 보여줄지 정합니다. */}
            <div className={`tab ${active === 'Insight' ? '-active-tab' : ''}`} value='Insight' onClick={this.handleClick}>Insight</div>
            <div className={`tab ${active === 'Question' ? '-active-tab' : ''}`} value='Question' onClick={this.handleClick}>Question</div>
            <div className={`tab ${active === 'Additional' ? '-active-tab' : ''}`} value='Additional' onClick={this.handleClick}>Additional</div>
          </div>
          <div className="line" />
          {active === 'Insight' && <InsightComponent fontSize={fontSize} isEnglish={isEnglish} summary_eng={summary_eng} summary_kor={summary_kor} toggleLanguage={this.toggleLanguage} fontSizeHandler={this.fontSizeHandler} />}
          {active === 'Question' && <QuestionComponent questionContent={questionContent} toggleImgSize={this.toggleImgSize}/>}
          {active === 'Additional' && <AdditionalComponent article={article} video={video} />}
        </div>
        {/* modal부분은 창이 위에서 내려오는 방식, 뒷배경이 검은화면으로 바뀌는 방식은 구현을 못했습니다. */}
        <div id="myModal" className={`modal fade ${modalDisplay ? 'in' : ''}`}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title" style={{ margin: 0, lineHeight: 1.4 }}>Summary</h2>
                <span className="close" onClick={this.modalHandler}><i className="fas fa-times"></i></span>
              </div>
              <div className="modal-body" dangerouslySetInnerHTML={{__html: summary}} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainComponent;
