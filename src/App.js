import React, { Component } from 'react';
import SkillList from './components/skill-list';
import EducationList from './components/education-list';
import WorkList from './components/work-list';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <SkillList />
      <EducationList />
      <WorkList />
      </React.Fragment>
    );
  }
}

export default App;
