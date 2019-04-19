import React, { Component } from "react";
import { Grid, Header, Image, Button, Transition, Divider, Segment, Responsive } from "semantic-ui-react";
import Map from '../Map/Map'
import './PropertyDetailBuyer.css'

export default class propertyDetailBuyer extends Component {
  
  state = { visible: true };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });
  
  render() {
    const { visible } = this.state;



    return (
      <React.Fragment>
        <div id="bodyDiv">
        <Grid id="headerImg" className="section-response" >
        </Grid>
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
                  <h4>By: {this.props.city}</h4>
                  <h4>Value: {this.props.value} kr</h4>
                  <h4>BOLIGTYPE: {this.props.property_type_name}</h4>
                  <h4>AREAL: {this.props.area}</h4>
                  <h4>ETASJE: {this.props.floor}</h4>
                  <h4>ROM: {this.props.rooms}</h4>
                  <h4>STATUS: {this.props.property_status_name}</h4>

                  <h4>BYGGEDATO: {this.props.built_at}</h4>
                  <h4>SIST RENOVERT: {this.props.renovation_date_from}</h4>
                </Header>
              </Grid.Column>
              <Grid.Column id="visningColumn">
                <header>
                  <h1 id="visningdetail">VISNING</h1>
                  <h2>Torsdag, 11 april 17:30-18:30</h2>
                </header>
                <Divider/>
                {/* <Map latitude={this.props.latitude} longitude={this.props.longitude}/> */}
          
                <Map latitude={this.props.latitude} longitude={this.props.longitude}/>

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
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
