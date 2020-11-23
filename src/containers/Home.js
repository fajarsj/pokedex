import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";
import CardList from "../components/CardList";
import Modal from "../components/Modal";
import DetailPokemon from "../components/DetailPokemon";
import Spinner from "../components/Spinner";
import withErrorHandler from "../hoc/WithErrorHandler";
import * as actions from "../store/actions/index";
import axios from "../shared/AxiosOrder";

class Home extends Component {
  state = {
    showModal: false,
    searchFilter: "",
  };

  closeModalHandler = () => {
    this.setState({ showModal: false });
  };

  openModalHandler = (url) => {
    this.props.onGetDetailPokemon(url);
    this.setState({ showModal: true });
  };

  searchFilterChangedHandler = (event) => {
    this.setState({ searchFilter: event.target.value });
  };

  resetSearchFilterHandler = () => {
    this.props.onGetPokemon();
  };

  searchFilterHandler = () => {
    this.props.onGetFilterPokemon(this.state.searchFilter.toLowerCase());
  };

  componentDidMount() {
    this.props.onGetPokemon();
  }

  render() {
    let pokemonDetail = <Spinner />;
    let pokemon = this.props.error ? <Spinner error /> : <Spinner />;

    if (this.props.pokemon) {
      pokemon = (
        <CardList>
          {this.props.pokemon.map((pokemon) => (
            <Card
              clicked={() =>
                this.openModalHandler(pokemon.url || pokemon.pokemon.ur)
              }
              title={pokemon.name || pokemon.pokemon.name}
              url={pokemon.url || pokemon.pokemon.url}
              key={pokemon.url || pokemon.pokemon.url}
            />
          ))}
        </CardList>
      );
    }

    if (this.props.detailPokemon) {
      pokemonDetail = <DetailPokemon data={this.props.detailPokemon} />;
    }

    if (this.props.isLoadingFilter) {
      pokemon = <Spinner />;
    } else if (this.props.isLoadingFilter && this.props.error) {
      pokemon = <Spinner error />;
    }

    if (this.props.isLoadingDetail) {
      pokemonDetail = <Spinner />;
    } else if (this.props.isLoadingDetail && this.props.error) {
      pokemonDetail = <Spinner error />;
    }

    return (
      <Fragment>
        <Header />
        <div className="form form--filter">
          <Input
            placeholder='Search Pokemon Types, e.g "Ground", "Flying" etc'
            value={this.state.searchFilter}
            changed={(event) => this.searchFilterChangedHandler(event)}
          />
          <Button
            clicked={this.resetSearchFilterHandler}
            type="button"
            variant="success"
          >
            Reset
          </Button>
          <Button
            clicked={this.searchFilterHandler}
            type="button"
            disabled={this.state.searchFilter ? false : true}
            variant="primary"
          >
            Search
          </Button>
        </div>
        {pokemon}
        <Modal show={this.state.showModal} modalClosed={this.closeModalHandler}>
          {pokemonDetail}
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon.pokemon,
    isLoadingFilter: state.pokemon.isLoadingFilter,
    isLoadingDetail: state.pokemon.isLoadingDetail,
    detailPokemon: state.pokemon.detailPokemon,
    error: state.pokemon.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPokemon: () => dispatch(actions.getPokemon()),
    onGetDetailPokemon: (id) => dispatch(actions.getDetailPokemon(id)),
    onGetFilterPokemon: (type) => dispatch(actions.getFilterPokemon(type)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Home, axios));
