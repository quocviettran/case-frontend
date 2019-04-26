import React from "react";
import { Card, Button, Image } from "semantic-ui-react";
import {Link} from 'react-router-dom';
import './PropertiesCard.css'



const PropertiesCard = (props) => {
  return (
  <Card color="teal">
    <Card.Content>
    <Image id="headerImgCard"  />
      <Card.Header>{props.property.property_name}</Card.Header>
      <Card.Description>
        {props.property.city}
      </Card.Description>
      <Button as={Link} to={`/propertydetail/${props.property.property_id}`}>Details</Button>
    </Card.Content>
  </Card>
  )
  };

export default PropertiesCard;
