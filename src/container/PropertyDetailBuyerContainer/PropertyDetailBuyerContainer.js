import React, { Component } from "react";
import PropertyDetailBuyer from "../../components/PropertyDetailBuyer/PropertyDetailBuyer";


class PropertyDetailContainer extends Component {
constructor(props){
  super(props)
  this.state = {
    property: []
  };

}
  

componentDidMount() {
    const id = this.props.match.params.property_id;
    fetch(`https://properties-db.herokuapp.com/propertybuyer/${id}`)
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
    return (
      <React.Fragment>
        <PropertyDetailBuyer

            property={this.state.property} 

            property_status_name= {this.state.property.propertyStatus !== undefined ?
            this.state.property.propertyStatus.property_status_name: null}

            property_type_name= {this.state.property.propertyType !== undefined ?
            this.state.property.propertyType.property_status_type: null}

            
        />        
      </React.Fragment>
    );
  }
}

export default PropertyDetailContainer;
