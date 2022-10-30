import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import artAdapter from '../adapters/art.adapter';
import {fetchArts} from '../services/arts.service';
import {setArts, setFavorites} from '../redux/reducers/arts.slice';
import {useNavigation} from '@react-navigation/native';
import {RouteNames} from '../navigation/routeNames';

const useArtsQuery = () => {
  const artsList = useSelector((state: any) => state.arts.list);
  const favoriteArts = useSelector((state: any) => state.arts.favorites);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    fetchArts()
      .then(response => dispatch(setArts(artAdapter(response))))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [dispatch]);

  const getArtById = (id: string) => artsList.find((art: any) => art.id === id);

  const getFavoritesById = (id: string) =>
    favoriteArts.find((art: any) => art.id === id);

  const updateIsFavorite = (id: string) => {
    const art = getFavoritesById(id);
    if (art) {
      const updatedArt = {...art, isFavorite: !art.isFavorite};
      const updatedFavorites = favoriteArts.map((artItem: any) =>
        artItem.id === art.id ? updatedArt : artItem,
      );
      dispatch(setFavorites(updatedFavorites));
    } else {
      const oldArt = getArtById(id);
      const newArt = {...oldArt, isFavorite: true};
      dispatch(setFavorites([...favoriteArts, newArt]));
    }
    navigation.navigate(RouteNames.FavoritesScreen);
  };

  return {
    artsList,
    loading,
    error,
    getArtById,
    updateIsFavorite,
    favoriteArts,
  };
};

export default useArtsQuery;
