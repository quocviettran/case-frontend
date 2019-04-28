import React from 'react'
import {Card, List, Container} from 'semantic-ui-react'

import PropertiesCard from '../../components/PropertiesCard/PropertiesCard'
import '../PropertyList/PropertyList.css'

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
        }).catch(err => {
            throw err;
        })
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
            <Container id="propertycontainer">
                <List >
                    <Card.Group>
                        {cards}
                    </Card.Group>
                </List>
            </Container>
          </React.Fragment>
        );
      }
    }

export default PropertyList;
