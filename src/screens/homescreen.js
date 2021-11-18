import React from "react";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import styled from "styled-components/native";

import Icon from "react-native-vector-icons/FontAwesome";
import { user, transactions } from "../data/index";
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

const NotificationWrapper = styled.View`
  height: 10%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ButtonView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: absolute;
  height: 100%;
  top: 15%;
  width: 100%;
`;

const AccountCard = styled.View`
  height: 200px;
  width: 100%;
  border-radius: 20px;
  background: #bf00ff;
`;

const TransactionView = styled.View`
  height: 70px;
  background: #555555;
  margin-top: 25px;
  border-radius: 20px;
`;
class HomeScreen extends React.Component {
  state = {
    isVisible: false,
  };

  render() {
    return (
      <SafeAreaView
        style={{ marginTop: StatusBar.currentHeight, backgroundColor: "#0000" }}
      >
        {/* <StatusBar backgroundColor="#0000" {...this.props} /> */}

        <Wrapper>
          <NotificationWrapper>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "40%",
              }}
            >
              <Button
                buttonStyle={{ backgroundColor: "none" }}
                icon={<Icon name="bars" color="white" size={20} />}
              />
              <CustomText style={{ color: "white", fontSize: 24 }}>
                Hello {user.firstName}
              </CustomText>
            </View>
            <Button
              buttonStyle={{ backgroundColor: "none" }}
              icon={<Icon name="bell" color="white" size={20} />}
            />
          </NotificationWrapper>

          <View style={{ padding: 10 }}>
            <AccountCard></AccountCard>
            <View
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                paddingTop: 20,
              }}
            >
              <CustomText style={{ fontSize: 28, color: "#f5f5f5" }}>
                Recent Transactions
              </CustomText>
            </View>

            <FlatList
              data={transactions}
              keyExtractor={(items, i) => i.toString()}
              renderItem={({ amount }) => (
                <TransactionView>
                  <CustomText>{amount}</CustomText>
                </TransactionView>
              )}
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

const mapStateToProps = (state) => ({
  payLoad: state.user.signIn.payLoad,
});
export default connect(mapStateToProps, {})(HomeScreen);
