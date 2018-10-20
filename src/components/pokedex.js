import React from "react";

import styled from "styled-components/native";

import PokemonList from "./pokemon-list";

const DexWrapper = styled.View``;
const DexTitle = styled.Text`
  margin-left: 5;
`;

export default class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.getPokemonList = this.getPokemonList.bind(this);
  }

  getPokemonList() {
    const { mode, pokemon, showSelected } = this.props;
    let filteredPokemon = pokemon;

    if (mode !== "unselected" && mode !== "National")
      filteredPokemon = filteredPokemon.filter(({ region }) => region === mode);

    if (!showSelected)
      filteredPokemon = filteredPokemon.filter(({ selected }) => !selected);

    return filteredPokemon;
  }

  render() {
    const { selectPokemon, mode } = this.props;

    return (
      <DexWrapper>
        <DexTitle>{`${mode} Dex`}</DexTitle>
        <PokemonList onPress={selectPokemon} pokemon={this.getPokemonList()} />
      </DexWrapper>
    );
  }
}
