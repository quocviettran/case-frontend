import React from "react";
//import "./propertyDetail";
import { Grid, Header, Image } from "semantic-ui-react";

const propertyDetail = () => (
  <React.Fragment>
    <div
      style={{ position: "relative", height: "100%", background: "#023640" }}
    >
      <Image
        style={{ height: "400px", width: "100%" }}
        src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260g"
      />
      <Header
        className="item centered"
        style={{
          height: "150px",
          width: "100%",
          background: "#05A0BC",
          margin: "0"
        }}
      >
        <h1>Myrveien 16B</h1>
        <h4>ROTNES, NITTEDAL</h4>
        <h5>På denne siden finner du komplett informasjon om eiendommen</h5>
      </Header>
      <Grid
        columns={3}
        stackable
        textAlign="center"
        style={{
          height: "100%",
          width: "100%",
          margin: "0"
        }}
      >
        <Grid.Row>
          <Grid.Column
            style={{
              background: "#05A0BC"
            }}
          >
            <h4>ADRESSE Myrveien 16B</h4>
            <h4>PRISANTYDNING 9 490 000 kr</h4>
            <h4>OMKOSTNINGER 63 722 kr</h4>
            <h4>TOTALPRIS * 9 553 722 kr</h4>
            <h4>BOLIGTYPE Enebolig</h4>
            <h4>EIEFORM Eiet</h4>
          </Grid.Column>
          <Grid.Column
            style={{
              background: "#05A0BC"
            }}
          >
            <h4>PRIMÆRROM 191 m²</h4>
            <h4>BRUKSAREAL 196 m²</h4>
            <h4>SEKUNDÆRROM 5 m²</h4>
            <h4>SOVEROM 4</h4>
            <h4>ROM 6</h4>
            <h4>BRUTTOAREAL 216 m²</h4>
            <h4>TOMTEAREAL 545.2 m² (eiet)</h4>
            <h4>BYGGEÅR 2019</h4>
            <h4>ETASJE 2</h4>
          </Grid.Column>
          <Grid.Column
            style={{
              background: "#FFFFFF"
            }}
          >
            <h2>VISNING</h2>
            <h2>torsdag, 11 april 17:30-18:30</h2>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </React.Fragment>
);

export default propertyDetail;
