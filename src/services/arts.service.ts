import api from '../config/api.config';

export const fetchArts = async () => {
  const {data} = await api.get('artworks');
  return data;
};

export const getImage = (imageId: string) => ({
  uri: `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`,
});
