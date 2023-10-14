import React from 'react';
import {Header} from './components/Header';
import {Body} from './components/Body';
import {Footer} from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header title={'Header title'}/>
      <Body titleForBody={'New Body'} />
      <Footer/>
    </div>
  );
}

export default App;
