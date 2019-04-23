import React, { Component } from "react";
import PropertyDetail from "../../components/PropertyDetail/PropertyDetail";

class PropertyDetailContainer extends Component {

  state = {
    allProperties: {}
};

componentDidMount() {
    fetch('https://properties-db.herokuapp.com/properties/2').then(res => res.json())
    .then(data => {
        this.setState({
            allProperties: data
        })
    }).catch(err => {
        throw err;
    })
    console.log(this.state.allProperties.propertyType)
}

  render() {
    return (
      <React.Fragment>
        <PropertyDetail key={this.state.allProperties.property_id}
          property_name={this.state.allProperties.property_name}
          city={this.state.allProperties.city}
          municipality={this.state.allProperties.municipality}
          value={this.state.allProperties.value}
          property_type_name={this.state.allProperties &&
            this.state.allProperties.propertyType ?
            this.state.allProperties.propertyType.property_type_name : null}
          property_status_name={this.state.allProperties &&
            this.state.allProperties.propertyStatus ?
            this.state.allProperties.propertyStatus.property_status_name: null}
          valuation_comments={this.state.allProperties &&
            this.state.allProperties.valuations ?
            this.state.allProperties.valuations[0].valuation_comments: null}
        />
      </React.Fragment>
    );
  }
}

export default PropertyDetailContainer;
