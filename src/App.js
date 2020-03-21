import React from 'react';
// import logo from './logo.svg';
// import poster from '../public/cloud9.png';
import './App.css';
import GetOnlinePosts from './components/OnlinePosts/GetOnlinePosts';
import GetMainElements from './components/MainElements/GetMainElements';
import GetMainElementsInfo from './components/MainElementsInfo/GetMainElementsInfo';

const pub = process.env.PUBLIC_URL;

class App extends React.Component {



render() {

    return (


      <div className="App">

        {/* LOGO */}
        <header className="App-header">
          <img src={pub + 'cloud9-logo.png'} />
        </header>



        {/* CALENDAR KEY */}
        <div class="Key">
            <div class="keyLine">
              <div class="bullet Red-Fill"></div> <span> Community Check-ins</span>
              <div class="bullet Orange-Fill"></div> <span> Meditations</span>
            </div>
            <div class="keyLine">
              <div class="bullet Yellow-Fill"></div> <span> Skillshares</span>
              <div class="bullet Green-Fill"></div> <span> Movement</span>
              <div class="bullet Blue-Fill"></div> <span> Nightlife</span>
            </div>
            <div class="keyLine">
              <div class="bullet Purple-Fill"></div> <span> Frontline PSAs</span>
              <div class="bullet Pink-Fill"></div> <span> Digital Security</span>
            </div>
        </div>




      {/* CONTENT */}
      <div className="Content">
      <GetMainElementsInfo/>
      <GetOnlinePosts/>
      </div>


      {/* NAVIGATION */}

      <GetMainElements/>

      </div>




    );
  }
}

export default App;
