import React from 'react';
import { skills } from '../data/datasource';

class Skill extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <React.Fragment>
        {
          skills.map(item => <span className="skills-list__single">{ item }</span>)
        }
      </React.Fragment>
    );
  }
}

export default Skill;
