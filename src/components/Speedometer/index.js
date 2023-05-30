// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onApplyBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container" alt="Speedometer">
        <h1 className="heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="img"
          alt="Speedometer"
        />
        <h1 className="para">
          Speed is <span>{speed}</span>mph
        </h1>
        <p className="p">Min limit is 0mph, Max limit is 200mph</p>
        <div className="btn-cont">
          <button type="button" className="button1" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button type="button" className="button2" onClick={this.onApplyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
