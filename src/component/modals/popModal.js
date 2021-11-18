import React, { Component } from "react";
import Modal from "react-native-modal";
import { View } from "react-native";
import styled from "styled-components";

const CustomText = styled.Text`
  color: red;
  text-align: center;
`;

const ModalBody = styled.View`
  background-color: red;
`;

class PopModal extends Component {
  render() {
    return (
      <Modal
        isVisible={this.props.isVisible}
        coverScreen={false}
        animationIn="slideInUp"
        supportedOrientations={["portrait"]}
        animationOut="slideOutDown"
        onBackdropPress={() => this.props.toggle()}
        style={{
          margin: 0,
          height: 200,
        }}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationType="slide"
        onRequestClose={() => this.props.toggle()}
      >
        <View
          style={{
            height: "85%",
            backgroundColor: "#ffff",
            marginTop: "auto",
            borderTopEndRadius: 20,
            borderTopLeftRadius: 20,
          }}
        >
          <View
            style={{
              display: "flex",
              paddingTop: 20,
              paddingRight: 10,
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <CustomText onPress={() => this.props.toggle()}>CLOSE</CustomText>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <CustomText>this is just to show that the modal works</CustomText>
          </View>
        </View>
      </Modal>
    );
  }
}

export default PopModal;
