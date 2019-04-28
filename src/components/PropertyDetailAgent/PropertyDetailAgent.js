import React, { Component } from "react";
import "./PropertyDetailAgent.css";
import styled from 'styled-components'
import { Grid, Header, Image, Button, Transition, List } from "semantic-ui-react";
import Map from '../Map/Map';
var QRCode = require('qrcode.react');

export default class propertyDetailAgent extends Component {
  
  state = { visible: true, visibleEier: true, visibleEierInfo: true, visibleValuation: true};

  toggleVisibility = () => this.setState({ visible: !this.state.visible });
  toggleVisibilityEier = () => this.setState({ visibleEier: !this.state.visibleEier });
  toggleVisibilityEierInfo = () => this.setState({ visibleEierInfo: !this.state.visibleEierInfo });
  toggleVisibilityValuation = () => this.setState({visibleValuation: !this.state.visibleValuation })

  historyOfOwner=()=>{
    let listOfOwners=[];
    if(this.props.ownershipLogs != null){
      for(let i = 0; i<this.props.ownershipLogs.length; i++){
        listOfOwners[i]=this.props.ownershipLogs[i].propertyOwner.owner_name;
      }
    }
    return listOfOwners;
  }

  

  ownerInfo =()=>{
    let ownerInfo=[];
    if(this.props.ownershipLogs != null){
      for(let i =0; i<this.props.ownershipLogs.length; i++){
        ownerInfo[i]= 
        <List key={i}>
          <h4>OWNER</h4> <p>{this.props.ownershipLogs[i].propertyOwner.owner_name} {this.props.ownershipLogs[i].propertyOwner.surname}</p>
          <h4>PHONE</h4> <p>{this.props.ownershipLogs[i].propertyOwner.phone}</p>         
        </List>
      }
    }  
    return ownerInfo;
  }

  currentOwner =()=>{
    let ownerInfo=[];
    if(this.props.ownershipLogs != null){
      for(let i =0; i<this.props.ownershipLogs.length; i++){
        ownerInfo[i]= 
        <List key={i}>
          <h4>NAME</h4> <p>{this.props.ownershipLogs[i].propertyOwner.owner_name} {this.props.ownershipLogs[i].propertyOwner.surname}</p>
          <h4>PHONE</h4> <p>{this.props.ownershipLogs[i].propertyOwner.phone}</p>
          <h4>E-MAIL</h4> <p>{this.props.ownershipLogs[i].propertyOwner.email}</p>
          <h4>OWNER TYPE</h4> <p>{this.props.ownershipLogs[i].propertyOwner.ownerType.owner_type_name}</p>
        </List>
      }
    }  
    return ownerInfo[0];
  }
 



  renovationHistory =()=>{
    let renovationList=[];
    if(this.props.renovations != null){
      for(let i =0; i<this.props.renovations.length; i++){
        renovationList[i]= 
        <List key={i}>
          <List.Item>RENOVATION: {this.props.renovations[i].description}</List.Item>
          <List.Item>START DATE: {this.props.renovations[i].date_from}</List.Item>
          <List.Item>END DATE: {this.props.renovations[i].date_to}</List.Item>
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

  imageShowcase =()=>{
    let imageList=[];
    if(this.props.propertyImages != null){
      for(let i =0; i<this.props.propertyImages.length; i++){
        imageList[i]= 
        <List key={i}>
          <Image src={this.props.propertyImages[i].url} />
        </List>
      }
    }   
    return imageList;
  }



  render() {
    const { visible } = this.state;
    const { visibleEierInfo } = this.state;
    const { visibleValuation } = this.state;
    const imageList = this.images();
    const imageShowcase = this.imageShowcase();
    const renovationList = this.renovationHistory();
    const ownerList = this.historyOfOwner();
    const ownerInfo = this.ownerInfo();
    const currentOwner = this.currentOwner();


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
            <Grid.Row>
              <Header className="item centered" id="headerInfo">
                <div style={{float:'left', 'padding-left':'15%'}}>
                  <h1 style={{color:'white'}}>{this.props.property_name}</h1>
                  <h3>{this.props.property.city}, {this.props.property.municipality}</h3>
                  <h2>{this.props.property.zip}</h2>
                </div>
                
              </Header>
            </Grid.Row>
          </Grid>

          <Grid id="detailGrid" stackable textAlign="center">
            <Grid.Row columns={2}>

              <Grid.Column id="detailColumn">
                <Grid rows={2} stackable textAlign="center">
                  <Grid.Row columns={2} style={{'padding-left':'1.5%'}}>
                    <Grid.Column style={{textAlign:'center'}}>
                     <Header id="maindetail">
                        <h4>ADDRESS</h4>
                          <p>{this.props.property_name}, 
                              {this.props.property.zip},
                              {this.props.municipality}
                          </p>
                          

                        <h4>CITY</h4>
                          <p>
                            {this.props.city}
                          </p>

                        <h4>PROPERTY TYPE</h4>
                          <p>
                            {this.props.property_type_name}
                          </p>


                        <h4>BUILT</h4>
                          <p> 
                              {this.props.property.built_at}
                          </p>

                        <h4>AREA</h4> 
                            <p>
                                {this.props.property.area}m
                            </p>

                        <h4>FLOOR</h4>
                            <p>
                                {this.props.property.floor}
                            </p>


                        <h4>ROOM</h4>
                            <p>
                              {this.props.property.rooms}
                            </p>

                        <h4>STATUS</h4> 
                            <p>
                                {this.props.property_status_name}
                            </p>

                        <h4>VALUE</h4> 
                            <p>
                                {this.props.value} kr
                            </p>
                            </Header>
                        </Grid.Column>
                        <Grid.Column style={{textAlign:'center'}}>
                          <Header id="maindetail">

                            <h3>CURRENT OWNER</h3> 
                              <p>
                              {currentOwner}
                              </p>


                          </Header>
                          <QRCode value="http://facebook.github.io/react/" />

                        </Grid.Column>
                     
                
                  
                </Grid.Row>

              
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Transition visible={!visibleValuation} animation="scale" duration={200}>
                      <div id="fullInfoText">
                        {renovationList}
                      </div>
                    </Transition>
                    <Button
                      style={{}}
                      content={visibleValuation ? "Renovations" : "Hide"}
                      onClick={this.toggleVisibilityValuation}
                      className="ui blue button"
                      color="blue"
                    />
                  </Grid.Column>

                  <Grid.Column>

                    <Transition visible={!visibleEierInfo} animation="drop" duration={200}>
                      <div id="fullInfoText">
                        {ownerInfo}
                      </div>
                    </Transition>
                    <Button 
                      style={{}}
                      content={visibleEierInfo ? "Owner history" : "Hide"}
                      onClick={this.toggleVisibilityEierInfo}
                      className="ui blue button"
                      color="blue"
                    />
                  </Grid.Column>
                   
                </Grid.Row>
              </Grid>

              </Grid.Column>
              <Grid.Column id="visningColumn">

                {/* <Map latitude={this.props.latitude} longitude={this.props.longitude}/> */}
                <Map latitude={this.props.latitude} longitude={this.props.longitude}/>

              </Grid.Column>
            </Grid.Row>
            <h3 id="infoomeiendomText" style={{color:'white'}}>IMAGES</h3>
            <Grid.Row>
              <Transition visible={!visible} animation="scale" duration={200}>
                <div id="fullInfoText">
                 {imageShowcase}
                </div>
              </Transition>

              <Button
                content={visible ? "Show More" : "Hide"}
                onClick={this.toggleVisibility}
                className="ui green button"
                color="green"
                
              />
              
            </Grid.Row>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}


