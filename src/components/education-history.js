import React from 'react';
import EduTitle from './eduTitle';
import { eduList } from '../data/datasource';

class EducationList extends React.Component {
  render() {
    return(
      <section>
        <h4>Education</h4>
        <div className="degree-list">
          <EduTitle />
        </div>
      </section>
    );
  }
}

export default EducationList;
