import React from 'react';
import { Button, Input, message } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import './App.css';

const App = () => {
  const [text, setText] = React.useState('');

  const handleConvert = () => {
    if (!text) {
      message.error('Please enter some text.');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Text to Speech Converter</h1>
      <Input
        className="app-input"
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        suffix={
          <Button type="primary" icon={<AudioOutlined />} onClick={handleConvert}>
            Convert
          </Button>
        }
      />
    </div>
  );
};

export default App;
