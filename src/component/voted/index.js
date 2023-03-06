import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';

const Voted = ({imageURL, name, oldPrice, newPrice, endingTime}) => {
  return (
    <View style={{position:"relative"}}>
        <View style={styles.opacity}>
          <Text style={styles.voted}>Oy verdiniz</Text>
        </View>
          <View style={styles.container}>
      <View style={styles.upcontainer}>
        <View style={styles.discount_container}>
          <Text style={styles.discount_text}>Oy Oranı : %50</Text>
        </View>
        <Image  style={styles.image} source={{uri:imageURL}}></Image>
        <Text style={styles.image_text} >{name}</Text>
        <Text style={styles.price_1}>11.32 tl'den satıldı</Text>
      </View>
      <View style={styles.under_container}>
        
        {/* <Text style={styles.price_2}>77.77 TL</Text> */}

      </View>
    

    </View>

    </View>
    
    
     
  );
};

export default Voted;