import React from "react";
import styled from "styled-components";

const Wrapper = styled.View`
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Text = styled.Text`
  color: white;
`;
class RegisterScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <Text>sign up page</Text>
      </Wrapper>
    );
  }
}

export default RegisterScreen;
