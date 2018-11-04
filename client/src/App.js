import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import { Button } from 'semantic-ui-react';

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

  onStop = (recordedBlob) => {
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
        <br />
        <Button onClick={this.startRecording} content='Start'/>
        <Button onClick={this.stopRecording} content='Stop'/>
      </div>
    );
  }
}