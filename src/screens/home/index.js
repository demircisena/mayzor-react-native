import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './style';
import {Opportunity, Post, Voted} from '../../component';
import {H, W} from '../../utils/ui/dimensions';
import data from '../../assets/mockData.json';
import colorPalette from '../../themes/color';

const Home = ({navigation}) => {




  const handleStack = (index) => {
    navigation.navigate('Detail', {itemId:index});
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.header}>
        <View style={styles.profile_container}>
          <View style={styles.image_container}>
            <Image
              style={styles.image}
              source={require('../../assets/profile.png')}></Image>
          </View>
        </View>
        <Text style={styles.header_text}>MAYZOR TEST CASE</Text>
        <View style={styles.shopping_container}>
          <View style={styles.image_container_orange}>
            <Image
              style={styles.image_orange}
              source={require('../../assets/shop.png')}></Image>
            <Text style={styles.orange_shopping_text}>(0)</Text>
          </View>
        </View>
      </View>
      <View style={styles.back}>
        <View style={styles.home_container}>
          <View style={styles.image_home_container}>
            <Image
              style={styles.image_home_2}
              source={require('../../assets/çatı.png')}></Image>
            <Image
              style={styles.image_home}
              source={require('../../assets/ev.png')}></Image>
            <Image
              style={styles.image_home_1}
              source={require('../../assets/kapı.png')}></Image>
          </View>
          <View style={styles.home_text_container}>
            <Text style={styles.home_text_1}>Bugünün 5 Fırsatı</Text>
            <Text style={styles.home_text_2}>
              Fırsat süreleri ve stoklar bitiyor çabuk acele et.
            </Text>
          </View>
        </View>
        {data.map((item, index) => (
          <TouchableOpacity onPress={() => handleStack(index)} key={index}>
            <Post
              key={index}
              name={item.name}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
              imageURL={item.imageURL}
              endingTime={item.EndingTime}
            />
          </TouchableOpacity>
        ))}

        <View style={styles.skip_container}>
          <Text style={styles.skip_text}>Yarın Başlayacak Fırsatlar</Text>
          {/* <View
          style={{
            width: W(100),
            height: H(4),
            backgroundColor: colorPalette.lightBlue,
          }}></View> */}
          
         
          <View style={styles.elips_container}>
            <Image
              style={styles.image_elips}
              source={require('../../assets/elips.png')}></Image>
            <Image
              style={styles.image_elips_1}
              source={require('../../assets/sol.png')}></Image>
            <Image
              style={styles.image_elips_2}
              source={require('../../assets/elips.png')}></Image>
            <Image
              style={styles.image_elips_2_1}
              source={require('../../assets/sağ.png')}></Image>
          </View>
        </View>

    
          <ScrollView  horizontal style={{flexDirection:"row"}}>
          {data.map((item, index) => (
        <Opportunity
          key={index}
          name={item.name}
          oldPrice={item.oldPrice}
          newPrice={item.newPrice}
          imageURL={item.imageURL}
        />
      ))}
          </ScrollView>
        
        <View style={styles.skip_container}>
          <Text style={styles.skip_text}>Kaçırdığınız Fırsatlar</Text>
          <View style={styles.elips_container}>
            <Image
              style={styles.image_elips}
              source={require('../../assets/elips.png')}></Image>
            <Image
              style={styles.image_elips_1}
              source={require('../../assets/sol.png')}></Image>
            <Image
              style={styles.image_elips_2}
              source={require('../../assets/elips.png')}></Image>
            <Image
              style={styles.image_elips_2_1}
              source={require('../../assets/sağ.png')}></Image>
          </View>
        </View>
      </View>
      
      <ScrollView  horizontal style={{flexDirection:"row"}}> 
{data.map((item, index) => (
        <Voted
          key={index}
          name={item.name}
          oldPrice={item.oldPrice}
          newPrice={item.newPrice}
          imageURL={item.imageURL}
        />
      ))}
      </ScrollView>

      <View
          style={{
            marginHorizontal:W(5),
            // padding: W(5),
            
           
            backgroundColor: colorPalette.darkOrange,
           height:H(10),
         
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"row",
            

          }}>
            <View style={{borderWidth:1,borderColor:"white",borderRadius:50,width:W(6),height:W(6)}}>
            <Image style={{
      
      resizeMode:"contain",position:"absolute",top:6,left:6
    }} source={require('../../assets/plus.png')}/>
            </View>
            
            <Text style={{color:"white",fontSize:18,marginLeft:10,}}>Tümünü Göster</Text>
            
            
          </View>
      
    </ScrollView>
  );
};

export default Home;
