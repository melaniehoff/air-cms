import React, { Component } from 'react';
// import '../Components.css';
import './Grid.css';
import Media from 'react-media';
import { format, startOfWeek, parse, parseISO, endOfWeek, addDays, startOfMonth, endOfMonth, addMonths, subMonths, isSameMonth, isSameDay } from "date-fns";

class GetCalendarGrid extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  renderHeader() {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header row flex-middle">

          <div className="col col-start">
            <div className="icon" onClick={this.prevMonth}>
              Prev
            </div>
          </div>
          <div className="col col-center">
            <span>{ format(this.state.currentMonth, dateFormat)}</span>
          </div>
          <div className="col col-end" onClick={this.nextMonth}>
            <div className="icon">Next </div>
          </div>

          <div className="clear"></div>


          <div className="Key">
              <div class="keyLine">
                <div class="bullet Red-Fill Meetup"></div> <span> Meetup</span>
                <div class="bullet Orange-Fill Film"></div> <span> Film</span>

                <div class="bullet Yellow-Fill Nightlife"></div> <span> Nightlife</span>
                <div class="bullet Green-Fill MovementMeditation"></div> <span> Movement / Meditation</span>
                <div class="bullet Teal-Fill KnowledgeShare"></div> <span> Knowledge Share</span>

                <div class="bullet Blue-Fill SongCircle"></div> <span> Song Circle</span>
                <div class="bullet Indigo-Fill Checkin"></div> <span> Check-in</span>
                <div class="bullet Purple-Fill CommunityCollab"></div> <span> Community Collab</span>
                <div class="bullet Pink-Fill FrontlinePSA"></div> <span> Frontline PSA</span>
              </div>
          </div>

          <div className="clear"></div>

      </div>
    );
  }


  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          { format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }


// CELLS // CELLS // CELLS // CELLS // CELLS
  // CELLS // CELLS // CELLS // CELLS // CELLS
    // CELLS // CELLS // CELLS // CELLS // CELLS
      // CELLS // CELLS // CELLS // CELLS // CELLS
        // CELLS // CELLS // CELLS // CELLS // CELLS

  renderCells() {


    function togglePopup(e, popupId) {

      /* check if e.target is the column itself or something inside of it*/
      if(popupId && ((' ' + e.target.className + ' ').indexOf(' ' + 'cell' + ' ') > -1)){
        var y = "popup" + popupId;
      } else {
        var y = "popup" + e.target.closest('.cell').id;
      }
      var x = document.getElementById(y);
      /* if another popup is open, hide it */
      if(x.querySelectorAll(".fullEvent").length > 0){
        let eb = document.getElementsByClassName("popup");
        Array.prototype.forEach.call(eb, function(element) {
             if(element.id != y){
                element.style.display = 'none'
              }
        });
        /* if this popup is already open, hide otherwise show */

          if((!x.contains(e.target)) || (e.target.classList[0] == 'close-popup')){
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }

      }

    }

    const { currentMonth, selectedDate } = this.state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];
    // const type = fields.EventType;

    let days = [];
    let day = startDate;
    let formattedDate = "";
    let formattedDateId = ""
    const divStyle = {
          display: 'none'
        };

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        formattedDateId = "popup" + day.toString().split(' ').join('');

        const cloneDay = day;
        let eventlinks = [];
        let eventDays = []
        let eventNames = ""
        let eventType = ""


	  	this.props.calendarRecords.forEach((element) => {
	  		if(isSameDay(day, parseISO(element.fields.StartDateTime))) {
	  			// console.log("there is an event on this day: ", day, "and event is ", element)
	  			eventNames += element.fields.Event + " "
          let e_fields = element.fields
          let start_time = parseISO(e_fields.StartDateTime).toString()
          let start_time_formatted = format(
            parseISO(e_fields.StartDateTime),
            "h:mm a"
          )
          let end_time_formatted = format(
            parseISO(e_fields.EndDateTime),
            "h:mm a"
          )
          eventType = e_fields.EventType

	         eventlinks.push(
                <div
                  className={`eventlink`}
                  // id={type}
                  key={day}
                  id={eventType[0]}
                  >

                  <h5 className="gridStartTime">
                  { " " + start_time_formatted }
                </h5>

                { element.fields.Event }

                </div>
        );

      let imageUrl = ""
      let eventbyline = element.fields.Event;
      console.log(element.fields.HostName,'mew')
      if(element.fields.HostName){
        eventbyline = eventbyline + ' with'
      }
      if ( element.fields.EventImage  == undefined) {
          imageUrl = undefined
          console.log(imageUrl)
        } else {
          imageUrl = element.fields.EventImage[0].url
          console.log(imageUrl)
        }

        var thisclass = element.fields.EventType[0];
        console.log(element.fields)
        var calStart = format(
            parseISO(element.fields.StartDateTime),
            "yyyMMdd:HHmmss"
          )
        var calEnd = format(
            parseISO(element.fields.EndDateTime),
            "yyyMMdd:HHmmss"
          )
        calStart = calStart.split(":").join("T");
        calEnd = calEnd.split(":").join("T");
       
         eventDays.push(
                <div
                  className={`fullEvent ${thisclass}`}
                  key={day}
                  // onClick={() => {
                  //   console.log(element.id)
                  // }}
                  >

                  <h5 className="gridStartTime">
                  { " " + start_time_formatted }
                  { " - " + end_time_formatted }
                  </h5>
                  <h4>{ eventbyline } <a href={ element.fields.HostSocialMediaUrlOrWebsite} target="_blank">{ element.fields.HostName}</a>
                 </h4>

                 <center> <img src=
                 {imageUrl}/> </center>

                 <p>
                  { element.fields.Description }
                </p>


                <div className="footer">

                   <div className="footerLeft">


                   </div>

                   <div className="footerRight">
                     <a href={ element.fields.StreamingLink} target="_blank" class="join">
                       Join Session
                     </a>

                     <a href={ element.fields.DonateLInk} target="_blank" class="join">
                       Donate
                     </a>

                     <a className='join' href={"https://www.google.com/calendar/render?action=TEMPLATE&text=" + element.fields.Event + "&details=" +"&location="+element.fields.StreamingLink + "&dates="+ calStart + '/' + calEnd}>Add to GCal</a>
                   </div>

                   <div className="clear"> </div>
                 </div>


                </div>
        );
	  		}

	  	});

        days.push(
          <div
            className={`col cell ${
              !isSameMonth(day, monthStart)
                ? ""
                : isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            id={day.toString().split(' ').join('')}
            key={day.toString().split(' ').join('')}
            onClick={e => togglePopup(e, e.target.id)}
            >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>

            <div className="dayevents">
          {eventlinks}
            </div>

            <div
            className="popup"
            style={divStyle}
            id={formattedDateId}
            >
              <h2>{formattedDate}</h2>

            <a
            className='close-popup'
            onClick={(e) => {
                    let wizard = document.getElementById(formattedDateId);
                    wizard.classList.remove('on')
                  }}
            >x</a>
          {eventDays}


          </div>
          </div>

        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

// CELLS // CELLS // CELLS // CELLS // CELLS
  // CELLS // CELLS // CELLS // CELLS // CELLS
    // CELLS // CELLS // CELLS // CELLS // CELLS
      // CELLS // CELLS // CELLS // CELLS // CELLS
        // CELLS // CELLS // CELLS // CELLS // CELLS



  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1)
    });
  };

  render() {

  	if(this.props.calendarRecords == undefined) {
        console.log("LOADING!!!!")
        return(

                <div id="load">
                  LOADING
                </div>

        );
    } else {
	    return (
        <div className="calendarContainer">
        <a href="/">
        <center><button>☁️</button></center>
        </a>
	      <div className="calendar">
          {this.renderHeader()}

          {/* CALENDAR KEY */}
          {/* <div class="Key">
              <div class="keyLine">
                <div class="bullet Red-Fill Meetup"></div> <span> Meetup</span>
                <div class="bullet Orange-Fill Film"></div> <span> Film</span>

                <div class="bullet Yellow-Fill Nightlife"></div> <span> Nightlife</span>
                <div class="bullet Green-Fill MovementMeditation"></div> <span> Movement / Meditation</span>
                <div class="bullet Teal-Fill KnowledgeShare"></div> <span> Knowledge Share</span>

                <div class="bullet Blue-Fill SongCircle"></div> <span> Song Circle</span>
                <div class="bullet Indigo-Fill Checkin"></div> <span> Check-in</span>
                <div class="bullet Purple-Fill CommunityCollab"></div> <span> Community Collab</span>
                <div class="bullet Pink-Fill FrontlinePSA"></div> <span> Frontline PSA</span>
              </div>
          </div> */}



	        {this.renderDays()}
	        {this.renderCells()}
	      </div>
        {/* {this.renderPopups()} */}
        </div>
	    );
	}
  }
}

export default GetCalendarGrid;
