import React,{ Component } from 'react'
import './LancerDe.css'
import De from './De'

  
class LancerDe extends Component{ 

  static defaultProps = { 

    sides : ['one', 'two', 'three',  

             'four', 'five', 'six'] 

  } 

  constructor(props){ 

    super(props) 


    this.state = { 

      die1 : 'one', 

      die2 : 'one', 

      rolling: false

    } 

    this.Lancer= this.Lancer.bind(this) 

  } 

  Lancer(){ 

    const {sides} = this.props 
  
    this.setState({ 

      die1 :  sides[Math.floor(Math.random() * sides.length)], 

      die2 : sides[Math.floor(Math.random() * sides.length)], 

      rolling:true

    })   

    setTimeout(() => {  

      this.setState({rolling:false}) 

    },1000) 
    
  } 
   show_alerts() {
   alert("Congratulations you won!!")
   }
    show_alertf(){
      
      alert("Failed! Try again ..")
   }
  
  render(){ 

    const handleBtn = this.state.rolling ?  

                      'LancerDe-rolling' : ''
     
    const {die1, die2, rolling} = this.state 
    
    return( 

      <div className='LancerDe'> 

        <div className='LancerDe-container'> 

          <De face={die1} rolling={rolling}/> 

          <De face={die2} rolling={rolling}/> 

        </div> 
      
        <button 
                className={handleBtn} 

                disabled={this.state.rolling}  

                onClick={this.Lancer}  > 
                
               
          {this.state.rolling ? 'Lancement' : 'Lancer les Dés!'} 
          
        </button> 
        
        <button className="alert" onClick={this.state.die1===die2 ? this.show_alerts : this.show_alertf}> How did i do? </button>


        
        
      </div> 
     
    ) 
   
  }  
}
export default LancerDe