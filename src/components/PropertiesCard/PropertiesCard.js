import React from "react";
import { Card, Button, Image } from "semantic-ui-react";

const PropertiesCard = (props) => {
  return (
  <Card color="teal">
    <Card.Content>
    <Image></Image>
      <Card.Header>{props.property_name}</Card.Header>
      <Card.Description>
        {props.city}
      </Card.Description>
      <Button>Details</Button>
    </Card.Content>
  </Card>
  )
  };

export default PropertiesCard;
