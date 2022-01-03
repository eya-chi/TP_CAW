import React, {Component} from 'react'
import './De.css'

class De extends Component{
  render(){
    const {face, rolling} = this.props
   
    return ( <i className={`Die fas fa-dice-${face}
              ${rolling && 'Die-shaking'}`}/>
      
    ) 
  }
}
  
export default De

