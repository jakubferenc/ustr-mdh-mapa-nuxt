export const state = () => ({
  mapy: [],
});


export const mutations = {


  updateMapy: (state, mapy) => {
    state.mapy = mapy;
  }

};

export const actions = {


  async getMapy ({ state, commit, $fire }) {

    if (state.mapy.length) return;

    try {


      const maps = await new Promise(async (resolve, reject) => {

          const dbInstance = await this.$fire.database.ref(`${this.$config.firebaseDatabase.rootObject}`);

          dbInstance.once('value', (snapshot) => {

            const data = snapshot.val();

            resolve(data);

          });

      });


      commit("updateMapy", maps);


    } catch (err) {
      console.warn(err);
    }
  },


};
