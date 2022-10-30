import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getImage} from '../../services/arts.service';
import styles from './styles';
import {RouteNames} from '../../navigation/routeNames';

export type CardProps = {
  title: string;
  display: string;
  id: string;
  disabled?: boolean;
  image: string;
};

function Card(props: CardProps) {
  const {title, display, disabled, image} = props;
  const navigation = useNavigation();
  const handlePress = () =>
    navigation.navigate(RouteNames.DetailsScreen, {detailScreen: props});

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      disabled={disabled}>
      <Image
        style={[styles.image, disabled && styles.largeImage]}
        source={getImage(image)}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.captionMain}>{display}</Text>
    </TouchableOpacity>
  );
}

export default Card;
