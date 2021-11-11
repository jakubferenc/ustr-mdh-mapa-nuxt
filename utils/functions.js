import { fixTypos } from 'typopo';

export const truncate = (str, max, suffix) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;


export const stripHTMLTags = (htmlText) => {

  return htmlText.replace(/(<([^>]+)>)/gi, "");

};

export const getOpenGraphMeta = (meta) => {

  const countSocialMediaMetaDataDescription = 160;

  const descriptionToEdit = (meta && meta.description) || description;
  const truncatedDescription = truncate(descriptionToEdit, countSocialMediaMetaDataDescription, '...');

  return [
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: (meta && meta.site_name) || site_name,
    },
    {
      hid: "description",
      name: "description",
      content: truncatedDescription,
    },
    {
      hid: "og:type",
      property: "og:type",
      content: (meta && meta.type) || type,
    },
    {
      hid: "og:url",
      property: "og:url",
      content: (meta && meta.url) || url,
    },
    {
      hid: "og:title",
      property: "og:title",
      content: (meta && meta.title) || title,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: truncatedDescription,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: (meta && meta.mainImage) || mainImage,
    },
    {
      hid: "twitter:url",
      name: "twitter:url",
      content: (meta && meta.url) || url,
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: (meta && meta.title) || title,
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: truncatedDescription,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: (meta && meta.mainImage) || mainImage,
    },
  ];
};

