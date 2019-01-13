import "./CharacterList.css";

import React, { Component } from "react";
import Helmet from "react-helmet";

import CharacterGroup from "./CharacterGroup";
import Characters from "../data/characters.json";

class CharacterList extends Component {
  constructor(props) {
    super(props);

    const groups = ["Saiyan", "Namek", "Android", "Buu"].map((saga) => ({
      name: `${saga} Saga`,
      characters: Characters.filter((character) => character.saga === saga),
    }));

    this.state = {
      groups,
    };
  }

  render() {
    const groups = this.state.groups.map((group) => (
      <CharacterGroup key={group.name} data={group} />
    ));

    return (
      <div>
        <Helmet>
          <title>Characters - Dragon Ball Z Little Fighter 2</title>
        </Helmet>
        <h1 className="text-white">Character List</h1>
        <div>{groups}</div>
      </div>
    );
  }
}

export default CharacterList;
