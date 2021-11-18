import React from "react";
import styled from "styled-components";
import { Button } from "react-native-elements";
import PopModal from "../component/modals/popModal";

const Wrapper = styled.View`
  background: green;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: white;
  font-size: 28px;
`;

class Settings extends React.Component {
  state = {
    isVisible: false,
  };

  toggleModal = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    return (
      <Wrapper>
        <PopModal isVisible={this.state.isVisible} toggle={this.toggleModal} />
        <Button title="settings" onPress={() => this.toggleModal()} />
      </Wrapper>
    );
  }
}
export default Settings;
