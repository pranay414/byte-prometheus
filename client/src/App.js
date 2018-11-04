import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import { Button, Grid, Menu } from 'semantic-ui-react';
import axios, { post } from 'axios';

import './styles.css';

const Header = () => {
  return (
    <Menu borderless size='massive' inverted>
      <Menu.Item>
        Prometheus | Voice Recorder
        </Menu.Item>
    </Menu>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      audio: null,
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
      audio: recordedBlob
    });
    console.log('recordedBlob is: ', recordedBlob);
  }

  saveToDB = () => {
    const endpoint = '/api/save';
    var formData = new FormData();
    formData.append('audio', this.state.audio.blob);
    console.log('Sending POST request to server.');
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    post(endpoint, formData, config)
    .then(() => console.log('Sent successfully.'))
    .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.audio);
    return (
      <div>
        <Header />
        <Grid centered>
          <Grid.Row>
            <ReactMic
              record={this.state.record}
              className="sound-wave"
              onStop={this.onStop}
              onData={this.onData}
              strokeColor="#000000"
              backgroundColor="#FF4081" />
          </Grid.Row>
          <Grid.Row>
            <Button onClick={this.startRecording} content='Start' />
            <Button onClick={this.stopRecording} content='Stop' style={{ marginLeft: '1em', marginRight: '1em' }} />
            <Button onClick={this.saveToDB} content='Save' />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}