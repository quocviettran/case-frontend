import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import PropertyDetail from "../../components/PropertyDetail/PropertyDetail";


class PropertyDetailContainer extends Component {

  state = {
    allProperties: {}
};


fetchPropertyId = () => {
  fetch('https://properties-db.herokuapp.com/properties/'+ this.state.propertyId)
  .then(res => {
    this.setState({propertyId: res.data[0].property_id})
  })
  console.log(this.state.propertyId);
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
