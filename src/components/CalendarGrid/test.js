        var thisclass = element.fields.EventType[0];

         eventDays.push(
                <div
                  className={`fullEvent ${thisclass}`}
                  key={`x`}
                  // onClick={() => {
                  //   console.log(element.id)
                  // }}
                  >
                  { element.fields.Event } 
                  <h5 className="gridStartTime">
                  { " " + start_time_formatted } 
                  </h5>
                  <img src=
                  {imageUrl}/>
                </div>
        );