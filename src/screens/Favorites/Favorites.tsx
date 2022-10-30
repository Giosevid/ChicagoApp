import React from 'react';
import {Text, View, FlatList} from 'react-native';
import Card from '../../components/Card';
import useArtsQuery from '../../hooks/useArtsQuery';

function Favorites() {
  const {favoriteArts} = useArtsQuery();

  return (
    <View>
      {favoriteArts?.length > 0 ? (
        <View>
          <FlatList
            data={favoriteArts}
            renderItem={({item}) => item.isFavorite && <Card {...item} />}
            keyExtractor={item => item.id}
          />
        </View>
      ) : (
        <Text>Aún no tienes favoritos</Text>
      )}
    </View>
  );
}

export default Favorites;
