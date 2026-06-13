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
} from '@syncfusion/ej2-react-schedule';

class App extends React.Component {
  state = {
    dataSource: [
      {
        Id: 1,
        Subject: 'Sample Event',
        EndTime: new Date(2020, 7, 11, 6, 30),
        StartTime: new Date(2020, 7, 11, 4, 0),
      },
    ],
  };

  render() {
    return (
      <ScheduleComponent
        height="100%"
        selectedDate={new Date(2020, 7, 11)}
        eventSettings={{ dataSource: this.state.dataSource }}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}

export default App;
