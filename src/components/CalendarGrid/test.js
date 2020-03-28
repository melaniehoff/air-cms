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
            key={day}
          >
            { element.fields.Event }
          </div>
        );


	});

    return <div className="eventboxes">{eventboxes}</div>;
  }