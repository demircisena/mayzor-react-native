import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import data from '../../assets/mockData.json';

import styles from './style';
import {w, h, W, H} from '../../utils/ui/dimensions';
import colorPalette from '../../themes/color';
import {Discount} from '../../component';

const Detail = ({route, navigation}) => {
  const {itemId} = route.params;
  console.log(data[itemId]['imageURL']);
  const sizeData = ['38', '39', '40', '41', '42', '43'];
  const [sizeIndex, setSizeIndex] = useState(-1);

  const [colorIndex, setColorIndex] = useState(-1);
  const colors = ['Siyah', 'Bordo', 'Pembe', 'Gri', 'Koyu Gri', 'Lacivert'];

  const handlePress = index => {
    setColorIndex(index);
  };

  const handlePressSize = index => {
    setSizeIndex(index);
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.safeArea}>
        <View style={styles.imageTop_container}>
          <Image
            source={{uri: data[itemId]['imageURL']}}
            style={styles.image_product}
          />
          <View style={{position: 'absolute', top: 20}}>
            <Image />
            {/* <View>
              <Image />
              <Image />
            </View> */}
          </View>
        </View>

        <View style={styles.detail_container}>
          <View style={styles.price_text_container}>
            <Text style={styles.price_text}>{data[itemId].name}</Text>
          </View>
          <View style={styles.price_text_container}>
            <View style={styles.time_container}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={styles.time_text_container_1}>
                  <Image
                    style={styles.clock}
                    source={require('../../assets/clock.png')}></Image>
                </View>
                <View style={styles.time_text_container}>
                  <Text style={styles.time_text_1}>Fırsat Süresi:</Text>
                </View>
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={styles.time_text_container}>
                  <Text style={styles.time_text}>9 saat</Text>
                </View>
                <View style={styles.time_text_container}>
                  <Text style={styles.time_text}>23 dakika</Text>
                </View>
                <View style={styles.time_text_container}>
                  <Text style={styles.time_text}>42 saniye</Text>
                </View>
              </View>
            </View>

            <View style={styles.discount_container}>
              <View style={styles.discount_text_container1}>
                <Text style={styles.discount_text_container1_1}>
                  Piyasa Fiyatı
                </Text>
                <Text style={styles.discount_text_container1_2}>
                  {data[itemId].oldPrice}
                </Text>
              </View>
              <View style={styles.discount_text_container2}>
                <Text style={styles.discount_text_container2_1}>
                  Mayzor Fiyatı
                </Text>
                <Text style={styles.discount_text_container2_2}>
                  {data[itemId].newPrice}
                </Text>
              </View>
            </View>

            <View style={styles.stars_container}>
              <View style={styles.stars_image_container}>
                <Image
                  style={styles.stars_image}
                  source={require('../../assets/stars.png')}></Image>
              </View>
              <View style={styles.skor_container}>
                <Text style={styles.skor_text}>13 Değerlendirme</Text>
              </View>
            </View>

            <View
              style={{
                justifyContent: 'center',
                marginVertical: H(4),
                borderTopWidth: 1,
                borderTopColor: colorPalette.lightGray,
              }}>
              <Text
                style={{
                  marginVertical: H(2),
                  color: colorPalette.black,
                  fontSize: 13,
                  fontWeight: '500',
                }}>
                Renk: {colorIndex >= 0 && <Text>{colors[colorIndex]}</Text>}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{marginRight: W(2)}}
                  onPress={() => handlePress(0)}>
                  <Image
                    style={{marginRight: W(2)}}
                    source={require('../../assets/siyah.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress(1)}>
                  <Image
                    style={{marginRight: W(2)}}
                    source={require('../../assets/bordo.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress(2)}>
                  <Image
                    style={{marginRight: W(2)}}
                    source={require('../../assets/pembe.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress(3)}>
                  <Image
                    style={{marginRight: W(2)}}
                    source={require('../../assets/gri.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress(4)}>
                  <Image
                    style={{marginRight: W(2)}}
                    source={require('../../assets/koyugri.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress(5)}>
                  <Image
                    style={{marginRight: W(2)}}
                    source={require('../../assets/lacivert.png')}></Image>
                </TouchableOpacity>
              </View>
            </View>

            <View></View>
            <View
              style={{
                justifyContent: 'center',
                marginVertical: H(4),
                borderTopWidth: 1,
                borderTopColor: colorPalette.lightGray,
              }}>
              <Text
                style={{
                  marginVertical: H(2),
                  color: colorPalette.black,
                  fontSize: 13,
                  fontWeight: '500',
                }}>
                Beden: {sizeIndex >= 0 && <Text>{sizeData[sizeIndex]}</Text>}
              </Text>
              <View style={{flexDirection: 'row'}}>
                {sizeData.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handlePressSize(index)}
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 25,
                        height: 25,
                        borderWidth: 1,
                        borderColor: colorPalette.lightGray,
                        borderRadius: 5,
                        marginTop: 4,
                        marginHorizontal: 6,
                      }}>
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            width: W(100),
            height: H(4),
            backgroundColor: colorPalette.lightBlue,
          }}></View>

        <View
          style={{
            marginHorizontal: W(10),
            padding: W(5),
            flex: 1,
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              flex: 1,
              marginVertical: H(2),
              paddingBottom: H(4),
              color: colorPalette.black,
              borderBottomWidth: 1,
              borderBottomColor: colorPalette.lightGray,
              fontSize: 16,
            }}>
            Ürün Bilgileri
          </Text>
          <Text
            style={{
              flex: 1,
              color: colorPalette.black,
            }}>
            jhııugyuy fut6ytı7rkljoı ıuh jhguyfytfytrdr gsesarware sre
            ttreterewrew ytfyjteue fuytuytr fdhtdhtdtrd raerergwerh
            aergujheıurge6e6 erj eyj wj wyj 5yj5e jyk etyke ty
            erlgıjwerhoıwrt78o78o7r8o rtlhıjwrthınoırth758o578o78o78or78o
            ethwrothpwortherıe57ı67o468o4678o erguıheılwruvıuevıuwer
            euhgıuetyktukyu rtykryultuılyıyıuoşuıtuteyu sreatrwatew yurıyufı
          </Text>
        </View>

        <View
          style={{
            width: W(100),
            height: H(4),
            backgroundColor: colorPalette.lightBlue,
          }}></View>

        <View
          style={{
            marginHorizontal: W(10),
            padding: W(5),
            flex: 1,
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              flex: 1,
              marginVertical: H(2),
              paddingBottom: H(4),
              color: colorPalette.black,
              borderBottomWidth: 1,
              borderBottomColor: colorPalette.lightGray,
              fontSize: 16,
            }}>
            Ürün Değerlendirmeleri
          </Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              style={{width: W(16), resizeMode: 'contain'}}
              source={require('../../assets/product.png')}
            />
            <Image
              style={{
                resizeMode: 'contain',
                width: W(60),
                marginTop: W(15),
              }}
              source={require('../../assets/group.png')}
            />
          </View>
          <Text
            style={{
              flex: 1,
              color: colorPalette.black,
              borderBottomWidth: 1,
              borderBottomColor: colorPalette.lightGray,
            }}>
            jhııugyuy fut6ytı7rkljoı ıuh jhguyfytfytrdr gsesarware sre
            ttreterewrew ytfyjteue fuytuytr fdhtdhtdtrd raerergwerh
            aergujheıurge6e6 erj eyj wj wyj 5yj5e jyk etyke ty
            erlgıjwerhoıwrt78o78o7r8o rtlhıjwrthınoırth758o578o78o78or78o
            ethwrothpwortherıe57ı67o468o4678o erguıheılwruvıuevıuwer
            euhgıuetyktukyu rtykryultuılyıyıuoşuıtuteyu sreatrwatew yurıyufı
          </Text>

          <Text
            style={{
              flex: 1,
              marginVertical: H(2),
              // paddingBottom: H(4),
              color: colorPalette.black,

              fontSize: 16,
            }}>
            M*** A***
          </Text>
          <Image source={require('../../assets/stars.png')} />
          <Text
            style={{
              marginTop: W(12),
              flex: 1,
              color: colorPalette.black,
            }}>
            jhııugyuy fut6ytı7rkljoı ıuh jhguyfytfytrdr gsesarware sre
            ttreterewrew ytfyjteue fuytuytr fdhtdhtdtrd raerergwerh
            aergujheıurge6e6 erj eyj wj euhgıuetyktukyu
            rtykryultuılyıyıuoşuıtuteyu sreatrwatew yurıyufı
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: W(10),
            padding: W(5),
            flex: 1,
            backgroundColor: colorPalette.darkOrange,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 16}}>Tümünü Gör(1555)</Text>
        </View>
        <View
          style={{
            width: W(100),
            height: H(4),
            backgroundColor: colorPalette.lightBlue,
          }}></View>

        <View
          style={{
            marginHorizontal: W(10),
            padding: W(5),
            flex: 1,

            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: 'white',
          }}>
          <Image
            style={{
              resizeMode: 'contain',
              flex: 1,
            }}
            source={require('../../assets/chat.png')}
          />
          <Text style={{color: colorPalette.black, fontSize: 16}}>
            Şimdi Yorum Yap
          </Text>

          <Image
            style={{
              resizeMode: 'contain',
              flex: 1,
            }}
            source={require('../../assets/sağyön.png')}
          />
        </View>
        <View
          style={{
            width: W(100),
            height: H(4),
            backgroundColor: colorPalette.lightBlue,
          }}></View>
        <View
          style={{
            marginHorizontal: W(10),
            padding: W(5),
            flex: 1,

            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: 'white',
          }}>
          <Image
            style={{
              resizeMode: 'contain',
              flex: 1,
            }}
            source={require('../../assets/yön.png')}
          />
          <Text style={{color: colorPalette.black, fontSize: 16}}>
            İade Koşullarını İnceleyiniz
          </Text>

          <Image
            style={{
              resizeMode: 'contain',
              flex: 1,
            }}
            source={require('../../assets/sağyön.png')}
          />
        </View>
        <View
          style={{
            width: W(100),
            height: H(4),
            backgroundColor: colorPalette.lightBlue,
          }}></View>

        <View
          style={{
            marginHorizontal: W(10),
            padding: W(5),
            flex: 1,

            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: 'white',
          }}>
          <Image
            style={{
              resizeMode: 'contain',
              flex: 1,
            }}
            source={require('../../assets/card.png')}
          />
          <Text style={{color: colorPalette.black, fontSize: 16}}>
            Mayzor taksit Seçenekleri
          </Text>

          <Image
            style={{
              resizeMode: 'contain',
              flex: 1,
            }}
            source={require('../../assets/sağyön.png')}
          />
        </View>
        <View
          style={{
            width: W(100),
            height: H(4),
            backgroundColor: colorPalette.lightBlue,
          }}></View>
        <Image
          style={{
            backgroundColor: colorPalette.lightBlue,
            resizeMode: 'contain',
            marginLeft: W(9),
          }}
          source={require('../../assets/fırsat.png')}
        />
        <View
          style={{
            width: W(100),
            height: H(4),
            backgroundColor: colorPalette.lightBlue,
          }}></View>
        <ScrollView horizontal style={{flexDirection: 'row'}}>
          {data.map((item, index) => (
            <Discount
              key={index}
              name={item.name}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
              imageURL={item.imageURL}
            />
          ))}
        </ScrollView>

        <Image
          style={{resizeMode: 'contain'}}
          source={require('../../assets/son.png')}
        />
      </View>
    </ScrollView>
  );
};

export default Detail;
