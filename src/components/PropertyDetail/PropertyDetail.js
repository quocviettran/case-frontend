import React, { Component } from "react";
import L from 'leaflet';
import "./PropertyDetail.css";
import { Grid, Header, Image, Button, Transition, Divider } from "semantic-ui-react";

export default class propertyDetail extends Component {
  
  state = { visible: true };

  componentDidMount() {
    this.initialMap();
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    return (
      <React.Fragment>
        <div id="bodyDiv">
          <Image
            id="headerImg"
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260g"
          />
          <Grid id="headerGrid" stackable textAlign="center">
            <Grid.Row>
              <Header className="item centered" id="headerInfo">
                <h1>{this.props.property_name}</h1>
                <h4>{this.props.city}, {this.props.municipality}</h4>
                <h5>
                  På denne siden finner du informasjon om eiendommen
                </h5>
              </Header>
            </Grid.Row>
          </Grid>
          <Grid id="detailGrid" stackable textAlign="center">
            <Grid.Row columns={2}>
              <Grid.Column id="detailColumn">
                <Header id="maindetail">
                  <h4>ADRESSE: {this.props.property_name}</h4>
                  <h4>Value: {this.props.value} kr</h4>
                  <h4>BOLIGTYPE: {this.props.property_type_name}</h4>
                  <h4>STATUS: {this.props.property_status_name}</h4>
                </Header>
              </Grid.Column>
              <Grid.Column id="visningColumn">
                <header>
                  <h1 id="visningdetail">VISNING</h1>
                  <h2>Torsdag, 11 april 17:30-18:30</h2>
                </header>
              </Grid.Column>
            </Grid.Row>
            <h2 id="infoomeiendomText">Informasjon om eiendom</h2>
            <Grid.Row>
              <Transition visible={!visible} animation="scale" duration={200}>
                <div id="fullInfoText">
                 {this.props.valuation_comments}
                </div>
              </Transition>
              <Button
                content={visible ? "Show More" : "Hide"}
                onClick={this.toggleVisibility}
                class="ui blue button"
                color="blue"
              />
            </Grid.Row>
            <Divider />
          </Grid>
          <div id="mapid"></div>
          <Divider />
        </div>
      </React.Fragment>
    );
  }

  initialMap(){
    var mymap = L.map('mapid').setView([60.056560, 10.865150], 15);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1Ijoid29raW5nIiwiYSI6ImNqdHByejVjcjA3Nm80ZHIwZTgydDA0aWYifQ.A7Nu-j7baTtMJnjPzrTlNA'
    }).addTo(mymap);
    var marker = L.marker([60.056560, 10.865150]).addTo(mymap);
  }
}
