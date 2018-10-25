/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, AsyncStorage } from "react-native";

import pokemon from "./src/pokemon";

import PokedexPicker from "./src/components/pokedex-picker";
import ShowSelected from "./src/components/show-selected";
import Pokedex from "./src/components/pokedex";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedPokemon: [], mode: "National", showSelected: true };
    this.selectPokemon = this.selectPokemon.bind(this);
    this.onModeChange = this.onModeChange.bind(this);
    this.toggleShowSelected = this.toggleShowSelected.bind(this);
  }

  async componentDidMount() {
    const selectedPokemon = JSON.parse(
      (await AsyncStorage.getItem("selectedPokemon")) || "[]"
    );

    const mode = (await AsyncStorage.getItem("selectedMode")) || "National";

    const showSelected = JSON.parse(
      (await AsyncStorage.getItem("showSelected")) || "true"
    );

    this.setState({ selectedPokemon, mode, showSelected });
  }

  async selectPokemon(pokemonName) {
    const { selectedPokemon } = this.state;

    const isAlreadyInState = selectedPokemon.includes(pokemonName);

    const newSelectedPokemon = isAlreadyInState
      ? selectedPokemon.filter(name => name !== pokemonName)
      : [...this.state.selectedPokemon, pokemonName];

    await AsyncStorage.setItem(
      "selectedPokemon",
      JSON.stringify(newSelectedPokemon)
    );

    this.setState({
      selectedPokemon: newSelectedPokemon
    });
  }

  async toggleShowSelected() {
    const showSelected = !this.state.showSelected;
    await AsyncStorage.setItem("showSelected", JSON.stringify(showSelected));

    this.setState({ showSelected });
  }

  async onModeChange(mode) {
    await AsyncStorage.setItem("selectedMode", mode);

    this.setState({ mode });
  }

  render() {
    const { selectedPokemon, mode, showSelected } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.topbar}>
          <PokedexPicker mode={mode} onModeChange={this.onModeChange} />
          <ShowSelected
            checked={showSelected}
            onPress={this.toggleShowSelected}
          />
        </View>
        <Pokedex
          mode={mode}
          showSelected={showSelected}
          selectPokemon={this.selectPokemon}
          selectedPokemon={selectedPokemon}
          pokemon={pokemon.filter(({ region }) => region).map(pokemon => ({
            ...pokemon,
            selected: selectedPokemon.includes(pokemon.name)
          }))}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF",
    width: "100%",
    paddingTop: 20
  },
  topbar: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    paddingLeft: 5
  }
});
