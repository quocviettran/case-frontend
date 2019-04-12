import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Container} from "semantic-ui-react";
import Navbar from "./components/Navbar/Navbar"
import LandingPage from "./container/LandingPage/LandingPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "Home",
      id: 0,
      role: 0,
      token: "",
      data: []
    };
  }

  componentDidMount() {}

  handleChanged = (id, role, token, data) => {
    this.setState(() => ({ id, role, token, data }));
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogOut = () => {
    this.setState({ role: 0, activeItem: "Sign In" });
  };

  getData = () => {
    return this.state.id;
  };

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
