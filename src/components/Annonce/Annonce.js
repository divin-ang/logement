import './Annonce.css'
import LocationSearch from '../LocationSearch'
import React from 'react';
import { $ }  from 'react-jquery-plugin'
import Algolia from '../Algolia'
import Step2 from '../Step2'
class Annonce extends React.Component {
  constructor(props) {
    super(props)
    // Set the initial input values
    this.state = {
      currentStep: 1, // Default is Step 1
      email: '',
      username: '',
      password: '', 
    }
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)

    // Bind the submission to handleChange() 
    this.handleChange = this.handleChange.bind(this)
  }
  _next() {
    let currentStep = this.state.currentStep
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 1? 3: currentStep
    this.setState({
      currentStep: currentStep
    })
  }

  _prev() {
    let currentStep = this.state.currentStep
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }
  // Use the submitted data to set the state
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    }) 
  }
  get nextButton(){
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if(currentStep <3){
      return (
       <div  className="login-form next" >  <button 
       className="btn btn-primary " 
       type="button" 
       onClick={this._next}>
         suivant
       </button> </div>
      )
    }
  }
  get previousButton(){
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if(currentStep !==1){
      return (
        <div  className="login-for">

         <button 
        className="btn btn-secondary" 
        type="button" 
        onClick={this._prev}>
            Précedent
        </button>
        </div>
        
      )
    }
    // ...else return nothing
    return null;
  }
  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault()
    const { email, username, password } = this.state
    alert(`Your registration detail: \n 
    Email: ${email} \n 
    Username: ${username} \n
    Password: ${password}`)
  }
  

 
 render() {
    return (
        
      <React.Fragment>
     

    
 
      <form onSubmit={this.handleSubmit}>

      
        <Algolia
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          email={this.state.email}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          username={this.state.username}
        />
       
        {this.previousButton}
    {this.nextButton}
      </form>
      {this.state.currentStep} 
    </React.Fragment>
          

    )
    }
}



export default Annonce