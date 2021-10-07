import { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #f1faee;
  font-size: 48px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  border-radius: 5px;
`;

class Screen extends Component {
  render() {
    return <Container>{this.props.value}</Container>;
  }
}

export default Screen;
