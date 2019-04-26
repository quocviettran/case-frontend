import React, { Component } from "react";
import PropertyDetailGuest from "../../components/PropertyDetailGuest/PropertyDetailGuest";


class PropertyDetailGuestContainer extends Component {
constructor(props){
  super(props)
  this.state = {
    allProperties: {}
  };
}
  
componentDidMount() {
    const id = this.props.match.params.property_id;
    fetch(`https://properties-db.herokuapp.com/properties/${id}`)
    .then(res => res.json())
    .then(data => {
        this.setState({
            allProperties: data
        })
    }).catch(err => {
        throw err;
    }) 
}

/*propertyDetailRole = () => {
   
  const buyer = 
    <PropertyDetailBuyer 
    property={this.state.allProperties}
    key={this.state.allProperties.property_id}
      property_name={this.state.allProperties.property_name}
      city={this.state.allProperties.city}
      municipality={this.state.allProperties.municipality}
      value={this.state.allProperties.value}
      built_at={this.state.allProperties.built_at}
      area={this.state.allProperties.area}
      floor={this.state.allProperties.floor}
      rooms={this.state.allProperties.rooms}
      zip = {this.state.allProperties.zip}

      property_type_name={this.state.allProperties.propertyType !== undefined?
        this.state.allProperties.propertyType.property_type_name : null}
      
      property_status_name={this.state.allProperties.propertyStatus !== undefined?
        this.state.allProperties.propertyStatus.property_status_name: null}

      valuation_comments={this.state.allProperties.valuations !== undefined?
        this.state.allProperties.valuations[0].valuation_comments: null}

      propertyImages={this.state.allProperties.images !== undefined?
      this.state.allProperties.images: null}
      
      last_renovation={this.state.allProperties.renovations !== undefined?
        this.state.allProperties.renovations[0].date_from: null}
    
      latitude={this.state.allProperties.latitude}
      longitude={this.state.allProperties.longitude}
    />   


    
  const agent = 
    <PropertyDetailAgent key={this.state.allProperties.property_id}
      property_name={this.state.allProperties.property_name}
      value={this.state.allProperties.value}
      built_at={this.state.allProperties.built_at}
      area={this.state.allProperties.area}
      floor={this.state.allProperties.floor}
      rooms={this.state.allProperties.rooms}      
      
      property_type_name={this.state.allProperties.propertyType !== undefined ?
        this.state.allProperties.propertyType.property_type_name : null}
      
      property_status_name={this.state.allProperties.propertyStatus !== undefined ?
        this.state.allProperties.propertyStatus.property_status_name: null}

      valuation_comments={this.state.allProperties.valuations !== undefined ?
        this.state.allProperties.valuations[0].valuation_comments: null}
      
      renovations={this.state.allProperties.renovations !== undefined?
        this.state.allProperties.renovations: null}
      
      propertyImages={this.state.allProperties.images !== undefined?
        this.state.allProperties.images: null}

      ownership_log={this.state.allProperties.ownershipLogs !== undefined ?
        this.state.allProperties.ownershipLogs: null}

      owner_name={this.state.allProperties.ownershipLogs !== undefined ?
        this.state.allProperties.ownershipLogs[0].propertyOwner.owner_name: null}
      
      phone={this.state.allProperties.ownershipLogs !== undefined ?
        this.state.allProperties.ownershipLogs[0].propertyOwner.phone: null}

      email={this.state.allProperties.ownershipLogs !== undefined ?
        this.state.allProperties.ownershipLogs[0].propertyOwner.email: null}

      latitude={this.state.allProperties.latitude}
      longitude={this.state.allProperties.longitude}
    />   

    /* Guest property detail should only view
    *  Images of property
    *  Type of property(house/apt etc.)
    *  Map
    * Short address of property
    */
   /*
  const guest = 
    <PropertyDetail key={this.state.allProperties.property_id}
    property_name={this.state.allProperties.property_name}
    city={this.state.allProperties.city}
    municipality={this.state.allProperties.municipality}    
    value={this.state.allProperties.value}
    built_at={this.state.allProperties.built_at}
    area={this.state.allProperties.area}
    floor={this.state.allProperties.floor}
    rooms={this.state.allProperties.rooms}
    property_type_name={this.state.allProperties &&
      this.state.allProperties.propertyType ?
      this.state.allProperties.propertyType.property_type_name : null}

    latitude={this.state.allProperties.latitude}
    longitude={this.state.allProperties.longitude}
    />


    if(this.props.role===1){
      return agent;
    }
    else if(this.props.role === 2){
      return buyer;
    }
    else{
      return guest;
    }
}*/

  render() {
    //const propertyDetail = this.propertyDetailRole();
    return (
      <React.Fragment>
        <PropertyDetailGuest 
        property={this.state.allProperties}
        key={this.state.allProperties.property_id}
        property_name={this.state.allProperties.line_1}    
        property_type_name={this.state.allProperties.propertyType !== undefined ?
        this.state.allProperties.propertyType.property_type_name : null}

        images={this.state.allProperties.images !== undefined?
        this.state.allProperties.images: null}
    
        latitude={this.state.allProperties.latitude}
        longitude={this.state.allProperties.longitude}         
        />     
      </React.Fragment>
    );
  }
}

export default PropertyDetailGuestContainer;
