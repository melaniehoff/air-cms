import React, { Component } from 'react';
import '../Components.css';
import Media from 'react-media';
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
          console.log('Committee Records', data.records)
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
      // An alternative way to do this that's preferred in most style guides is:
        // const { records } = this.state;
        // See the object destructuring section:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
      const { records } = this.state;
        // This map call produces an array of <div> elements. Alternatively, we could use another
        // type of loop such a for-loop to do this, but React style guides prefer these
        // functional approaches.
        const committeeElements = records.map(record => {
            // An alternative way to do this that's preferred in most style guides is:
            // const { fields, id } = record;
            const id = record.id;
            const fields = record.fields;
            // You can also rename in the destructuring call with:
            // const {Description: description, Committees: committees} = fields;
            // https://wesbos.com/destructuring-renaming/
            const description = fields.Description;
            const committee = fields.Committees;
            // Here, we are taking the data we pulled from the object and rendering them
            // with a JSX element!
            // Note that you need to provide a unique key for each element that you create
            // through an loop like this or React will give a warning.
            return (
                <div key={id}>
                    <div className="break"></div>

                    <h3>{committee}</h3>
                    <p className="Light-Text">{description}</p>


                </div>
            );
        });
        // We're rendering the array of committeeElements in our final output!
        // Instead of rendering the variable, we could also have put the entire map call
        // into the brackets inside of this div to produce the same effect. Up to you!
        return(

            <div className="Content">

          <div className="bigBreak"></div>
              <div id="About">
                <h1>About</h1>
                  <p>ho hum</p>
              </div>




              <div className="bigBreak"></div>
              <div id="Guidelines">
                <h1>Community Guidelines</h1>
                  <p>ho hum</p>
              </div>






              <div className="bigBreak"></div>
              <div id="Resources">
                <h1>Resources</h1>
                  <p>ho hum</p>
              </div>

              <div className="bigBreak"></div>
              <div id="Committees">
                <h1>Contribute</h1>
                  {committeeElements}
              </div>



            </div>
        );
    }
  }
  export default GetOnlinePosts;
