import React from "react";
import styled from "styled-components";

const Wrapper = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
  flex: 1;
`;
const Text = styled.Text`
  color: white;
  font-size: 28px;
`;

class Profile extends React.Component {
  render() {
    return (
      <Wrapper>
        <Text>Profile</Text>
      </Wrapper>
    );
  }
}

export default Profile;
