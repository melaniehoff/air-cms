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
      </div>




    );
  }
}

export default App;
