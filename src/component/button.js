import React, { Component } from "react";
import { Button } from "react-native";
import styled from "styled-components/native";
const StyledButton = styled(Button).attrs({
  full: true,
  rounded: false,
})`
  background: ${(props) => props.bg};
  color: ${(props) => props.textColor};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

class CustomButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { icon } = this.props;
    const IconComponent = icon;
    return (
      <StyledButton {...this.props}>
        {!!this.props.title && this.props.title}
        {!!icon && <IconComponent />}
      </StyledButton>
    );
  }
}

export default CustomButton;
