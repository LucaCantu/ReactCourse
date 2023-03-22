import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Title, TitleList } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <TitleList

        list={['Title 1', 'Title 2', 'Title 3']} 

        callback={(value:string) => alert(value)}

        listTitle="Lista"

        ></TitleList>
      </header>
    </div>
  );
}

export default App;
