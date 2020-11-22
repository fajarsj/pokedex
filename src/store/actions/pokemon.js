import * as actionTypes from "./actionTypes";
import axios from "../../shared/AxiosOrder";
import { lastURLsegment } from "../../shared/Utillity";

export const loadPokemonSuccess = (pokemon) => {
  return {
    type: actionTypes.LOAD_POKEMON_SUCCESS,
    pokemon: pokemon,
  };
};

export const loadPokemonFailed = () => {
  return {
    type: actionTypes.LOAD_POKEMON_FAILED,
  };
};

export const loadDetailPokemonSuccess = (pokemon) => {
  return {
    type: actionTypes.LOAD_DETAIL_POKEMON_SUCCESS,
    pokemon: pokemon,
  };
};

export const loadFilterPokemonSuccess = (pokemonType) => {
  return {
    type: actionTypes.LOAD_FILTER_POKEMON_SUCCESS,
    pokemonType: pokemonType,
  };
};

export const getPokemon = () => {
  return (dispatch) => {
    axios
      .get("/pokemon?limit=98")
      .then((response) => {
        dispatch(loadPokemonSuccess(response.data));
      })
      .catch((error) => {
        dispatch(loadPokemonFailed());
      });
  };
};

export const getDetailPokemon = (url) => {
  const pokemonId = lastURLsegment(url);

  return (dispatch) => {
    axios
      .get(`/pokemon/${pokemonId}`)
      .then((response) => {
        dispatch(loadDetailPokemonSuccess(response.data));
      })
      .catch((error) => {
        dispatch(loadPokemonFailed());
      });
  };
};

export const getFilterPokemon = (type) => {
  return (dispatch) => {
    axios
      .get(`/type/${type}`)
      .then((response) => {
        dispatch(loadFilterPokemonSuccess(response.data));
      })
      .catch((error) => {
        dispatch(loadPokemonFailed());
      });
  };
};
