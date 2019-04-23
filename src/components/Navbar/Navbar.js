
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import "./Navbar.css";

class Navbar extends Component{
  constructor(props){
    super(props)
    this.state={
      role: props.role
    }
  }  
  componentDidUpdate(){
    console.log(this.state.role)
  }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state;

    let nav = (<Menu color="teal" inverted id="menu">

    <Menu.Item
      as={Link} to='/' 
      name='Home' 
      active={activeItem === 'Home'} 
      onClick={this.handleItemClick}
    />

    <Menu.Item
      as={Link} to= '/signIn'
      name='Sign In'
      active={activeItem === 'Sign In'}
      onClick={this.handleItemClick}
    />

    <Menu.Item
      as={Link} to='/register' 
      name='Register'
      active={activeItem === 'Register'}
      onClick={this.handleItemClick}
    />
    
    </Menu>);

    if(parseInt(this.state.role) === 1) {
      nav = (
        <Menu color="teal" inverted id="menu">
      <Menu.Item
      as={Link} to='/' 
      name='Home' 
      active={activeItem === 'Home'} 
      onClick={this.handleItemClick}>
      </Menu.Item>

      <Menu.Item
      as={Link} to='/user' 
      active={activeItem === 'User'} 
      onClick={this.handleItemClick}>
      </Menu.Item>

      <Menu.Item
      as={Link} to='/properties' 
      name='Restaurants'
      active={activeItem === 'Restaurants'}
      onClick={this.handleItemClick}
     >
     </Menu.Item>
      
      <Menu.Item
      as={Link} to='/signIn'
      name='Log Out'
      active={activeItem === 'Log out'}
      onClick={this.handleLogOut}
    >
    </Menu.Item>
    </Menu>
      );
    }
    else if(parseInt(this.state.role) === 2){
      nav = (
        <Menu  color="teal" inverted id="menu">
        <Menu.Item name='Home'
        as={Link} to='/'  
        active={activeItem === 'Home'} 
        onClick={this.handleItemClick} />

      <Menu.Item name='OwnerDashboard'
      as={Link} to='/OwnerDashboard' 
      active={activeItem === 'OwnerDashboard'} 
      onClick={this.handleItemClick}>
      </Menu.Item>

     <Menu.Item
      as={Link} to='/signIn'
      name='Log Out'
      active={activeItem === 'Log out'}
      onClick={this.handleLogOut}
     >
    </Menu.Item>
        </Menu>);
    }
  
      return (
        <React.Fragment>
          {nav}
        </React.Fragment>
      )
  }
}

export default Navbar;