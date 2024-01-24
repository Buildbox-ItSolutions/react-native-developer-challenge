import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatusCircle = ({ status }) => {
  let circleColor;

  switch (status.toLowerCase()) {
    case 'alive':
      circleColor = 'green';
      break;
    case 'dead':
      circleColor = 'red';
      break;
    default:
      circleColor = 'gray';
      break;
  }

  return (
    <View style={[styles.circle, { backgroundColor: circleColor }]}>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 12,
    height: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default StatusCircle;