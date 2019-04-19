
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

import LandingPage from "./container/LandingPage/LandingPage";
import PropertyDetailContainer from "./container/PropertyDetail/PropertyDetailContainer";
import PropertyList from '../src/container/PropertyList/PropertyList';


class App extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    //const { activeItem } = this.state;
    return (
      <BrowserRouter>
        <Container>
          <Navbar/>
          <div className="content">
            <Route
              exact
              path="/"
              render={props => (
                <LandingPage {...props} handleChanged={this.handleChanged} />
              )}
            />
        {/*      <Route exact path="/signIn" render={(props) => <Login {...props} handleChanged={this.handleChanged} />} />
      {<Route exact path="/register" render={(props) => <Register {...props}  />} /> }

            <Route
              exact
              path="/propertydetail/"
              render={props => (
                <PropertyDetailContainer {...props} handleChanged={this.handleChanged} />
              )}
            />
            <Route
              exact
              path="/propertydetail/:property_id"
              render={props => (
                <PropertyDetailContainer {...props} handleChanged={this.handleChanged} />
              )}
            />

            <Route 
              exact
              path="/propertylist"
              render={props => (
                <PropertyList {...props} handleChanged={this.handleChanged} />
              )}
            />


            {/* <Route exact path="/signIn" render={(props) => <Login {...props} handleChanged={this.handleChanged} />} />
      <Route exact path="/register" render={(props) => <Register {...props}  />} /> }
      { <Route exact path="/restaurants" render={(props) => <Restaurants {...props} handleChanged={this.handleChanged} />} />
      <Route exact path="/userDashboard" render={(props) => <UserDashBoard {...props} getData={this.getData} />} />
      <Route exact path="/ownerDashboard" render={(props) => <OwnerDashboard {...props}  getData={this.getData}/>} />
      <Route exact path="/createRestaurants" render={(props) => <CreateRestaurants {...props}  getData={this.getData}/>} /> */}
          </div>
          </Container>
      </BrowserRouter>
    );
  }
}

export default App;
