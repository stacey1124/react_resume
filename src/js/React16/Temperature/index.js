import React, { Fragment } from 'react'
import TemperatureInput from './TemperatureInput';

export default class Temperature extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: '',
    }
  }

  handleCesChange = (temperature) => {
    this.setState({
      scale: 'c',
      temperature
    })
  }
  
  handleFehChange = (temperature) => {
    this.setState({
      scale: 'f',
      temperature
    })
  }
  
  tryConvert = (temperature, convert) => {
    return convert(temperature)
  }

  toCes = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
  }

  toFeh = (celsius) => {
    return (celsius * 9 / 5) + 32;
  }
  
  render() {
    const { scale, temperature } = this.state
    let cesTemperature = scale === 'f' ? this.tryConvert(temperature, this.toCes) : temperature
    let FehTemperature = scale === 'c' ? this.tryConvert(temperature, this.toFeh) : temperature
    return (
      <Fragment>
        <TemperatureInput scale="c" temperature={cesTemperature} temperatureChange={this.handleCesChange} />
        <TemperatureInput scale="f" temperature={FehTemperature} temperatureChange={this.handleFehChange} />
      </Fragment>
    )
  }
}