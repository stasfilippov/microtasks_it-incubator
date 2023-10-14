import React from 'react';
// import {Header} from './components/Header';
// import {Body} from './components/Body';
// import {Footer} from './components/Footer';
import {NewComponent} from './components/New component';

const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]

function App() {
  return (
    <div className="App">
      {/*<Header title={'Header title'}/>*/}
      {/*<Body titleForBody={'New Body'} />*/}
      {/*<Footer/>*/}
        <NewComponent cars={topCars}/>
    </div>
  );
}

export default App;
