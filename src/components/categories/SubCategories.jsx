import { React, Component } from "react";
import { Container } from "react-bootstrap";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button,
  Card,
} from "react-bootstrap";

class SubCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subCategpries: null,
    };
  }

  componentDidMount() {
  }

  componentDidUpdate(){

  }

  renderSubCategories = (subCategory) => {
    return subCategory && subCategory.map((item) => {
      return (
        <Card
          className="cards"
          key={item.image}
          xs={12}
          sm={6}
          lg={3}
          value={item.name}
        >
          <Card.Img variant="top" src={`/images/category/subcategory/${item.image}`} />
          <Card.Body className="cardBody">
            <Button
              variant="primary"
              className="cardButton"
              onClick={(e) => {
                this.setState({
                  selectedCategory: e.target.innerText,
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

  render() {
    return (
      <Container className="cardsContainer">
        <div className="card-group">
          {this.renderSubCategories(this.props.subCategories)}
        </div>
      </Container>
    );
  }
}

export default SubCategories;
