import React, { Component } from 'react';

class GetOnlinePosts extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            posts : []        
        };
    }

    componentDidMount() {
        fetch(".netlify/functions/lambda")
        .then(function(response) {
          console.log(response)
          return response.json();
        })
          .then( (data) => {
          //omits projects tagged as private
            this.setState({
                isLoaded : true,
                posts : data
            });
          console.log(data)

        }).catch(err => {
			 this.setState({
                isLoaded: true,
                err
            });
			console.log(err)
		});
    }

	render() {
     	const {err, isLoaded, records} = this.state;

        if(err){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
            	<div>huuuuuuu</div>

            );
        }
      
    }


  }
  
  export default GetOnlinePosts;