import React from 'react';
import Menu from '../Menu'
import './Step2.css'

class Step2 extends React.Component {render() {
    if (this.props.currentStep !==2) { // Prop: The current step
      return null
    }
    return(
        <div>
        <Menu/>
    <div className="login-form">
   
     

 
    
     <div className="form-group mb-2">
         <label>Description</label>
         <textarea class="form-control" id="description"
          rows="5" placeholder="Entrez une description "
           maxLength="1200"> </textarea>
        
    </div>

  </div>
  


    </div>
       
      )}
}


export default Step2