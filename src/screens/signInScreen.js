import React from "react";
import styled from "styled-components";

const Wrapper = styled.View`
  height: 100%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text`
  color: white;
`;

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Wrapper>
        <Text>Sign in Screen</Text>
      </Wrapper>
    );
  }
}
export default SignInScreen;
