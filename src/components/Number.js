import { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  color: #f1faee;
  flex: 1 25%;
  padding: 15px;
  font-size: 26px;
  background-color: #a8dadc;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  border: 1px solid #f1faee;
  border-radius: 5px;

  &:hover {
    background-color: #769a9c;
  }
  &:active {
    background-color: lightgray;
  }
`;

class Number extends Component {
  static propTypes = {
    value: PropTypes.number,
  };
  render() {
    return (
      <Container onClick={() => this.props.onClick(this.props.value)}>
        {this.props.value}
      </Container>
    );
  }
}

export default Number;
