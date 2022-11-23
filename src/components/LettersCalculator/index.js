// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputPharse: ''}

  onChangeInput = event => {
    const {value} = event.target

    this.setState({inputPharse: value})
  }

  render() {
    const {inputPharse} = this.state

    return (
      <div>
        <div>
          <h1>Calculate the Letters you enter</h1>
          <label className="label" htmlFor="parseText">
            Enter the phrase
          </label>
          <input
            type="text"
            id="parseText"
            label="Enter the pharse"
            onChange={this.onChangeInput}
          />
          <p>No.of letters: {inputPharse.length}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
