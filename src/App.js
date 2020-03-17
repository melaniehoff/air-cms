import React from 'react';
// import logo from './logo.svg';
// import poster from '../public/cloud9.png';
import './App.css';
const pub = process.env.PUBLIC_URL;

class App extends React.Component {

componentDidMount() {
        fetch(".netlify/functions/lambda")
        .then(function(response) {
          console.log(response)
          return response.json();
        })
          .then( (data) => {
          //omits projects tagged as private
          console.log(data)
        }).catch(err => {console.log(err)});
    }

render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pub + 'cloud9.png'} alt="poster" />
          <p>
           Learning how to do this.
          </p>
          <a className="App-link" href="http://www.bufubyusforus.com/" target="_blank" rel="noopener noreferrer">~~Learning~~
          </a>
        </header>
      </div>
    );
  }
}

export default App;
