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

      let maps = await new Promise(async (resolve, reject) => {

          const dbInstance = await this.$fire.database.ref(`${this.$config.firebaseDatabase.rootObject}`);

          dbInstance.once('value', (snapshot) => {

            const data = snapshot.val();

            resolve(data);

          });

      });

      Object.keys(maps).forEach(key => {

        // transform object of objects into array of objects
        maps[key].categories = Object.values(maps[key].categories);

        // because the data structure is an object of objects, we need to transform it into an array of objects
        let modifiedObjects = Object.values(maps[key].objects).map((objekt) => {

          const categoryObject = maps[key].categories.filter(category => category.name === objekt.layer)[0];

          objekt.LatLng = [parseFloat(objekt.y), parseFloat(objekt.x)];
          objekt.categoryColor = categoryObject.color;

          return objekt;

        });

        maps[key].objects = modifiedObjects;


        // sort objects based on the order of categories
        const defaultCategoryNames = maps[key].categories.map(category => category.name);

        let categoriesToSortBy = defaultCategoryNames;

        // // do we have explicitly defined order of categories for a given map?
        if (maps[key].categories_order !== undefined && maps[key].categories_order !== '') {

          // remove whitespace, normalize
          let normalizedCategoriesFromStringToArray = maps[key].categories_order.split(',').map(cat => cat.trim());

          if (normalizedCategoriesFromStringToArray.length && normalizedCategoriesFromStringToArray.length > 0) {

            // only here we will replace the default category order with the explicitly defined category order
            categoriesToSortBy = normalizedCategoriesFromStringToArray;

          }

        };

        let sortedObjectsByCategory = [];

        categoriesToSortBy.forEach(categoryName => {

          let objectsByCategory = [];
          objectsByCategory = maps[key].objects.filter(obj => obj.layer == categoryName);


          sortedObjectsByCategory = [...sortedObjectsByCategory, ...objectsByCategory];

        });

        maps[key].objects = sortedObjectsByCategory;

      });


      commit("updateMapy", maps);


    } catch (err) {
      console.warn(err);
    }
  },


};
