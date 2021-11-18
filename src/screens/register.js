import React from "react";
import styled from "styled-components";
import { StyleSheet, View, ScrollView } from "react-native";
import { Input, Button } from "react-native-elements";
import { Formik } from "formik";
import { register } from "../services/auth";
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
  width: 95%;
  margin: auto;
  flex: 1;
`;

const WelcomeWrapper = styled.View`
  height: 22%;
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
    regError: "",
  };

  togglePassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  formSubmit = async (values) => {
    this.setState({
      formLoading: true,
      regError: "",
    });
    try {
      await register(values);
      this.setState(
        {
          formLoading: false,
          regError: "",
        },
        () => this.props.navigation.push("dashboard")
      );
    } catch (error) {
      this.setState({
        regError: error,
        formLoading: false,
      });
    }
  };

  render() {
    const { showPassword, formLoading, regError } = this.state;
    return (
      <Wrapper>
        <WelcomeWrapper
          style={{ borderBottomEndRadius: 40, borderBottomLeftRadius: 40 }}
        >
          <Text>Create account</Text>
        </WelcomeWrapper>
        <Formik
          initialValues={{
            email: "",
            password: "",
            firstName: "",
            surName: "",
            lastName: "",
          }}
          onSubmit={this.formSubmit}
        >
          {({ handleChange, handleSubmit, values }) => {
            return (
              <FormWrapper>
                <ScrollView
                  contentContainerStyle={{
                    width: "100%",
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignSelf: "flex-start",
                    }}
                  >
                    {!!regError && (
                      <Text style={{ color: "red", fontSize: 14 }}>
                        {regError}
                      </Text>
                    )}
                  </View>
                  <Input
                    leftIcon={<Icon name="user" color="black" size={12} />}
                    onChangeText={handleChange("firstName")}
                    style={styles.input}
                    placeholder="First name"
                    id="firstName"
                    value={values.firstName}
                  />
                  <Input
                    leftIcon={<Icon name="user" color="black" size={12} />}
                    onChangeText={handleChange("surName")}
                    style={styles.input}
                    placeholder="Surname"
                    id="surName"
                    value={values.surName}
                  />
                  <Input
                    leftIcon={<Icon name="user" color="black" size={12} />}
                    onChangeText={handleChange("lastName")}
                    style={styles.input}
                    placeholder="Last name"
                    id="lastName"
                    value={values.lastName}
                  />
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
                      title={formLoading ? "loading" : "CREATE ACCOUNT"}
                      buttonStyle={{
                        width: 250,
                        height: 50,
                        borderRadius: 50,
                        backgroundColor: "#0d3153",
                        marginTop: 10,
                      }}
                    />
                  </View>
                  <View style={styles.buttonDiv}>
                    <Text
                      style={{ fontSize: 18, paddingTop: 10, color: "black" }}
                    >
                      already have an account ?{" "}
                      <Text
                        onPress={() => this.props.navigation.navigate("signin")}
                        style={{ color: "blue", fontSize: 18 }}
                      >
                        log in
                      </Text>
                    </Text>
                  </View>
                </ScrollView>
              </FormWrapper>
            );
          }}
        </Formik>
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 60,
    fontSize: 18,
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SignInScreen;
