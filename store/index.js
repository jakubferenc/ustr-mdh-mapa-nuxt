import apiFactory from '../utils/factories';


export const state = () => ({
  mapy: [],
  aktualniFiltrPolozky: [],
  aktualniFiltrTypPolozky: [],
  aktualniImagePopUp: {},
});


export const mutations = {


  updateAktualniFiltrPolozky: (state, polozky) => {

    state.aktualniFiltrPolozky = polozky;

  },

  updateAktualniFiltrTypPolozky: (state, polozky) => {

    state.aktualniFiltrTypPolozky = polozky;

  },

  updateMapy: (state, mapy) => {
    state.mapy = mapy;
  },

  updateAktualniImagePopUp: (state, data) => {
    state.aktualniImagePopUp = data;
  }




};

export const actions = {

  setAktualniFiltrPolozky ({ state, commit }, polozky) {
    try {

      commit("updateAktualniFiltrPolozky", polozky);

    } catch (err) {
      console.warn(err);
    }
  },

  setAktualniFiltrTypPolozky ({ state, commit }, newActiveTypes) {
    try {

      commit("updateAktualniFiltrTypPolozky", newActiveTypes);

    } catch (err) {
      console.warn(err);
    }
  },

  setAktualniImagePopUp ({ state, commit }, data) {
    try {

      commit("updateAktualniImagePopUp", data);

    } catch (err) {
      console.warn(err);
    }
  },



  async getMapy ({ state, commit, $fire }) {

    if (state.mapy.length) return;

    try {

      let maps = await apiFactory.getAllMapsFactory(this.$fire.database);

      commit("updateMapy", maps);


    } catch (err) {
      console.warn(err);
    }
  },


};
