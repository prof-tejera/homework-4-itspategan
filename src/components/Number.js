import { Component } from "react";
import styled from "styled-components";

// const Container = styled.div`
//   padding: 10px;
//   border: 1px solid black;
//   width: 60px;
// `;
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
  render() {
    return (
      <Container onClick={() => this.props.onClick(this.props.value)}>
        {this.props.value}
      </Container>
    );
  }
}

export default Number;
