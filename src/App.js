import React from 'react';
import logo from './logo.svg';
import './App.css';

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
          <img src="https://lh3.googleusercontent.com/proxy/QN7EC4e_6Mv1LkWEv2J1RzM41jEg506hbbhlnW13HH5ELdl4udTvpFdXvWeTx9veNx4G3NwqfsUAsg77YH9iWhib-yTa1o_soWUIBzXpxdAxkMAz2FTt9d36QnNRcZZ_LM3j9ZUFOuOBgJ0yGKUbsSIsuUqWHbC6rUoW" className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
