import React from 'react';

export default class Clock extends React.Component {

  constructor(){
    super();
    this.state = { date: new Date() };
    this.formatTime();
  }

  formatTime(){
    let t = this.state.date;
    setInterval(() => {
      t.setSeconds(t.getSeconds() + 1);
      this.setState({ date: t });
    }, 1000);
  }

  render(){
    return (
      <div className="clock">
        {
          this.state.date.toTimeString()
        }
        <br/>
        {
          this.state.date.toDateString()
        }
      </div>
    );
  }
}
