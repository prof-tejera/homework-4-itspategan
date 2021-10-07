import { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  color: #f1faee;
  flex: 1 25%;
  padding: 15px;
  font-size: 26px;
  background-color: #1d3557;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  border: 1px solid #f1faee;
  border-radius: 5px;

  &:hover {
    background-color: #0f1c2e;
  }

  &:active {
    background-color: lightgray;
  }
`;

class Operator extends Component {
  static propTypes = {
    value: PropTypes.string,
  };
  render() {
    return (
      <Container onClick={() => this.props.onClick(this.props.value)}>
        {this.props.value}
      </Container>
    );
  }
}

export default Operator;
