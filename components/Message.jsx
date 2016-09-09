import { ButtonElement } from './ui-elements.jsx';

export class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 1
    }
    this.inerval = null;

    // Apply correct bindings for `this`
    this.tick = this.tick.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  componentDidMount() {
    this.startTimer();
  }

  tick() {
    this.setState({seconds: this.state.seconds + 1});
  }

  resetTimer() {
    clearInterval(this.interval);
    this.inerval = null;
    this.setState({seconds: 0});
  }

  startTimer() {
    this.setState({seconds: 1});
    this.interval = setInterval(this.tick, 1000);
  }
  render() {
    let startBtn = (this.state.seconds  > 0) ? '' : <ButtonElement onClick={this.startTimer} label="Start Timer" />;
    return(
      <div>
      <p>React has been running for {this.state.seconds} seconds.</p>
      <ButtonElement onClick={this.resetTimer} label="Reset timer" />
      {startBtn}
      </div>
    )
  }
}
