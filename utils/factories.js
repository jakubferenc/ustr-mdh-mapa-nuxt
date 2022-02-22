import projectConfig from '../project.config';
import { truncate } from './functions';
import { fixTypos } from 'typopo';
import slugify from 'slugify';
import latinize from 'latinize';

const slugifyCustomDefaultSettings = {
  replacement: '-',  // replace spaces with replacement character, defaults to `-`
  remove: /[*+~.()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
  lower: true,      // convert to lower case, defaults to `false`
  strict: true,     // strip special characters except replacement, defaults to `false`
  locale: 'cs'       // language code of the locale to use
};

const getAllMapsFactory = async ($firebaseDb) => {


  let maps = await new Promise(async (resolve, reject) => {

    const dbInstance = await $firebaseDb.ref(`${projectConfig.firebaseDatabase.rootObject}`);

    dbInstance.once('value', (snapshot) => {

      const data = snapshot.val();

      resolve(data);

    });

  });

  // Modify individual objects of a given map
  // trim IDs to erase incidental white spaces left in google sheet source DB

  Object.keys(maps).forEach(key => {

    // transform object of objects into array of objects
    maps[key].categories = Object.values(maps[key].categories);

    // transform string ids from Firebase/Google Sheet into objects from project config
    const types = maps[key].types.toString(); // force the value to be a string. It could cause issues with a single string number from Firebase being interpreted as a number
    maps[key].types = types
    .split(',')
    .map(itemId => itemId.trim())
    .map(itemId => projectConfig.appConfig.mdh.object.types[itemId]);

    // because the data structure is an object of objects, we need to transform it into an array of objects
    let modifiedObjects = Object.values(maps[key].objects).map((objekt) => {

      const categoryObject = maps[key].categories.filter(category => category.name === objekt.layer)[0];


      if (objekt.type && objekt.type !== undefined) {
        objekt.type = objekt.type.toLowerCase();
      }

      objekt.slug = latinize(slugify(objekt.name.normalize('NFC'), slugifyCustomDefaultSettings)).toLowerCase();

      if (objekt.description && objekt.description !== '') {

        objekt.description = fixTypos(objekt.description);

      }

      objekt.name = fixTypos(objekt.name);

      objekt.nameShort = truncate(objekt.name, 100, '...');

      objekt.mapSlug = maps[key].slug;

      // console.log("------------------------");
      // console.log(objekt.mapSlug);
      // console.log(objekt.id);
      // console.log(objekt.name);
      // console.log(objekt.layer);
      // console.log("categoryObject", categoryObject);
      // console.log("------------------------");


      // if (objekt.date_start) {
      //   const newDateStart = new Date(objekt.date_start);
      //   objekt.date_start = `${newDateStart.getDate()}. ${newDateStart.getMonth() + 1}. ${newDateStart.getFullYear()}`;

      // };

      // if (objekt.date_end) {
      //   const newDateEnd = new Date(objekt.date_end);
      //   objekt.date_end = `${newDateEnd.getDate()}. ${newDateEnd.getMonth() + 1}. ${newDateEnd.getFullYear()}`;
      // };


      if (objekt.images && Object.values(objekt.images).length) {

        // images
        Object.values(objekt.images).map((imageObj) => {

          if (imageObj.name) {

            const fileNameWithoutExt = imageObj.name.split('.')[0];
            const fileNameNormalize = latinize(slugify(`${fileNameWithoutExt}`).toLowerCase());

            imageObj.full = `${fileNameNormalize}-full.webp`;
            imageObj.galleryThumbnail = `${fileNameNormalize}-gallery.webp`;
            imageObj.thumbnail = `${fileNameNormalize}-thumb.webp`;


          }

          if (imageObj.desc) {

            imageObj.desc = fixTypos(imageObj.desc);

          }

          return imageObj;

        });


      }


      objekt.LatLng = [parseFloat(objekt.y), parseFloat(objekt.x)];
      objekt.categoryColor = categoryObject.color;

      return objekt;

    });

    maps[key].objects = modifiedObjects;


    // sort objects based on the order of categories defined via Firebase/Google Sheets
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


  return maps;

};


export default {
  getAllMapsFactory,
};
