import React, { Component } from 'react';
import '../components.css';
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


              <div id="Calendar">
                <h1>This Week</h1>
                <h2>3/19</h2> <h2>—</h2> <h2>3/26</h2>

                <div id="CalendarLink" className="White-Fill">


                    <div className="footer">

                      <div className="footerLeft">
                        <h5>View Full Calendar</h5>
                      </div>

                      <div className="footerRight">
                        <span className="arrow">↝</span>
                      </div>

                      <div className="clear"> </div>
                    </div>

                </div>


                <div className="break"></div>
                <h3>Monday</h3>

                <table id="Event" className="Red-Fill">
                  <tr>
                    <td className="accordion">
                      <details>
                          <summary className="eventTitle">
                            <h5>Time</h5>
                            <h4>Name of session with Facilitator</h4>
                          </summary>
                          <div className="content EventInfo">
                              <p className="Event">About the sesh here this is a time for all of us to utilize our platforms to make sure folks are getting access to the information and resources they need! We want to uplift the incredible work folks in our communities are doing already. About the sesh here this is a time for all of us to utilize our platforms to make sure folks are getting access to the information and resources they need! We want to uplift the incredible work folks in our communities are doing already.
                              </p>
                              <div className="footer">
                                  <div className="footerLeft">
                                    <h5>Venmo <span>@venmouser</span></h5>
                                  </div>
                                  <div className="footerRight">
                                    <a href="LINK" className="join">
                                      Join Session
                                    </a>
                                  </div>
                                  <div className="clear"> </div>
                              </div>
                          </div>
                      </details>
                    </td>
                  </tr>
                </table>

                <table id="Event" className="Yellow-Fill">
                  <tr>
                    <td className="accordion">
                      <details>
                          <summary className="eventTitle">
                            <h5>Time</h5>
                            <h4>Name of session with Facilitator</h4>
                          </summary>
                          <div className="content EventInfo">
                              <p className="Event">About the sesh here this is a time for all of us to utilize our platforms to make sure folks are getting access to the information and resources they need! We want to uplift the incredible work folks in our communities are doing already. About the sesh here this is a time for all of us to utilize our platforms to make sure folks are getting access to the information and resources they need! We want to uplift the incredible work folks in our communities are doing already.
                              </p>
                              <div className="footer">
                                  <div className="footerLeft">
                                    <h5>Venmo <span>@venmouser</span></h5>
                                  </div>
                                  <div className="footerRight">
                                    <a href="LINK" className="join">
                                      Join Session
                                    </a>
                                  </div>
                                  <div className="clear"> </div>
                              </div>
                          </div>
                      </details>
                    </td>
                  </tr>
                </table>





                <div className="break"></div>
                <h3>Monday</h3>
                <h2>3/19</h2>

                <table id="Event" className="Green-Fill">
                  <tr>
                    <td className="accordion">
                      <details>
                          <summary className="eventTitle">
                            <h5>Time</h5>
                            <h4>Name of session with Facilitator</h4>
                          </summary>
                          <div className="content EventInfo">
                              <p className="Event">About the sesh here this is a time for all of us to utilize our platforms to make sure folks are getting access to the information and resources they need! We want to uplift the incredible work folks in our communities are doing already. About the sesh here this is a time for all of us to utilize our platforms to make sure folks are getting access to the information and resources they need! We want to uplift the incredible work folks in our communities are doing already.
                              </p>
                              <div className="footer">
                                  <div className="footerLeft">
                                    <h5>Venmo <span>@venmouser</span></h5>
                                  </div>
                                  <div className="footerRight">
                                    <a href="LINK" className="join">
                                      Join Session
                                    </a>
                                  </div>
                                  <div className="clear"> </div>
                              </div>
                          </div>
                      </details>
                    </td>
                  </tr>
                </table>


                <div className="break"></div>
                <h3>Tuesday</h3>
                <h2>3/20</h2>

                <table id="Event" className="Blue-Fill">
                  <tr>
                    <td className="accordion">
                      <details>
                          <summary className="eventTitle">
                            <h5>Time</h5>
                            <h4>Name of session with Facilitator</h4>
                          </summary>
                          <div className="content EventInfo">
                              <p className="Event">About the sesh here this is a time for all of us to utilize our platforms to make sure folks are getting access to the information and resources they need! We want to uplift the incredible work folks in our communities are doing already. About the sesh here this is a time for all of us to utilize our platforms to make sure folks are getting access to the information and resources they need! We want to uplift the incredible work folks in our communities are doing already.
                              </p>
                              <div className="footer">
                                  <div className="footerLeft">
                                    <h5>Venmo <span>@venmouser</span></h5>
                                  </div>
                                  <div className="footerRight">
                                    <a href="LINK" className="join">
                                      Join Session
                                    </a>
                                  </div>
                                  <div className="clear"> </div>
                              </div>
                          </div>
                      </details>
                    </td>
                  </tr>
                </table>

                <table id="Event" className="Pink-Fill">
                  <tr>
                    <td className="accordion">
                      <details>
                          <summary className="eventTitle">
                            <h5>Time</h5>
                            <h4>Name of session with Facilitator</h4>
                          </summary>
                          <div className="content EventInfo">
                              <p className="Event">About the sesh here this is a time for all of us to utilize our platforms to make sure folks are getting access to the information and resources they need! We want to uplift the incredible work folks in our communities are doing already. About the sesh here this is a time for all of us to utilize our platforms to make sure folks are getting access to the information and resources they need! We want to uplift the incredible work folks in our communities are doing already.
                              </p>
                              <div className="footer">
                                  <div className="footerLeft">
                                    <h5>Venmo <span>@venmouser</span></h5>
                                  </div>
                                  <div className="footerRight">
                                    <a href="LINK" className="join">
                                      Join Session
                                    </a>
                                  </div>
                                  <div className="clear"> </div>
                              </div>
                          </div>
                      </details>
                    </td>
                  </tr>
                </table>


              </div>





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
