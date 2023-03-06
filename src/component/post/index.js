import React , { useState, useEffect}from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';

const Post = ({name, newPrice, oldPrice, endingTime, imageURL}) => {
  const [kalanSure, setKalanSure] = useState('');
  function kalan_Sure(tarih) {
    const kalanMs = Date.parse(tarih) - Date.now(); // Kalan süreyi milisaniye olarak hesapla
    const kalanSaniye = Math.floor(kalanMs / 1000); // Saniyeye çevir
    const kalanDakika = Math.floor(kalanSaniye / 60); // Dakikaya çevir
    const kalanSaat = Math.floor(kalanDakika / 60); // Saate çevir
    const kalanGun = Math.floor(kalanSaat / 24); // Güne çevir
  
    // Günlük, saatlik, dakikalık ve saniyelik kalan süre hesaplanır
    const kalanSaniyeSaat = kalanSaniye % 60;
    const kalanDakikaSaat = kalanDakika % 60;
    const kalanSaatGun = kalanSaat % 24;
    
    // Sonuç, gün, saat, dakika ve saniye cinsinden döndürülür
    return `${kalanGun} gün, ${kalanSaatGun} saat, ${kalanDakikaSaat} dakika, ${kalanSaniyeSaat} saniye`;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setKalanSure(kalan_Sure(endingTime)); // Kalan süreyi hesapla ve güncelle
    }, 1000);
    

    return () => clearInterval(intervalId); // Interval'i temizle
  }, []);





  // const renderItem = (item) => {
  //   const timeParts = item.time.split(":");
  //   const hour = parseInt(kalanSure.slice(7,14));
  // console.log(hour)
  
  //   let component;
  //   if (0 > hour < 24) {
  //     component = <ComponentForTomorrow time={item.time} />;
  //   } else if (hour < 0) {
  //     component = <ComponentForPast time={item.time} />;
  //   } else {
  //     component = <ComponentForToday time={item.time} />;
  //   }
  
  //   return (
  //     <View key={item.id}>
  //       {component}
  //     </View>
  //   );
  // };
  
  // return (
  //   <View>
  //     {data.map((item) => renderItem(item))}
  //   </View>
  // );


  


  return (
    <View style={styles.container}>
      <View style={styles.Image_container}>
        <View style={styles.discount_container}>
          <Text style={styles.discount}>50%</Text>
        </View>
        <Image
          style={styles.Image}
          source={{uri:imageURL}}></Image>
      </View>
      <View style={styles.content_container}>
        <View style={styles.content_container_top}>
          <Image
            style={styles.Image_super_vektor}
            source={require('../../assets/super-vektor.png')}></Image>
          <Text style={styles.super_vektor_text}>Süper Fiyat</Text>
        </View>
        <Text style={styles.text_Information}>
          {name}
        </Text>
        <View style={styles.time_container}>
          <View style={styles.time_text_container}>
            <Text style={styles.time_text_1}>Kalan Süre:</Text>
          </View>
          <View style={styles.time_text_container}>
            <Text style={styles.time_text}>{kalanSure.slice(7,14)}</Text>
          </View>
          <View style={styles.time_text_container}>
            <Text style={styles.time_text}>{kalanSure.slice(16,25)}</Text>
          </View>
          <View style={styles.time_text_container}>
            <Text style={styles.time_text}>{kalanSure.slice(27,36)}</Text>
          </View>
        </View>
        <View style={styles.price_container}>
          <Text style={styles.price_container_text_1}>{oldPrice}</Text>
          <Text style={styles.price_container_text_2}>{newPrice}</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;
