import React, { Component } from "react";
import PropertyDetailBuyer from "../../components/PropertyDetailBuyer/PropertyDetailBuyer";



class PropertyDetailBuyerContainer extends Component {
    constructor(props){
      super(props)
      this.state = {
        allProperties: {}
      };
    }

    componentDidMount() {
        const id = this.props.match.params.property_id;
        fetch(`https://properties-db.herokuapp.com/propertybuyer/${id}`,{
          method:"GET" , 
          headers: {
            "Content-Type": "application/json",
            "Authorization":sessionStorage.getItem("bearer") + sessionStorage.getItem("token")
          }
        })
        .then(res => res.json())
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
        <PropertyDetailBuyer
        key={this.state.allProperties.property_id}
        property={this.state.allProperties}
        property_name={this.state.allProperties.line_1}    
        
        city={this.state.allProperties.city}
        municipality={this.state.allProperties.municipality}  
        value={this.state.allProperties.value} 

      propertyImages={this.state.allProperties.propertyImages !== undefined?
        this.state.allProperties.propertyImages: null}

      renovations={this.state.allProperties.renovations !== undefined?
        this.state.allProperties.renovations: null}
      
      property_type_name={this.state.allProperties.propertyType !== undefined?
        this.state.allProperties.propertyType.property_type_name : null}
      
      property_status_name={this.state.allProperties.propertyStatus !== undefined?
        this.state.allProperties.propertyStatus.property_status_name: null}

      valuation_comments={this.state.allProperties.valuations !== undefined?
        this.state.allProperties.valuations[0].valuation_comments: null}

      last_renovation={this.state.allProperties.renovations !== undefined?
        this.state.allProperties.renovations[0].date_from: null}
    
      latitude={this.state.allProperties.latitude}
      longitude={this.state.allProperties.longitude}         
        />     
      </React.Fragment>
    );
  }
}

export default PropertyDetailBuyerContainer;
    
