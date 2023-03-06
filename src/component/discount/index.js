import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';

const Discount = ({imageURL, name, oldPrice, newPrice, endingTime}) => {
  return (
     <View style={styles.container}>
      <View style={styles.upcontainer}>
        <View style={styles.discount_container}>
          <Text style={styles.discount_text}>1.600 TL İndirim</Text>
        </View>
        <Image  style={styles.image} source={{uri:imageURL}}></Image>
        <Text style={styles.image_text} >{name}</Text>

      </View>
      <View style={styles.under_container}>
        <Text style={styles.price_1}>{oldPrice}</Text>
        <Text style={styles.price_2}>{newPrice}</Text>

      </View>
    

    </View>
  );
};

export default Discount;