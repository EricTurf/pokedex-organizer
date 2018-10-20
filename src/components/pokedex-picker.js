import React from "react";

import styled from "styled-components/native";
import { Picker } from "native-base";

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Label = styled.Text`
  font-weight: 800;
`;

export default class PokedexPicker extends React.Component {
  render() {
    return (
      <Wrapper>
        <Label>Pokedex:</Label>
        <Picker
          mode="dropdown"
          selectedValue={this.props.mode}
          onValueChange={this.props.onModeChange}
        >
          <Picker.Item label="National" value="National" />
          <Picker.Item label="Kanto Region" value="Kanto" />
          <Picker.Item label="Johto Region" value="Johto" />
          <Picker.Item label="Hoenn Region" value="Hoenn" />
          <Picker.Item label="Sinnoh Region" value="Sinnoh" />
          <Picker.Item label="Unova Region" value="Unova" />
          <Picker.Item label="Kalos Region" value="Kalos" />
        </Picker>
      </Wrapper>
    );
  }
}
