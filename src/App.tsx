import React from 'react';

interface TitleProps {
  text: string;
}

function Title(props: TitleProps) {
  return <h1>{props.text}</h1>
}

function App() {
  return (
    <div className="App">
      <Title text="Texto 1" />
      <Title text="Texto 2" />
      <Title text="Texto 3" />
      <Title text="Texto 4" />
    </div>
  );
}

export default App;
