import React, { Component } from "react";
import PropertyDetailAgent from "../../components/PropertyDetailAgent/PropertyDetailAgent";


class PropertyDetailContainer extends Component {
constructor(props){
  super(props)
  this.state = {
    property: []
  };

}
  

componentDidMount() {
    const id = this.props.match.params.property_id;
    fetch(`https://properties-db.herokuapp.com/propertyagent/${id}`)
    .then(res => res.json())
    .then(data => {
        this.setState({
            property: data
        })
    }).catch(err => {
        throw err;
    }) 
}


  render() {
    console.log(this.state.property)
    return (
      <React.Fragment>
        <PropertyDetailAgent
            property={this.state.property} 

            property_status_name= {this.state.property.propertyStatus !== undefined ?
            this.state.property.propertyStatus.property_status_name: null}

            property_type_name= {this.state.property.propertyType !== undefined ?
            this.state.property.propertyType.property_status_type: null}

            owner_name={this.state.property.ownershipLogs !== undefined ?
            this.state.property.ownershipLogs[0].propertyOwner.owner_name: null}

            owner_phone= {this.state.property.propertyOwner !== undefined ?
            this.state.property.ownershipLogs.propertyOwner.phone: null}
        />        
      </React.Fragment>
    );
  }
}

export default PropertyDetailContainer;
