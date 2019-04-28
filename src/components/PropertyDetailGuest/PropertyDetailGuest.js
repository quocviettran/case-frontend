import React, { Component } from "react";
import styled from 'styled-components';
import "./PropertyDetailGuest.css";
import { Grid, Header, Image, Button, Transition, List, Container } from "semantic-ui-react";
import Map from '../Map/Map';
var QRCode = require('qrcode.react');


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


    const Content = styled.div`
    background-image: url(${imageList !== null ? imageList[0] : null});
    display: flex;
    min-height: calc(60vh - 58px);
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    color: #fff;
    min-height: 400px;
    height: 800px;

`;
    return (
      <React.Fragment>
        <div id="bodyDiv">
        {/* <Image
            id="headerImg"
            src={imageList !== null ? imageList[0] : null}
          /> */}

          <Content></Content>
          <Grid id="headerGrid" stackable textAlign="center">
            <Grid.Row style={{'padding-bottom': '0px'}}>
              <Header className="item centered" id="headerInfo" style={{textAlign:'center'}}>
                <div style={{float: 'left', 'padding-left':'20%'}}>
                  <h1 style={{color: 'white'}}>{this.props.property_name}</h1>
                  <br></br>
                  <br></br>
                  <dt>PROPERTY TYPE</dt>
                  <h3 style={{margin:'0%'}}> {this.props.property_type_name}</h3>
                </div>
                <h2>{this.props.city}</h2>
                <div style={{'padding-bottom':'2.5%', width:'90%'}}>
                   <QRCode value="http://facebook.github.io/react/" />
                </div>
                

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
