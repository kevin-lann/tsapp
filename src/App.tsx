import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <>
      <Button 
        themeColor="blue"
        padding={[12, 20]}
        style = {{
          margin: "20px",
          paddingTop: "80px",
          fontSize: "20pt",
          textAlign: "center"
        }}
      />
    </>
  );
}

export default App;
