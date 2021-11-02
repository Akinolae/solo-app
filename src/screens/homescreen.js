import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import { CustomButton } from "../component/";

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
        <CustomButton
          title="click me"
          textColor="#FFFFFF"
          bg="#FF0000"
          height="50px"
          width="120px"
        />
      </Wrapper>
    );
  }
}

export default HomeScreen;
