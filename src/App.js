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
      <header className="App-header">
      	<img src={pub + 'cloud9-logo.png'} />

      </header>
      <GetOnlinePosts/>
      </div>




    );
  }
}

export default App;
