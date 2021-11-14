import React from "react";
import styled from "styled-components";
import { StyleSheet, View } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const Wrapper = styled.View`
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text`
  color: black;
  font-size: 28px;
`;

const FormWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  margin-top: 20px;
`;

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    showPassword: false,
  };

  togglePassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };
  render() {
    const { showPassword } = this.state;
    return (
      <Wrapper>
        <Text>Welcome</Text>
        <FormWrapper>
          <Input
            leftIcon={<Icon name="user" color="black" size={24} />}
            style={styles.input}
            placeholder="Enter email"
          />
          <Input
            leftIcon={<Icon name="lock" color="black" size={24} />}
            placeholder="Enter password"
            secureTextEntry={showPassword ? false : true}
            style={styles.input}
            rightIcon={
              showPassword ? (
                <Icon name="eye" onPress={this.togglePassword} size={24} />
              ) : (
                <Icon
                  name="eye-slash"
                  size={24}
                  onPress={this.togglePassword}
                />
              )
            }
          />
          <View style={styles.buttonDiv}>
            <Button
              onPress={() => console.log("pressed")}
              title="LOGIN"
              buttonStyle={{
                width: 250,
                height: 50,
                borderRadius: 50,
                backgroundColor: "green",
                marginTop: 10,
              }}
            />
          </View>
          <View style={styles.buttonDiv}>
            <Text style={{ fontSize: 16, marginTop: 15 }}>
              Don't have an account? sign up
            </Text>
          </View>
        </FormWrapper>
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 18,
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SignInScreen;
