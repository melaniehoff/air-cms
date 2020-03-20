import React, { Component } from 'react';
import '../components.css';
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
                    <div class="break"></div>

                    <h3>{committee}</h3>
                    <p class="Light-Text">{description}</p>


                </div>
            );
        });
        // We're rendering the array of committeeElements in our final output!
        // Instead of rendering the variable, we could also have put the entire map call
        // into the brackets inside of this div to produce the same effect. Up to you!
        return(

            <div class="Content">


              <div id="Calendar">
                <h1>This Week</h1>
                <h2>3/19</h2> <h2>—</h2> <h2>3/26</h2>

                <div id="CalendarLink" class="White-Fill">


                    <div class="footer">

                      <div class="footerLeft">
                        <h5>View Full Calendar</h5>
                      </div>

                      <div class="footerRight">
                        <span class="arrow">↝</span>
                      </div>

                      <div class="clear"> </div>
                    </div>

                </div>


                <div class="break"></div>
                <h3>Monday</h3>

                <table id="Event" class="Red-Fill">
                  <tr>
                    <td class="accordion">
                      <details>
                          <summary class="eventTitle">
                            <h5>Time</h5>
                            <h4>Name of session with Facilitator</h4>
                          </summary>
                          <div class="content EventInfo">
                              <p class="Event">About the sesh here this is a time for all of us to utilize our platforms to make sure folks are getting access to the information and resources they need! We want to uplift the incredible work folks in our communities are doing already. About the sesh here this is a time for all of us to utilize our platforms to make sure folks are getting access to the information and resources they need! We want to uplift the incredible work folks in our communities are doing already.
                              </p>
                              <div class="footer">
                                  <div class="footerLeft">
                                    <h5>Venmo <span>@venmouser</span></h5>
                                  </div>
                                  <div class="footerRight">
                                    <a href="LINK" class="join">
                                      Join Session
                                    </a>
                                  </div>
                                  <div class="clear"> </div>
                              </div>
                          </div>
                      </details>
                    </td>
                  </tr>
                </table>

                <table id="Event" class="Yellow-Fill">
                  <tr>
                    <td class="accordion">
                      <details>
                          <summary class="eventTitle">
                            <h5>Time</h5>
                            <h4>Name of session with Facilitator</h4>
                          </summary>
                          <div class="content EventInfo">
                              <p class="Event">About the sesh here this is a time for all of us to utilize our platforms to make sure folks are getting access to the information and resources they need! We want to uplift the incredible work folks in our communities are doing already. About the sesh here this is a time for all of us to utilize our platforms to make sure folks are getting access to the information and resources they need! We want to uplift the incredible work folks in our communities are doing already.
                              </p>
                              <div class="footer">
                                  <div class="footerLeft">
                                    <h5>Venmo <span>@venmouser</span></h5>
                                  </div>
                                  <div class="footerRight">
                                    <a href="LINK" class="join">
                                      Join Session
                                    </a>
                                  </div>
                                  <div class="clear"> </div>
                              </div>
                          </div>
                      </details>
                    </td>
                  </tr>
                </table>





                <div class="break"></div>
                <h3>Monday</h3>
                <h2>3/19</h2>

                <table id="Event" class="Green-Fill">
                  <tr>
                    <td class="accordion">
                      <details>
                          <summary class="eventTitle">
                            <h5>Time</h5>
                            <h4>Name of session with Facilitator</h4>
                          </summary>
                          <div class="content EventInfo">
                              <p class="Event">About the sesh here this is a time for all of us to utilize our platforms to make sure folks are getting access to the information and resources they need! We want to uplift the incredible work folks in our communities are doing already. About the sesh here this is a time for all of us to utilize our platforms to make sure folks are getting access to the information and resources they need! We want to uplift the incredible work folks in our communities are doing already.
                              </p>
                              <div class="footer">
                                  <div class="footerLeft">
                                    <h5>Venmo <span>@venmouser</span></h5>
                                  </div>
                                  <div class="footerRight">
                                    <a href="LINK" class="join">
                                      Join Session
                                    </a>
                                  </div>
                                  <div class="clear"> </div>
                              </div>
                          </div>
                      </details>
                    </td>
                  </tr>
                </table>


                <div class="break"></div>
                <h3>Tuesday</h3>
                <h2>3/20</h2>

                <table id="Event" class="Blue-Fill">
                  <tr>
                    <td class="accordion">
                      <details>
                          <summary class="eventTitle">
                            <h5>Time</h5>
                            <h4>Name of session with Facilitator</h4>
                          </summary>
                          <div class="content EventInfo">
                              <p class="Event">About the sesh here this is a time for all of us to utilize our platforms to make sure folks are getting access to the information and resources they need! We want to uplift the incredible work folks in our communities are doing already. About the sesh here this is a time for all of us to utilize our platforms to make sure folks are getting access to the information and resources they need! We want to uplift the incredible work folks in our communities are doing already.
                              </p>
                              <div class="footer">
                                  <div class="footerLeft">
                                    <h5>Venmo <span>@venmouser</span></h5>
                                  </div>
                                  <div class="footerRight">
                                    <a href="LINK" class="join">
                                      Join Session
                                    </a>
                                  </div>
                                  <div class="clear"> </div>
                              </div>
                          </div>
                      </details>
                    </td>
                  </tr>
                </table>

                <table id="Event" class="Pink-Fill">
                  <tr>
                    <td class="accordion">
                      <details>
                          <summary class="eventTitle">
                            <h5>Time</h5>
                            <h4>Name of session with Facilitator</h4>
                          </summary>
                          <div class="content EventInfo">
                              <p class="Event">About the sesh here this is a time for all of us to utilize our platforms to make sure folks are getting access to the information and resources they need! We want to uplift the incredible work folks in our communities are doing already. About the sesh here this is a time for all of us to utilize our platforms to make sure folks are getting access to the information and resources they need! We want to uplift the incredible work folks in our communities are doing already.
                              </p>
                              <div class="footer">
                                  <div class="footerLeft">
                                    <h5>Venmo <span>@venmouser</span></h5>
                                  </div>
                                  <div class="footerRight">
                                    <a href="LINK" class="join">
                                      Join Session
                                    </a>
                                  </div>
                                  <div class="clear"> </div>
                              </div>
                          </div>
                      </details>
                    </td>
                  </tr>
                </table>


              </div>





              <div class="bigBreak"></div>
              <div id="About">
                <h1>About</h1>
                  <p>ho hum</p>
              </div>




              <div class="bigBreak"></div>
              <div id="Guidelines">
                <h1>Community Guidelines</h1>
                  <p>ho hum</p>
              </div>






              <div class="bigBreak"></div>
              <div id="Resources">
                <h1>Resources</h1>
                  <p>ho hum</p>
              </div>

              <div class="bigBreak"></div>
              <div id="Committees">
                <h1>Contribute</h1>
                  {committeeElements}
              </div>



            </div>
        );
    }
  }
  export default GetOnlinePosts;
