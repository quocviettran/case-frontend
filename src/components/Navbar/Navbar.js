
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';



class Navbar extends Component{
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state;

    let nav = (<Menu>

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
        <Menu>
      <Menu.Item
      as={Link} to='/' 
      name='Home' 
      active={activeItem === 'Home'} 
      onClick={this.handleItemClick}>
      </Menu.Item>

      <Menu.Item name='Userdashboard'
      as={Link} to='/userDashboard' 
      active={activeItem === 'Userdashboard'} 
      onClick={this.handleItemClick}>
      </Menu.Item>

      <Menu.Item
      as={Link} to='/restaurants' 
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
        <Menu>
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
      as={Link} to='/restaurants' 
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
        </Menu>);
    }
  
      return (
        <Menu>
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          >
            Editorials
          </Menu.Item>
  
          <Menu.Item name='Sign up' active={activeItem === 'Sign up'} onClick={this.handleItemClick}>
            Reviews
          </Menu.Item>
  
          <Menu.Item
            name='Sign in'
            active={activeItem === 'Sign in'}
            onClick={this.handleItemClick}
          >
            Upcoming Events
          </Menu.Item>
        </Menu>
      )
}
}

export default Navbar;