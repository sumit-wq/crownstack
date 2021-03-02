import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { connect } from "react-redux";
import headerConstants, { categoriesConstants } from "../../lib/constants";
import locations from "../../lib/constants.json";
import {
  getLocationList,
  setMasterData,
  getCategories,
} from "../../redux/actions/location";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button,
  Card,
} from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import "./categories.css";
import SubCategories from "./SubCategories";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      selectedCategory: null,
      value: null,
    };
  }

  componentDidMount() {
    if (this.props.masterDataReducer.selectedLocation) {
      this.setState({
        category: {
          ...this.props.masterDataReducer.categoryList[
            this.props.masterDataReducer.selectedLocation
          ],
        },
      });
    } else this.props.setMasterData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      (!prevProps.masterDataReducer.selectedLocation &&
        this.props.masterDataReducer.selectedLocation) ||
      prevProps.masterDataReducer.selectedLocation !==
        this.props.masterDataReducer.selectedLocation
    ) {
      this.setState({
        category: {
          ...this.props.masterDataReducer.categoryList[
            this.props.masterDataReducer.selectedLocation
          ],
        },
        selectedCategory: null,
      });
    }
  }

  renderCategories = (category) => {
    const { selectedCategory, subCategories } = this.state;
    if (selectedCategory) {
      return (
        <SubCategories
          selectedCategory={selectedCategory}
          subCategories={subCategories}
        />
      );
    }
    return Object.values(category).map((item) => {
      return (
        <Card
          className="cards"
          key={item.image}
          xs={12}
          sm={6}
          lg={3}
          value={item.name}
        >
          <Card.Img variant="top" src={`/images/category/${item.image}`} />
          <Card.Body className="cardBody">
            <Button
              variant="primary"
              className="cardButton"
              onClick={(e) => {
                this.setState({
                  selectedCategory: e.target.innerText,
                  subCategories: [...item.subcategories],
                });
              }}
            >
              {item.name}
            </Button>
          </Card.Body>
        </Card>
      );
    });
  };

  renderText = () => {
    return (
      <div>
        <h3>{categoriesConstants.WELCOME}</h3>
        <br/>
        <p>{categoriesConstants.SELECT_LOCATION}</p>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Container className="cardsContainer">
          <div className="card-group">
            {this.state.category
              ? this.renderCategories(this.state.category)
              : this.renderText()}
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    masterDataReducer: state.masterDataReducer,
  };
};

export default connect(mapStateToProps, {
  getLocationList,
  setMasterData,
  getCategories,
})(Categories);
