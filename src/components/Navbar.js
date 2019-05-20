import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
 
import { withRouter } from 'react-router-dom';
import { logOut } from '../redux/actions';
import { connect } from 'react-redux';

class NavbarCom extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
	  username: localStorage.getItem('username') || "username" ,
	  reddit: sessionStorage.getItem('reddit') || "reddit" 
	  
    };
   }
	
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
	}
	
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/home">Reddit: {this.state.reddit}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">{this.state.username}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => this.props.logOut(this.props.history)}>Logout</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
	const { username, error } = state;
	return { username, error };
  };
  
  export default connect(
	mapStateToProps, {
	  logOut,
	}
)(withRouter(NavbarCom));
  