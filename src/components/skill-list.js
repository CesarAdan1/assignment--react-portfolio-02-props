import React from 'react';
import Skill from './skill';

class SkillList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section>
        <h4>Skills</h4>
        <div className="skills-list">
          <Skill />
        </div>
      </section>
    );
  }
}

export default SkillList;
