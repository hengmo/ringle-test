import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MainComponent from './Component/MainComponent';
import FileViewComponent from './Component/FileViewComponent';
import AudioComponent from './Component/AudioComponent';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="App">
        {/* 파일뷰어, MP3 페이지도 구현해보려 Route를 구성했습니다. */}
          <Route exact path="/" component={MainComponent} />
          <Route path="/file_viewer" component={FileViewComponent} />
          <Route path="/audio_play" component={AudioComponent} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
