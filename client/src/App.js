import React, { Component } from 'react';
import { ReactMic } from 'react-mic';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      blob: null,
    }

  }

  startRecording = () => {
    this.setState({
      record: true
    });
  }

  stopRecording = () => {
    this.setState({
      record: false
    });
  }

  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  onStop(recordedBlob) {
    this.setState({
      blob: recordedBlob
    });
    console.log('recordedBlob is: ', recordedBlob);
  }

  render() {
    console.log(this.state.blob);
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081" />
        <br/>
        <button onClick={this.startRecording} type="button">Start</button>
        <button onClick={this.stopRecording} type="button">Stop</button>
      </div>
    );
  }
}