import React, { Component } from "react";
import { Grid, Header, Image, Button, Transition, List } from "semantic-ui-react";
import Map from '../Map/Map'
import './PropertyDetailBuyer.css'

export default class propertyDetailBuyer extends Component {
  
  state = { visible: true };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });
  
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

  imageShowcase =()=>{
    let imageList=[];
    if(this.props.propertyImages != null){
      for(let i =0; i<this.props.propertyImages.length; i++){
        imageList[i]= 
        <List key={i}>
          <Image id="imagesdetail" src={this.props.propertyImages[i].url} />
        </List>
      }
    }   
    return imageList;
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


  render() {
    const { visible } = this.state;
    const imageList = this.images();
    const imageShowcase = this.imageShowcase();
    const renovationList = this.renovationHistory();
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
                  <h4>ADRESSE: {this.props.property_name}, {this.props.property.zip} {this.props.municipality} </h4>
                  <h4>By: {this.props.city}</h4>
                  <h4>BOLIGTYPE: {this.props.property_type_name}</h4>
                  <h4>BYGGEDATO: {this.props.property.built_at}</h4>
                  <h4>AREAL: {this.props.property.area}</h4>
                  <h4>ETASJE: {this.props.property.floor}</h4>
                  <h4>ROM: {this.props.property.rooms}</h4>
                  <h4>STATUS: {this.props.property_status_name}</h4>
                  {renovationList}
                </Header>
              </Grid.Column>
              <Grid.Column id="visningColumn">
                {/* <Map latitude={this.props.latitude} longitude={this.props.longitude}/> */}
                <Map latitude={this.props.latitude} longitude={this.props.longitude}/>

              </Grid.Column>
            </Grid.Row>
            <h2 id="infoomeiendomText">Informasjon om eiendom</h2>
            <Grid.Row>
              <Transition visible={!visible} animation="scale" duration={200}>
                <div id="fullInfoText">
                 {this.props.valuation_comments}
                 {imageShowcase}
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
