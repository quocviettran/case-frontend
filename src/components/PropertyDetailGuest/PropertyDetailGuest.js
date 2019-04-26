import React, { Component } from "react";
import "./PropertyDetailGuest.css";
import { Grid, Header, Image, Button, Transition, List } from "semantic-ui-react";
import Map from '../Map/Map';

export default class propertyDetailGuest extends Component {
  
  state = { visible: true };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  
  images =()=>{
    let imageList=[];
    if(this.props.images !== null){
      for(let i = 0; i<this.props.images.length; i++){
        imageList[i] = this.props.images[i].url;
      }
      return imageList;
    }
    return null;
  }

  imageShowcase =()=>{
    let imageList=[];
    if(this.props.images != null){
      for(let i =0; i<this.props.images.length; i++){
        imageList[i]= 
        <List key={i}>
          <Image id="imagesdetail" src={this.props.images[i].url} />
        </List>
      }
    }   
    return imageList;
  }

  render() {
    const { visible } = this.state;
    const imageList = this.images();
    const imageShowcase = this.imageShowcase();
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
                <h5>
                  På denne siden finner du informasjon om eiendommen
                </h5>
              </Header>
            </Grid.Row>
          </Grid>
          <Grid id="detailGrid" stackable textAlign="center">
            <Grid.Row columns={2}>
              <Grid.Column id="detailColumn">
                <Header id="maindetail" >
                  <h2>ADRESSE: {this.props.property.property_name}</h2>
                  <h2>BOLIGTYPE: {this.props.property_type_name}</h2>
                </Header>
              </Grid.Column>
              <Grid.Column id="visningColumn">
                <Map latitude={this.props.latitude} longitude={this.props.longitude}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Transition visible={!visible} animation="scale" duration={200}>
                <div>
                 {imageShowcase}
                </div>
              </Transition>
              <Button
                content={visible ? "Alle bilder" : "Lukk"}
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
