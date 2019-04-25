import React, { Component } from "react";
import L from 'leaflet';
import { Grid, Header, Image, Button, Transition, Divider,List } from "semantic-ui-react";
import Map from '../Map/Map';

export default class propertyDetailAgent extends Component {
  
  state = { visible: true, visibleEier: true, visibleEierInfo: true};

  toggleVisibility = () => this.setState({ visible: !this.state.visible });
  toggleVisibilityEier = () => this.setState({ visibleEier: !this.state.visibleEier });
  toggleVisibilityEierInfo = () => this.setState({ visibleEierInfo: !this.state.visibleEierInfo });

  historyOfOwner=()=>{
    let listOfOwners=[];
    if(this.props.ownership_log != null){
      for(let i = 0; i<this.props.ownership_log.length; i++){
        listOfOwners[i]=this.props.ownership_log[i].propertyOwner.owner_name;
      }
      return listOfOwners;
    }
    return null
  }

  renovationHistory =()=>{
    let renovationList=[];
    if(this.props.renovations != null){
      for(let i =0; i<this.props.renovations.length; i++){
        console.log(this.props.renovations);
        renovationList[i]= 
        <List key={i}>
          <List.Item>RENOVERINGS BESKRIVELSE: {this.props.renovations[i].description}</List.Item>
          <List.Item>RENOVERINGS START: {this.props.renovations[i].date_from}</List.Item>
          <List.Item>RENOVERINGS SLUTT: {this.props.renovations[i].date_to}</List.Item>
        </List>
      }
    }
    
    return renovationList;
  }

  images =()=>{
    let imageList=[];
    if(this.props.propertyImages !== null){
      for(let i = 0; i<this.props.propertyImages.length; i++){
        imageList[i] = this.props.propertyImages[i].url;
      }
      
      return imageList;
    }
    
    return null;
  }

  render() {
    const { visible,visibleEier,visibleEierInfo } = this.state;
    const eierListe = this.historyOfOwner();
    const renovationList= this.renovationHistory();
    const imageList = this.images();
    
    return (
      <React.Fragment>
        <div id="bodyDiv">
          <Image
            id="headerImg"
            src={imageList !== null ? imageList[0] : null}
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
                  <h4>BOLIGTYPE: {this.props.property_type_name}</h4>
                  <h4>AREAL: {this.props.area}</h4>
                  <h4>ETASJE: {this.props.floor}</h4>
                  <h4>ROM: {this.props.rooms}</h4>
                  <h4>Value: {this.props.value} kr</h4>
                  <h4>STATUS: {this.props.property_status_name}</h4>
                  <h4>NÅVÆRENDE EIER : {this.props.owner_name}</h4> 
                  <h4>NÅVÆRENDE EIER TLF : {this.props.phone}</h4> 
                  <h4>NÅVÆRENDE EIER EMAIL : {this.props.email}</h4> 
                  <h4>RENOVERINGS HISTORIKK:</h4>
                  <h4>{renovationList}</h4>
                  <Transition visible={!visibleEier} animation="scale" duration={500}> 
                    <p>{eierListe}</p>
                  </Transition>

                  
                  
                </Header>
                <Button 
                    content={this.state.visibleEier ? 'VIS EIER HISTORIKK' : 'SKJUL'}
                    onClick = {this.toggleVisibilityEier}
                  />
               
                
            
              </Grid.Column>
              <Grid.Column id="visningColumn">
                <header>
                  <h1 id="visningdetail">VISNING</h1>
                  <h2>Torsdag, 11 april 17:30-18:30</h2>
                </header>
                <Divider />
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
                className="ui blue button"
                color="blue"
              />
            </Grid.Row>
          </Grid>
          
        </div>
      </React.Fragment>
    );
  }
}
