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
      
      </div>
    );
  }
}

export default App;
