import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import GetOnlinePosts from './components/OnlinePosts/GetOnlinePosts';
import GetMainElements from './components/MainElements/GetMainElements';
import GetMainElementsInfo from './components/MainElementsInfo/GetMainElementsInfo';
import GetCalendar from './components/Calendar/GetCalendar';
const pub = process.env.PUBLIC_URL;
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        err : null,
        isLoaded : false,
        records : []
    };
  }
  componentDidMount() {
      fetch(".netlify/functions/main")
    .then( response => response.json())
        .then( (data) => {
          this.setState({
              isLoaded : true,
              meow : data,
              records: data.records
          });
        console.log('MAIN (info) Records', data.records)
      })
    .catch(err => {
    this.setState({
              isLoaded: true,
              err
          });
    console.log(err)
  });
  }

render() {
    const { records } = this.state;
    return (
      <Router>
        <div className="App">
          {/* LOGO */}
          <header className="App-header">
            <img src={pub + 'cloud9-logo.png'} />
          </header>
          {/* CALENDAR SEPARATE PAGE */}
          <nav>
          <Link to="/calendar">Calendar</Link>
          </nav>
          {/* CONTENT */}


          {/* NAVIGATION */}
          <Switch>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/">
              <Home records={records} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
function Home(props) {
  return (
    <div>
      <div className="cloudbg">
        </div>
        <div className="Content">
          <GetMainElementsInfo records={props.records} />
          <GetOnlinePosts/>
         =<GetMainElements records={props.records}/>
        </div>
      </div>
  );
}
function Calendar() {
  return (
    <div>
    <div className="cloudbg"></div>
      <GetCalendar/>
      </div>

  );
}
export default App;