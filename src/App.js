import React from 'react';
import './App.css';
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  EventSettingsModel,
} from '@syncfusion/ej2-react-schedule';

class App extends React.Component {
  state = {
    dataSource: [
      {
        EndTime: new Date(2020, 7, 11, 6, 30),
        StartTime: new Date(2020, 7, 11, 4, 0),
      },
    ],
  };
  render() {
    return (
      <ScheduleComponent eventSettings={this.state.dataSource}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}

export default App;
