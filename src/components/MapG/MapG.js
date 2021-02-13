import React, { Component } from 'react';
import './MapG.css';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapG extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    position:{ lat:48.8566,lng:2.3522}
    
  };
  
 
  

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      position:this.state.position

    });

    setPosition=()=>{
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log(this.state.position)
          this.setState({
            selectedPlace: this.state.selectedPlace,
            activeMarker: this.state.activeMarker,
            showingInfoWindow: this.state.showingInfoWindow,
            position:pos
      
          });
          
          
        })

      }else{
        console.log("erreur")
      }

    
    }
    
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
       
      })
    }
  };
  render() {
    return (
      <div class="iframe-container">

<Map google={this.props.google} zoom={10}  initialCenter={ this.state.position}
       center={this.state.position} 
         
        >
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div >{   this.setPosition()}
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
      </div>
      
    )}
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDwqn_msnnkJhMSlSZ515Kwq778PZgSr08")
})(MapG)