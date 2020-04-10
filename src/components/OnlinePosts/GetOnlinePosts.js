import React, { Component } from 'react';
import GetMainElements from '../MainElements/GetMainElements';
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
          // console.log('Committee Records', data.records)
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
            const url = fields.Url;
            const linkname = fields.LinkName;
            // Here, we are taking the data we pulled from the object and rendering them
            // with a JSX element!
            // Note that you need to provide a unique key for each element that you create
            // through an loop like this or React will give a warning.
            return (
                <div key={id}>

                    <h4>{committee}</h4>

                    <p className="Light-Text" dangerouslySetInnerHTML={{ __html: description }} />
                    <div className="footer">
                      <div className="footerLeft"></div>
                      <div className="footerRight"> <a href={url} target="_blank" className="joinLight">{linkname}</a> </div>
                    </div>
                    <div className="clear"></div>
                    <div className="break"></div>
                </div>
            );
        });
        // We're rendering the array of committeeElements in our final output!
        // Instead of rendering the variable, we could also have put the entire map call
        // into the brackets inside of this div to produce the same effect. Up to you!
        //  <p className="Light-Text" dangerouslySetInnerHTML={{ __html:{description}}}/>
        return(




              <div id="CommitteesInfo">
                <div className="break"></div>
                <h4 id="propose">↪ Propose a Session</h4>
                <p className="Light-Text"> Join us in sharing stories, strategies, wisdom, sweetness, & online space. Now is a time fortify our networks of care. Proposal ideas include: ways of coping and caring for others, movement meditations, DJ sets, cooking classes or the thing you were gonna do that got cancelled. Send us your proposals before April 15th for the next round!
                </p>
                <div className="footer">
                  <div className="footerLeft"></div>
                  <div className="footerRight"> <a href="https://chinares.wufoo.com/forms/cloud-9/" target="_blank" className="joinLight">Submit</a> </div>
                </div>
                <div className="clear"></div>

                <div className="break"></div>

              <h1 id="committees-header">Committees</h1>
              {/* <p id="CommitteeDesc">CLOU9 is a living collection of committees made up of collaborators from all over the world. Reach out to [email] if you'd like to join us.</p> */}
                  {committeeElements}
          <div id="credits">
          <p>This website was made by (alphabetically), <br/>
          <a href="https://aarati.me/">Aarati Akkapeddi</a><br/>
          <a href="https://melanie-hoff.com/">Melanie Hoff</a><br/>
          <a href="https://oross.net/">Olivia Ross</a><br/>
          <a href="https://zai.zone/">Zainab Aliyu</a><br/><br/>
          <i>Special thanks to Agnes Cameron, Bomani McClendon, & Dan Taeyoung.</i>
          </p>

          </div>
              </div>

        );
    }
  }
  export default GetOnlinePosts;
