import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card: React.FC = () => {
  console.log('Card');
  return (
    <View style={styles.default}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>Hello, Meliuz</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContent: {
    backgroundColor: 'red',
    paddingHorizontal: 12,
    paddingVertical: 12,
    boxShadow: '5px 7px 15px 7x #000',
    borderRadius: 22,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export default Card;
