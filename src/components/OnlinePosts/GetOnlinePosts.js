import React, { Component } from 'react';

class GetOnlinePosts extends Component {
    constructor(props){
        super(props);
        this.state = {
            err : null,
            isLoaded : false,
            records : []        
        };
    }

    componentDidMount() {
        fetch(".netlify/functions/lambda")
		  .then( response => response.json())
          .then( (data) => {
            this.setState({
                isLoaded : true,
                meow : data,
                records: data.records
            });
          console.log(data.records)

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
     	// const {err, isLoaded, records} = this.state;
     	//console.log(this.state.records)
     	var records = this.state.records;
     	console.log(records[0])


            return(
            	<div>
            		{}
            	</div>

            );
        
      
    }


  }
  
  export default GetOnlinePosts;