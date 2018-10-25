import React from "react";

import styled from "styled-components/native";
import { Platform } from "react-native";
import { Switch } from "native-base";

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Label = styled.Text`
  font-weight: 800;
`;

export default class ShowSelected extends React.Component {
  render() {
    return (
      <Wrapper>
        <Label>Include selected:</Label>
        <Switch
          value={this.props.checked}
          style={{ transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }] }}
          onValueChange={() => this.props.onPress()}
          trackColor={
            Platform.OS === "ios" ? { true: "rgba(27,155,225,1)" } : {}
          }
        />
      </Wrapper>
    );
  }
}
