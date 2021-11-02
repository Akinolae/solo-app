import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

const Wrapper = styled(View)``;

const CustomText = styled(Text)`
  color: white;
`;

class HomeScreen extends React.Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <CustomText>This is the home page</CustomText>
      </Wrapper>
    );
  }
}

export default HomeScreen;
