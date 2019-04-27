import React, { Component } from "react";
import "./PropertyDetailGuest.css";
import { Grid, Header, Image, Button, Transition, List, Container } from "semantic-ui-react";
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
            <Grid.Row style={{'padding-bottom': '0px'}}>
              <Header className="item centered" id="headerInfo">
                <div style={{float: 'left', 'padding-left':'20%'}}>
                  <h1 style={{color: 'white'}}>{this.props.property_name}</h1>
                  <h2>Property type: {this.props.property_type_name}</h2>
                </div>
                <h2>{this.props.city}</h2>
              </Header>
            </Grid.Row>
          </Grid>

          <Grid id="detailGrid" stackable textAlign="center">
          
            <Grid.Row style={{padding: '0px'}}>
              <div style={{height: '500px',
                           width: '100%'}}>

                <Map latitude={this.props.latitude} longitude={this.props.longitude}/>  

              </div>

            </Grid.Row>
            <Grid.Row>
             
              <Transition visible={!visible} animation="scale" duration={200}>
                <div>
                 {imageShowcase}
                </div>
              </Transition>

              <Button
                content={visible ? "All images" : "close"}
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
