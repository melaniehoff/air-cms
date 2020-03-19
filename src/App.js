import React from 'react';
// import logo from './logo.svg';
// import poster from '../public/cloud9.png';
import './App.css';
import GetOnlinePosts from './components/OnlinePosts/GetOnlinePosts';
import GetMainElements from './components/MainElements/GetMainElements';

const pub = process.env.PUBLIC_URL;

class App extends React.Component {


render() {

    return (


      <div className="App">
      <header className="App-header">
      	<img src={pub + 'logo.png'} />

      </header>
      <GetOnlinePosts/>
      <GetMainElements/>
      </div>




    );
  } 
}

export default App;
