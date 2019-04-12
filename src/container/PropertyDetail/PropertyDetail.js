import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import PropertyDetail from "../../components/PropertyDetail/PropertyDetail";

class PropertyDetailContainer extends Component {
  render() {
    return (
      <React.Fragment>
          <PropertyDetail />
      </React.Fragment>
    );
  }
}

export default PropertyDetailContainer;
