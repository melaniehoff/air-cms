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
            Previous
          </div>
        </div>
        <div className="col col-center">
          <span>{ format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">Next </div>
        </div>
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

  	// console.log("YOOOOOO", this.props.calendarRecords[0].fields.StartDateTime)
  	// console.log("YOOOOOO", parseISO(this.props.calendarRecords[0].fields.StartDateTime))

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


    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        let eventlinks = [];
        let eventNames = ""


	  	this.props.calendarRecords.forEach((element) => {
	  		if(isSameDay(day, parseISO(element.fields.StartDateTime))) {
	  			// console.log("there is an event on this day: ", day, "and event is ", element)
	  			eventNames += element.fields.Event + " "
          let e_fields = element.fields
          let start_time = parseISO(e_fields.StartDateTime).toString()
          let start_time_formatted = format(
            parseISO(e_fields.StartDateTime),
            "h a"
          )

	         eventlinks.push(

                <div
                  className={`eventlink`}
                  // id={type}
                  key={day + element.id}
                  onClick={() => {
                    let eb = document.getElementsByClassName("eventbox");
                    for (i = 0; i < eb.length; i++) {
                      eb[i].classList.remove('on')
                    }
                    let wizard = document.getElementById(element.id);
                    if(wizard.classList[1]){
                      wizard.classList.remove('on')
                      console.log('mew')
                    } else {
                      wizard.classList.add('on')
                      console.log(wizard.classList[1])
                    }

                  }}
                  >
                  { element.fields.Event } 
                  <span className="gridStartTime">
                  { " " + start_time_formatted } 
                  </span>
                </div>
        );
	  		}

	  	});

        days.push(
          <div
            className={`col cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            // id={formattedDate}
            key={day}
            onClick={() => {
            console.log({selectedDate});
            }}

          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            {eventlinks}
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


// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS
// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS
// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS
// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS
// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS
// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS
// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS
// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS

  renderPopups() {


    const { currentMonth, selectedDate } = this.state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];

    let eventboxes = [];
    let day = startDate;
    let formattedDate = "";
    let eventNames = "";
	this.props.calendarRecords.forEach((element) => {

	  	eventNames += element.fields.Event + " "


	  	 eventboxes.push(
          <div
            className={`eventbox`}
            id={element.id}
            key={day + element.id}
          >
            <a className="eventbox-close"
               onClick={() => {
                    let wizard = document.getElementById(element.id);
                    wizard.classList.remove('on')
                  }}
            >x</a>
            { element.fields.Event }
          </div>
        );


	});

    return <div className="eventboxes">{eventboxes}</div>;
  }

// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS
// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS
// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS
// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS
// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS
// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS
// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS
// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS// POPUPS



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

                <div>
                  LOADING
                </div>

        );
    } else {
	    return (
        <div className="calendarContainer">
	      <div className="calendar">
          {this.renderHeader()}

          {/* CALENDAR KEY */}
          <div className="Key">
              <div className="keyLine">
                <div className="bullet Red-Fill"></div> <span> Community Check-ins</span>
                <div className="bullet Orange-Fill"></div> <span> Meditations</span>

                <div className="bullet Yellow-Fill"></div> <span> Skillshares</span>
                <div className="bullet Green-Fill"></div> <span> Movement</span>
                <div className="bullet Blue-Fill"></div> <span> Nightlife</span>

                <div className="bullet Purple-Fill"></div> <span> Frontline PSAs</span>
                <div className="bullet Pink-Fill"></div> <span> Digital Security</span>
              </div>
          </div>



	        {this.renderDays()}
	        {this.renderCells()}
	      </div>
            {this.renderPopups()}
        </div>
	    );
	}
  }
}

export default GetCalendarGrid;
