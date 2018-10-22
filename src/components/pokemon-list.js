import React from "react";
import { FlatList } from "react-native";

import PokemonItem from "./pokemon-item";

export default class PokemonList extends React.Component {
  render() {
    const { pokemon, onPress } = this.props;
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        contentContainerStyle={{
          justifyContent: "flex-start",
          paddingBottom: 60
        }}
        data={pokemon}
        renderItem={({ item }) => <PokemonItem {...item} onPress={onPress} />}
      />
    );
  }
}
