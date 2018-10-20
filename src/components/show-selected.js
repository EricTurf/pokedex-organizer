import React from "react";

import styled from "styled-components/native";
import { CheckBox } from "native-base";

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
        <Label>Show selected:</Label>
        <CheckBox
          checked={this.props.checked}
          onPress={() => this.props.onPress()}
        />
      </Wrapper>
    );
  }
}
