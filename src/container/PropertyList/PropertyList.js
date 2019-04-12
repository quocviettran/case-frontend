import React from 'react'
import { List, Image, Card, Container  } from 'semantic-ui-react'

import PropertiesCard from '../../components/PropertiesCard/PropertiesCard'
import ExampleCard from '../../components/ExampleCard/ExampleCard';

class PropertyList extends React.Component {

    state = {
        allProperties: []
    };

    componentDidMount() {
        fetch('http://localhost:8080/properties').then(res => res.json())
        .then(data => {
            this.setState({
                allProperties: data,      
            })
            console.log("Mounted")
        }).catch(err => {
            throw err;
        })
    }

    render() {  
        const cards = this.state.allProperties.map(property => (
            <PropertiesCard
                key={property.property_id}
                property_name={property.property_name}
                city={property.city}
            />     
        ));
        
        return (
          <React.Fragment>
          <Card.Group>
            {cards}
           </Card.Group>
          </React.Fragment>
        );
      }
    }

export default PropertyList;