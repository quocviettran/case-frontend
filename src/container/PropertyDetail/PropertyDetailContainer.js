import React, { Component } from "react";
import PropertyDetail from "../../components/PropertyDetail/PropertyDetail";
import PropertyDetailBuyer from "../../components/PropertyDetailBuyer/PropertyDetailBuyer";
import PropertyDetailAgent from "../../components/PropertyDetailAgent/PropertyDetailAgent";
import Map from '../../components/Map/Map';


class PropertyDetailContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      allProperties: {}
    }
  }


componentDidMount() {
    const id = this.props.match.params.property_id;
    fetch(`https://properties-db.herokuapp.com/properties/${id}`).then(res => res.json())
    .then(data => {
        this.setState({
            allProperties: data
        })
    }).catch(err => {
        throw err;
    }) 
}

  propertyDetailPages = () => {
    const buyer =  
    <PropertyDetailBuyer key={this.state.allProperties.property_id}
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
      
      property_status_name={this.state.allProperties &&
        this.state.allProperties.propertyStatus ?
        this.state.allProperties.propertyStatus.property_status_name: null}
      valuation_comments={this.state.allProperties &&
        this.state.allProperties.valuations ?
        this.state.allProperties.valuations[0].valuation_comments: null}
      revonation_date_from={this.state.allProperties &&
        this.state.allProperties.renovation ?
        this.state.allProperties.renovation.date_from: null}
      
      revonation={this.state.allProperties &&
        this.state.allProperties.renovation ?
        this.state.allProperties.renovation: null}

      ownership_log={this.state.allProperties &&
        this.state.allProperties.ownershipLogs ?
        this.state.allProperties.ownershipLogs: null}

      owner_name={this.state.allProperties &&
        this.state.allProperties.ownershipLogs ?
        this.state.allProperties.ownershipLogs.owner: null}
      
      latitude={this.state.allProperties.latitude}
      longitude={this.state.allProperties.longitude}
    />
    
    const agent = 
    <PropertyDetailAgent key={this.state.allProperties.property_id}
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
      
      property_status_name={this.state.allProperties &&
        this.state.allProperties.propertyStatus ?
        this.state.allProperties.propertyStatus.property_status_name: null}
      valuation_comments={this.state.allProperties &&
        this.state.allProperties.valuations ?
        this.state.allProperties.valuations[0].valuation_comments: null}
      revonation_date_from={this.state.allProperties &&
        this.state.allProperties.renovation ?
        this.state.allProperties.renovation.date_from: null}
      
      revonation={this.state.allProperties &&
        this.state.allProperties.renovation ?
        this.state.allProperties.renovation: null}

      ownership_log={this.state.allProperties &&
        this.state.allProperties.ownershipLogs ?
        this.state.allProperties.ownershipLogs: null}

      owner_name={this.state.allProperties &&
        this.state.allProperties.ownershipLogs ?
        this.state.allProperties.ownershipLogs.owner: null}
      
      latitude={this.state.allProperties.latitude}
      longitude={this.state.allProperties.longitude}
    />

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
      
      property_status_name={this.state.allProperties &&
        this.state.allProperties.propertyStatus ?
        this.state.allProperties.propertyStatus.property_status_name: null}
      valuation_comments={this.state.allProperties &&
        this.state.allProperties.valuations ?
        this.state.allProperties.valuations[0].valuation_comments: null}
      revonation_date_from={this.state.allProperties &&
        this.state.allProperties.renovation ?
        this.state.allProperties.renovation.date_from: null}
      
      revonation={this.state.allProperties &&
        this.state.allProperties.renovation ?
        this.state.allProperties.renovation: null}

      ownership_log={this.state.allProperties &&
        this.state.allProperties.ownershipLogs ?
        this.state.allProperties.ownershipLogs: null}

      owner_name={this.state.allProperties &&
        this.state.allProperties.ownershipLogs ?
        this.state.allProperties.ownershipLogs.owner: null}
      
      latitude={this.state.allProperties.latitude}
      longitude={this.state.allProperties.longitude}
    />

    if(this.props.role === 1)
        return agent;
    else if(this.props.role === 2)
        return buyer;
    else return guest;
  }


  render() {
    return (
      <React.Fragment>
        {this.propertyDetailPages}
      </React.Fragment>
    );
  }
}

export default PropertyDetailContainer;
