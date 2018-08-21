import React from 'react';
import Job from './job';

class WorkList extends React.Component {
  render() {
    return (
      <section>
        <h4>Work Experience</h4>
        <div className="job-timeline">
          <Job />
        </div>
      </section>
    );
  }
}

export default WorkList;
