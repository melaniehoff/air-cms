import React, { Component } from 'react';
import '../Components.css';

class GetMainElementsInfo extends Component {
  render() {
      // An alternative way to do this that's preferred in most style guides is:
        // const { records } = this.state;
        // See the object destructuring section:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
      const { records } = this.props;
        // This map call produces an array of <div> elements. Alternatively, we could use another
        // type of loop such a for-loop to do this, but React style guides prefer these
        // functional approaches.
        const mainElementsInfo = records.map(record => {
            // An alternative way to do this that's preferred in most style guides is:
            // const { fields, id } = record;
            const id = record.id;
            const fields = record.fields;
            // You can also rename in the destructuring call with:
            // const {Description: description, Committees: committees} = fields;
            // https://wesbos.com/destructuring-renaming/
            const text = fields.Text;
            const title = fields.Title;
            const info = fields.Info;
            const link = fields.Link;
            const linkNoHash = link.substring(1)
            const container = (linkNoHash + "Container");
            const url = fields.Url;
            const linkname = fields.LinkName;
            const urltwo = fields.UrlTwo;
            const linknametwo = fields.LinkNameTwo;
            const linkicon = fields.LinkIcon;
            // Here, we are taking the data we pulled from the object and rendering them
            // with a JSX element!
            // Note that you need to provide a unique key for each element that you create
            // through an loop like this or React will give a warning.
            return (
         <div key={id} id={container}>
              <div id={linkNoHash}>
                <h1>{title}</h1>
                  <p dangerouslySetInnerHTML={{ __html: info }} />

                  <a href={url} target="_blank" id="Link">{linkname} <span>{linkicon}</span></a>
                  <a href={urltwo} target="_blank" id="Link">{linknametwo} <span>{linkicon}</span></a>

              <div className="bigBreak"></div>
              </div>
              </div>
            );
        });
        //https://docs.google.com/document/u/0/d/1ksMK-gnnQLGigRNz5ajegWLegtqNJlO8qAp2L4QgS4c/mobilebasic
        // We're rendering the array of committeeElements in our final output!
        // Instead of rendering the variable, we could also have put the entire map call
        // into the brackets inside of this div to produce the same effect. Up to you!
        return(
            <div id="MainElementsInfo">
                {mainElementsInfo}
            </div>
        );
    }
    }
  export default GetMainElementsInfo;
