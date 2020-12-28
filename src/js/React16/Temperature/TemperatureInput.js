import React from 'react'



export default class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // temperature: ''
    }

  }



  handleChange = (e) => {
    // this.setState({
    //   temperature: e.target.value
    // })
    const { scale } = this.props
    this.props.temperatureChange(e.target.value, scale)
  }

  render() {
    const scaleNames = {
      c: 'Celsius',
      f: 'Fahrenheit'
    }
    const { scale, temperature } = this.props
    console.log(temperature)
    // let temperature = scale === 'c' ? cesTemperature : FehTemperature
    
    return (
      <div>
        <legend>输入{scaleNames[scale]}温度</legend>
        <input value={temperature} onChange={this.handleChange} />
      </div>
    )
  }
}