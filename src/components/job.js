import React from 'react';
import { jobsList } from '../data/datasource';

class Job extends React.Component {
  render() {
    return (
      <React.Fragment>
        {jobsList.map(item =>
            <div className="job">
              <div className="job__years">
                <h6 className="job__end">{ item.years.end }</h6>
                <h6 className="job__start">{ item.years.start }</h6>
              </div>
              <h5 className="job__title">{ item.title }</h5>
              <h5 className="job__company">{ item.company }</h5>
              <p className="job__description">{ item.description }</p>
            </div>
        )}
      </React.Fragment>
    );
  }
}

export default Job;
