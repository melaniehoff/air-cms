import React, { Component } from 'react';
import '../Components.css';
import Media from 'react-media';

class GetCalendar extends Component {


  render() {



      if(this.props.calendarRecords == undefined) {
        console.log("LOADING!!!!")
        return(

                <div>
                  LOADING
                </div>

        );
      } else {

        
      console.log("GetCal Props", this.props)



        // An alternative way to do this that's preferred in most style guides is:
          // const { records } = this.state;
          // See the object destructuring section:
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        const { calendarRecords } = this.props;
          // This map call produces an array of <div> elements. Alternatively, we could use another
          // type of loop such a for-loop to do this, but React style guides prefer these
          // functional approaches.
          const calendarData = calendarRecords.map(record => {
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
                  Support {host}
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
                    {calendarData}
                </div>

          );
        }
      }
  }
  export default GetCalendar;










