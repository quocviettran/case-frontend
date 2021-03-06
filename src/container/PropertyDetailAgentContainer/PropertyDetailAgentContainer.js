import React, { Component } from "react";
import PropertyDetailAgent from "../../components/PropertyDetailAgent/PropertyDetailAgent";


class PropertyDetailAgentContainer extends Component {
    constructor(props){
      super(props)
      this.state = {
        allProperties: {}
      };
    }
      
    componentDidMount() {
        const id = this.props.match.params.property_id;
        fetch(`https://properties-db.herokuapp.com/propertyagent/${id}`,{
          method:"GET" , 
          headers: {
            'Authorization':'Bearer ' + sessionStorage.getItem("token"),
            "Content-Type": "application/json"
          }
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
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
        <PropertyDetailAgent
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

      valuations={this.state.allProperties.valuations !== undefined?
        this.state.allProperties.valuations: null}
      
      property_type_name={this.state.allProperties.propertyType !== undefined?
        this.state.allProperties.propertyType.property_type_name : null}
      
      property_status_name={this.state.allProperties.propertyStatus !== undefined?
        this.state.allProperties.propertyStatus.property_status_name: null}
        
      ownershipLogs={(this.state.allProperties.ownershipLogs !== undefined) && (this.state.allProperties.ownershipLogs !== null)?
        this.state.allProperties.ownershipLogs: null}

     
      latitude={this.state.allProperties.latitude}
      longitude={this.state.allProperties.longitude}     
        />     
      </React.Fragment>
    );
  }
}


export default PropertyDetailAgentContainer;
    
    
