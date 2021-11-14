import React from "react";
import styled from "styled-components";

const Wrapper = styled.View`
  background: green;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: white;
  font-size: 28px;
`;

class Settings extends React.Component {
  render() {
    return (
      <Wrapper>
        <Text>Settings</Text>
      </Wrapper>
    );
  }
}
export default Settings;
