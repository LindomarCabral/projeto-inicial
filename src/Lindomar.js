import './App.css'
import User from './User'
import photo from './lindomar_02.png'

function Lindomar() {
  return (
    <div className="Lindomar">      
        <p>
          Eu sou um componente chamado Lindomar
          <User name="Cabral" photo={photo}></User>
          <User name="Cabral"></User>
          <User name="Cabral"></User>
        </p>    
    </div>
  )
}

export default Lindomar
