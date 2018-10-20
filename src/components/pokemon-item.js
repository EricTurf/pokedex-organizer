import React from "react";
import { Image } from "react-native";

import styled from "styled-components/native";

const Main = styled.TouchableOpacity`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding-vertical: 25;
  background-color: ${({ isEven }) =>
    !isEven ? "white" : "rgba(33, 150, 243, 0.06)"};
`;

const Name = styled.Text``;
const Sprite = styled(Image)`
  width: 60;
  height: 60;
  margin-horizontal: 50;
`;

const Checked = styled.View`
  width: 30;
  height: 30;
  border-radius: 15;
  border-color: rgba(0, 0, 0, 0.2);
  border-width: 1;
  margin-left: 30;
  background-color: ${({ selected }) =>
    selected ? "rgba(27,155,225,0.7)" : "transparent"};
`;

export default class PokemonItem extends React.Component {
  render() {
    const { sprite, name, number, selected, onPress } = this.props;

    const isEven = parseInt(number) % 2 === 0;

    return (
      <Main isEven={isEven} onPress={() => onPress(name)} activeOpacity={0.65}>
        <Checked selected={selected} />
        <Sprite source={{ uri: sprite }} />
        <Name>{`${number} ${name}`}</Name>
      </Main>
    );
  }
}
