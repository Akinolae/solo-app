import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import { Button, Header } from "react-native-elements";
import Modal from "react-native-modal";
import styled from "styled-components/native";
import { CustomButton } from "../component/";

const Wrapper = styled.View`
  background-color: black;
  height: 100%;
  width: 100%;
  padding-top: 25px;
`;

const CustomText = styled.Text`
  color: red;
  text-align: center;
`;

const ButtonView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: red;
  flex: 1;
  width: 92%;
`;
class HomeScreen extends React.Component {
  state = {
    showName: false,
    isVisible: false,
  };

  toggleName = () => {
    this.setState({
      showName: !this.state.showName,
    });
  };
  render() {
    return (
      <SafeAreaView
        style={{ marginTop: StatusBar.currentHeight, backgroundColor: "#0000" }}
      >
        <Wrapper>
          <Modal
            isVisible={this.state.isVisible}
            coverScreen={false}
            animationIn="slideInUp"
            supportedOrientations={["portrait"]}
            animationOut="slideOutDown"
            onBackdropPress={() => this.setState({ isVisible: false })}
            style={{
              margin: 0,
              height: 200,
            }}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationType="slide"
            onRequestClose={() =>
              this.setState({
                isVisible: !this.state.isVisible,
              })
            }
          >
            <View
              style={{
                height: "50%",
                backgroundColor: "#ffff",
                marginTop: "auto",
                // borderRadius: 20,
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
                <CustomText
                  onPress={() =>
                    this.setState({
                      isVisible: false,
                    })
                  }
                >
                  CLOSE
                </CustomText>
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <CustomText>
                  this is just to show that the modal works
                </CustomText>
              </View>
            </View>
          </Modal>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                backgroundColor: "#9300ff",
                borderRadius: 10,
                width: "92%",
                height: 200,
              }}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: 7,
                  paddingRight: 7,
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <CustomText style={{ color: "#ffff" }}>A</CustomText>
                <CustomText style={{ color: "#ffff" }}>B</CustomText>
              </View>
            </View>
            {/* <CustomText>This is the home page</CustomText> */}
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
              marginLeft: 15,
              flexDirection: "row",
              borderRadius: 10,
              width: "92%",
            }}
          >
            <View>
              <CustomText style={{ color: "#ffff" }}>view</CustomText>
            </View>
            <CustomButton
              title="akinola"
              textColor="#FFFFFF"
              buttonStyle={{
                backgroundColor: "red",
              }}
              bg="#FF0000"
              height="50px"
              width="20px"
              onPress={() => {
                this.setState({
                  isVisible: true,
                });
              }}
            />
          </View>
        </Wrapper>
      </SafeAreaView>
    );
  }
}

HomeScreen.defaultProps = {
  isVisible: false,
};

export default HomeScreen;
