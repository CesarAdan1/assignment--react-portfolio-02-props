import React from 'react';
import { eduList } from '../data/datasource';

class EduTitle extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return(
      <React.Fragment>
        {eduList.map(item =>
            <div className="degree">
              <h5 className="degree__institute">{ item.institute }</h5>
              <p className="degree__field">{ item.fieldOfStudy }</p>
              <p className="degree__dates">{ item.dates }</p>
            </div>
          )}
      </React.Fragment>
    );
  }
}

export default EduTitle;
