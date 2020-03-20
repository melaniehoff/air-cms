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

        <div class="Key">
            <div class="keyLine">
              <div class="bullet Red-Fill"></div> <span> Community Checkins</span>
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


        <header className="App-header">
      	<img src={pub + 'cloud9-logo.png'} />

      </header>
      <GetOnlinePosts/> 
      
      <div id="MainElements" >
        <div id="MainElements" class="about-bubble">
          <div>
          <h3>About</h3>
          <p>Join Us &amp; lets share stories, strategies, wisdom, sweetness, &amp; online space Now is a time fortify our networks of care &lt;3 We will be holding free online programs with you for you</p>
          </div>
        </div>
        <div id="MainElements" class="donate-bubble">
          <div>
          <h3>Donate</h3>
          <p>We are gathering funds // taking donations in these sessions to pay // uplift community who are being impacted by this pandemic. Support!</p>
          </div>
        </div>
        <div id="MainElements" class="guidelines-bubble Orange-Outline">
          <div>
          <h3>Community Guidelines</h3>
          <p>We are crowdsourcing community agreements with our Cloud9 community to make sure our efforts during this virus are as healthy, honest and materially constructive as they would be in any physical space we would hold together &lt;33</p>
          </div>
        </div>
        <div id="MainElements" class="contribute-bubble">
          <h3>Contribute</h3>
          <p></p>
        </div>
        <div id="MainElements" class="resources-bubble">
          <h3>Resources</h3>
          <p></p>
        </div>
      </div>

      {/* <GetMainElements/> */}
      </div>




    );
  }
}

export default App;
