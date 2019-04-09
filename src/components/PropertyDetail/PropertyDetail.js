import React from "react";
import { Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";

const propertyDetail = () => (
  <div className="login-form">
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>
      {`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}
    </style>
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="top">
      <Grid.Column style={{ maxWidth: 1000 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="/logo.png" />
        </Header>
        <Segment streched>
          <h1>HEI HEI</h1>
        </Segment>
        <Segment streched>
          <h1>Hahahah</h1>
        </Segment>
        <p>hahahaha</p>
      </Grid.Column>
    </Grid>
  </div>
);

export default propertyDetail;
