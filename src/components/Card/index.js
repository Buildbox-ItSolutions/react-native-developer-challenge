import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Card = ({
  title,
  subtitle,
  onClick,
  poster,
}) => (
  <TouchableOpacity
    onPress={onClick}
    style={styles.container}
  >
    {(title !== '' || subtitle !== '') && (
    <View style={styles.cardHeader}>
      <Image
        style={{
          height: 30,
          resizeMode: 'contain', // alignSelf: 'center',
        }}
        source={{ uri: poster }}
      />

      <Image style={styles.actionsContainer} source={{ uri: poster }} />

      <View style={styles.cardHeader}>
        <View style={styles.titleContainer}>
          {title !== '' && (
          <Text style={styles.title}>{title}</Text>
          )}
          {subtitle !== '' && (
          <Text style={styles.subtitle}>{subtitle}</Text>
          )}
        </View>
      </View>
    </View>
    )}
  </TouchableOpacity>
);

Card.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  poster: '',
  title: '',
  subtitle: '',
  onClick: () => {},
};

export default Card;
