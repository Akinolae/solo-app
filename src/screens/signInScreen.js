import React from "react";
import styled from "styled-components";
import { StyleSheet, View } from "react-native";
import { Input, Button, SocialIcon } from "react-native-elements";
import { Formik } from "formik";
import { login } from "../services/auth";
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
  align-items: center;
  width: 90%;
  margin-top: 20px;
`;

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    showPassword: false,
    formLoading: false,
    loginError: "",
  };

  togglePassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  formSubmit = async (values) => {
    this.setState({
      formLoading: true,
      loginError: "",
    });
    try {
      await login(values);
      this.setState(
        {
          formLoading: false,
        },
        () => this.props.navigation.push("dashboard")
      );
    } catch (error) {
      this.setState({
        loginError: error,
        formLoading: false,
      });
    }
  };

  render() {
    const { showPassword, formLoading, loginError } = this.state;
    return (
      <Wrapper>
        <Text>Welcome</Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={this.formSubmit}
        >
          {({ handleChange, handleSubmit, values }) => {
            return (
              <FormWrapper>
                {!!loginError && (
                  <Text style={{ color: "red", fontSize: 14 }}>
                    {loginError}
                  </Text>
                )}
                <Input
                  leftIcon={<Icon name="envelope" color="black" size={12} />}
                  onChangeText={handleChange("email")}
                  style={styles.input}
                  placeholder="Enter email"
                  id="email"
                  value={values.email}
                />
                <Input
                  leftIcon={<Icon name="lock" color="black" size={15} />}
                  placeholder="Enter password"
                  secureTextEntry={showPassword ? false : true}
                  style={styles.input}
                  value={values.password}
                  id="password"
                  onChangeText={handleChange("password")}
                  rightIcon={
                    showPassword ? (
                      <Icon
                        name="eye"
                        onPress={this.togglePassword}
                        size={20}
                      />
                    ) : (
                      <Icon
                        name="eye-slash"
                        size={20}
                        onPress={this.togglePassword}
                      />
                    )
                  }
                />
                <View style={styles.buttonDiv}>
                  <Button
                    onPress={handleSubmit}
                    title={formLoading ? "loading" : "LOGIN"}
                    buttonStyle={{
                      width: 250,
                      height: 50,
                      borderRadius: 50,
                      backgroundColor: "green",
                      marginTop: 10,
                    }}
                  />
                </View>
              </FormWrapper>
            );
          }}
        </Formik>
        <View style={styles.buttonDiv}>
          <Text style={{ fontSize: 16, marginTop: 15 }}>
            Don't have an account?{" "}
            <Text
              onPress={() => this.props.navigation.push("register")}
              style={{ color: "blue", fontSize: 16 }}
            >
              sign up
            </Text>
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <SocialIcon type="google" />
          <SocialIcon type="twitter" />
          <SocialIcon type="instagram" />
        </View>
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SignInScreen;
