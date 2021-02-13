import React, { useState, useEffect, useRef } from "react";
import './Algolia.css'
import Menu from '../Menu'


let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ["(regions)"], componentRestrictions: { country: "fr" } }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);
}

function Algolia(props) {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyCwSLR7hNKfsL1e1YAWflmUAg_pN0pbXeM&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);
  if (props.currentStep !==1) { // Prop: The current step
    return null
  }
  return (
      <div>
          <Menu/>
      <div className="login-form">
      <div className="search-location-input form-group ">
      <label class="sr-only">Ville</label>
      <input
        className="form-control"
        ref={autoCompleteRef}
        onChange={event => setQuery(event.target.value)}
        placeholder="Entrez la commune"
        value={query}
      />
       <div class=" form-group">
      <label class="mr-sm-2" for="inlineFormCustomSelect">Type</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Veuillez selectionner</option>
        <option value="appartement">Appartement</option>
        <option value="chambre">Chambre</option>
        <option value="studio">Studio</option>
        <option value="gite">Gîte</option>
        <option value="garage">Garage</option>
        <option value="parking">Parking</option>

      </select>
    </div>
  
    <div className="form-group mb-2">
           <label>Nombre de pièces</label>
          <input className="form-control" type="number" min="1" max="60"
          placeholder="nombre de pièces"></input>
          
      </div>
     

      
      <div className="form-group mb-2">
           <label>prix</label>
          <input className="form-control" type="number" min="1" max="100000"
          placeholder="prix en euros"></input>
          
      </div>
       <div  className="form-group mb-2">

       <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" />
  <label class="custom-control-label" for="customRadioInline1">Meublé</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input" />
  <label class="custom-control-label" for="customRadioInline2">Non meublé</label>
</div>
     
       </div>
       

    </div>
    

    </div>

      </div>
   
  );
}

export default Algolia;