import React from "react";
import styled from "styled-components";
import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import { Input, Button, SocialIcon } from "react-native-elements";
import { Formik } from "formik";
import { login } from "../services/auth";
import { user_login } from "../services/appstore/actions/actions";
import Icon from "react-native-vector-icons/FontAwesome";

const Wrapper = styled.View`
  height: 100%;
  background-color: white;
  flex: 1;
`;

const Text = styled.Text`
  color: white;
  font-size: 28px;
`;

const FormWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 35%;
  margin: 30px auto;
`;

const WelcomeWrapper = styled.View`
  height: 25%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d3153;
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
      await login(values, user_login);
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

  componentDidMount = () => {
    this.setState({
      loginError: "",
    });
  };
  render() {
    const { showPassword, formLoading, loginError } = this.state;
    return (
      <Wrapper>
        <WelcomeWrapper
          style={{ borderBottomEndRadius: 40, borderBottomLeftRadius: 40 }}
        >
          <Text>Welcome</Text>
        </WelcomeWrapper>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={this.formSubmit}
        >
          {({ handleChange, handleSubmit, values }) => {
            return (
              <FormWrapper>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignSelf: "flex-start",
                  }}
                >
                  {!!loginError && (
                    <Text style={{ color: "red", fontSize: 14 }}>
                      {loginError}
                    </Text>
                  )}
                </View>
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
                      backgroundColor: "#0d3153",
                      marginTop: 10,
                    }}
                  />
                </View>
              </FormWrapper>
            );
          }}
        </Formik>
        <View style={styles.buttonDiv}>
          <Text style={{ fontSize: 18, color: "black" }}>
            Don't have an account ?{" "}
            <Text
              onPress={() => this.props.navigation.navigate("register")}
              style={{ color: "blue", fontSize: 18 }}
            >
              create one
            </Text>
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
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
