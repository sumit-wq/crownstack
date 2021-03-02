import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { connect } from "react-redux";
import headerConstants from "../../lib/constants";
import locations from "../../lib/constants.json";
import {
  getLocationList,
  setMasterData,
  setLocation,
} from "../../redux/actions/location";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  componentDidMount() {
    this.props.setMasterData();
    this.props.getLocationList();
  }

  renderLocations = () => {
    return this.props.locationReducer.locationList.map((location, index) => {
      return (
        <NavDropdown
          drop="right"
          key={index}
          title={location.name}
          onSelect={(selectedKey) => {
            this.props.setLocation(selectedKey);
            this.setState({ value: selectedKey });
            return true;
          }}
        >
          {location.branches.map((branch, index) => {
            return (
              <NavDropdown.Item
                key={branch.name}
                eventKey={branch.id}
                value={branch.name}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                {branch.name}
              </NavDropdown.Item>
            );
          })}
        </NavDropdown>
      );
    });
  };

  render() {
    return (
      <div>
        {/* ---------------dropdown---------- */}
        <Row>
          <Col xs={12} sm={6} lg={6}>
            <div>{headerConstants.RENTAL_MANAGEMENT_SYSTEM}</div>
          </Col>
          <Col xs={12} sm={6} lg={6}>
            <Navbar>
              <Navbar.Collapse>
                <Nav className="mr-auto">
                  <NavDropdown
                    className="header-dropdown"
                    title={headerConstants.SELECT_LOCATION}
                  >
                    {this.renderLocations()}
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locationReducer: state.masterDataReducer,
  };
};

export default connect(mapStateToProps, {
  getLocationList,
  setMasterData,
  setLocation,
})(Header);
