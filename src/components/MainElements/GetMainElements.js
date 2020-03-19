import React, { Component } from 'react';
import './GetMainElements.css';
class GetMainElements extends Component {
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
          console.log('Mount Records', data.records)
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

            return(
                <div>
                    
                </div>
            );
        }
    }

  export default GetMainElements;