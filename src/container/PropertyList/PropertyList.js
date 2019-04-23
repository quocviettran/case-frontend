import React from 'react'
import {Card } from 'semantic-ui-react'

import PropertiesCard from '../../components/PropertiesCard/PropertiesCard'


class PropertyList extends React.Component {

    state = {
        allProperties: []
    };

    componentDidMount() {
        fetch('https://properties-db.herokuapp.com/properties').then(res => res.json())
        .then(data => {
            this.setState({
                allProperties: data,      
            })
            console.log(this.props)
        }).catch(err => {
            throw err;
        })
        console.log(this.state.allProperties.longitude);
    }

    render() {  
        const cards = this.state.allProperties.map(property => (
            <PropertiesCard
                key={property.property_id}
                property = {property}

            />     
        ));
        
        return (
          <React.Fragment>
          <Card.Group centered itemsPerRow="2"> 
            {cards}
           </Card.Group>
          </React.Fragment>
        );
      }
    }

export default PropertyList;