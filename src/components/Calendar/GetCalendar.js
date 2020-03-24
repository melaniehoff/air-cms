import React, { Component } from 'react';
import '../Components.css';
import Media from 'react-media';

class GetCalendar extends Component {

    constructor(props){
        super(props);
        this.state = {
            err : null,
            isLoaded : false,
            records : []
        };
    }
  componentDidMount() {
      fetch(".netlify/functions/calendar")
    .then( response => response.json())
        .then( (data) => {
          this.setState({
              isLoaded : true,
              meow : data,
              records: data.records
          });
        console.log('Calendar Records', data.records)
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
        const calendarRecords = records.map(record => {
            // An alternative way to do this that's preferred in most style guides is:
            // const { fields, id } = record;
            const id = record.id;
            const fields = record.fields;

            const event = fields.Event;
            const date = fields.Date;
            const start = fields.StartTime;
            const end = fields.EndTime;
            const description = fields.Description;
            const host = fields.Host
            const donateLink = fields.DonateLink;

            return (
                <div className="eventContainer" key={id}>
                <h4>{event}</h4>
                <p className="time">{start} – {end}</p>
                <p className="eventDescription">{description}</p>
                <div className="hostAndDonate">
                <p className="host">with {host}</p>
                <button>
                <a href={donateLink}>
                Venmo
                </a>
                </button>
                </div>
                <div className="break"></div>
                </div>
            );
        });
        // We're rendering the array of committeeElements in our final output!
        // Instead of rendering the variable, we could also have put the entire map call
        // into the brackets inside of this div to produce the same effect. Up to you!
        return(

              <div>
                  {calendarRecords}
              </div>

        );
    }
  }
  export default GetCalendar;










