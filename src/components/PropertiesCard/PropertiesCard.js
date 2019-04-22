import React from "react";
import { Card, Button, Image } from "semantic-ui-react";
import {Link} from 'react-router-dom';




const PropertiesCard = (props) => {
  return (
  <Card color="teal">
    <Card.Content>
    <Image src="https://dnb-nextgen-cdn.azureedge.net/property-images/a0664e3f-26d0-4967-574c-08d6b28cc8ef/a0664e3f-26d0-4967-574c-08d6b28cc8ef-1.jpg?ts=636905681035052472"></Image>
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
