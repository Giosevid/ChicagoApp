import React from 'react';
import {ScrollView, TouchableOpacity, Text} from 'react-native';
import Card from '../../components/Card';
import useArtsQuery from '../../hooks/useArtsQuery';
import styles from './styles';

function Details({route}: any) {
  const {detailScreen} = route.params;
  const {updateIsFavorite} = useArtsQuery();

  const handlerAddToFavorites = () => updateIsFavorite(detailScreen.id);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card {...detailScreen} disabled />
      <TouchableOpacity
        onPress={handlerAddToFavorites}
        style={[
          detailScreen.isFavorite ? styles.favoriteButton : styles.button,
        ]}>
        <Text style={styles.textButton}>
          {detailScreen.isFavorite
            ? 'Quitar de favoritos'
            : 'Agregar a favoritos'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Details;
