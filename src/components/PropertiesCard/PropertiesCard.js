import React from "react";
import { Card, Image } from "semantic-ui-react";

const CardExampleCard = () => (
  <Card color="teal">
    <Image src="https://dnb-nextgen-cdn.azureedge.net/property-images/0bc4d3e6-f0a5-45c3-f2cb-08d6b2851657/scaled/0bc4d3e6-f0a5-45c3-f2cb-08d6b2851657_600_600.jpg?ts=636900880857535879" />
    <Card.Content>
      <Card.Description>
        <h3>Myrveien 16B, Nittedal</h3>
        <h5>P-rom/Bra: 191/196 m2</h5>
        <h5>Prisantydning: 9 490 000kr</h5>
        <h5>Visning : Torsdag 11/04 17:30 - 18:30</h5>
      </Card.Description>
    </Card.Content>
  </Card>
);

export default CardExampleCard;
