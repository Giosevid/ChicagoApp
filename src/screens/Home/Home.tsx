import React from 'react';
import {View, FlatList, Text} from 'react-native';
import Card from '../../components/Card';
import useArtsQuery from '../../hooks/useArtsQuery';
import {ArtsProps} from '../../models/arts.type';
import styles from './styles';

function Home() {
  const {artsList} = useArtsQuery();

  return (
    <View style={styles.container}>
      {artsList ? (
        <FlatList
          data={artsList}
          renderItem={({item}: {item: ArtsProps}) => <Card {...item} />}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>Hubo un error inesperado</Text>
      )}
    </View>
  );
}

export default Home;
