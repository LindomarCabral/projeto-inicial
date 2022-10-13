import React, {Component} from 'react'
import './App.css'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: "Lindomar"
    }
    this.changeState = this.changeState.bind(this)
    this.resetState = this.resetState.bind(this)
  }

  changeState(){
    this.setState({
      name:"Lindomar Cabral"
    })
  }
  resetState(){
    this.setState({
      name:"Lindomar"
    })
  }

  render(){
    return(
      <div className='App'>
        <div>
        {this.state.name}
        </div>
        <div>
          <button onClick={this.changeState} >Mudar estado</button>
          <button onClick={this.resetState} >Reset estado</button>
        </div>
      </div>
    )
  }

}

export default App;
