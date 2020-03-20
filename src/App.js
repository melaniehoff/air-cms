import React from 'react';
// import logo from './logo.svg';
// import poster from '../public/cloud9.png';
import './App.css';
import GetOnlinePosts from './components/OnlinePosts/GetOnlinePosts';

const pub = process.env.PUBLIC_URL;

class App extends React.Component {

componentDidMount() {
        fetch(".netlify/functions/lambda")
        .then(function(response) {
//           console.log(response)
          return response.json();
        })
          .then( (data) => {
          //omits projects tagged as private
            this.setState({
                isLoaded : true,
                posts : data
            });
//           console.log(data)

        }).catch(err => {
			 this.setState({
                isLoaded: true,
                err
            });
			console.log(err)
		});
    }

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
      <GetOnlinePosts/>




      {/* NAVIGATION */}
      <div id="MainElements" >

        <a href="#About">
          <div id="MainElements" class="about-bubble bubble Blue-Outline">
            <div>
            <h5 class="light">About</h5>
            <p>Join Us &amp; lets share stories, strategies, wisdom, sweetness, &amp; online space Now is a time fortify our networks of care &lt;3 We will be holding free online programs with you for you. <u><i>Learn more!</i></u></p>
            </div>
          </div>
        </a>

        <a href="">
          <div id="MainElements" class="donate-bubble bubble Green-Outline">
            <div>
            <h5 class="light">Donate</h5>
            <p>We are gathering funds // taking donations in these sessions to pay // uplift community who are being impacted by this pandemic. <u><i>Support!</i></u></p>
            </div>
          </div>
        </a>

        <a href="#Guidelines">
          <div id="MainElements" class="guidelines-bubble Orange-Outline bubble">
            <div>
            <h5 class="light">Community Guidelines</h5>
            <p>We are crowdsourcing community agreements with our Cloud9 community to make sure our efforts during this virus are as healthy, honest and materially constructive as they would be in any physical space we would hold together &lt;33</p>
            </div>
          </div>
        </a>

        <a href="#Committees">
          <div id="MainElements" class="contribute-bubble bubble Pink-Outline">
            <h5 class="light">Contribute</h5>
          </div>
        </a>

        <a href="#Resources">
          <div id="MainElements" class="resources-bubble bubble Red-Outline">
            <h5 class="light">Resources</h5>
          </div>
        </a>

        <a href="#Calendar">
          <div id="MainElements" class="calendar-bubble bubble Yellow-Outline">
            <h5 class="light">Calendar</h5>
          </div>
        </a>

      </div>




      {/* <GetMainElements/> */}
      </div>




    );
  }
}

export default App;
