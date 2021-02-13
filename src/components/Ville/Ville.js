import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';


class Ville extends React.Component{
   constructor(props){
        super(props)
        this.state={
          nomVille:""
        }
        this.handleChange= this.handleChange.bind(this)
        
   }
   handleChange(event){
     this.setState({nomVille:event.target.value});
      
     console.log(event)
   }
        render(){
         return (
    <div >
     
    <AlgoliaPlaces
     
      id="ville"
      
      options={{
        appId: 'pl28QRN0C45S',
        apiKey: '9d0e64825d1181764e84b61cd3af939f',
        language: 'fr',
        countries: ['fr'],
        type: 'city',
        container: document.querySelector('#ville')
        // Other options from https://community.algolia.com/places/documentation.html#options
      }}

      onChange= {this.handleChange}

      onSuggestions={({ rawAnswer, query, suggestions }) => 
        console.log('Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed.')}

      onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) => 
        console.log('Fired when arrows keys are used to navigate suggestions.')}

      onClear={() => 
        console.log('Fired when the input is cleared.')}

      onLimit={({ message }) => 
        console.log('Fired when you reached your current rate limit.')}

      onError={({ message }) => 
        console.log('Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit.')}
    />
    
    </div>
  );  
        
   }
}
export default Ville
