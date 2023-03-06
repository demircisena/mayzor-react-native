import React, { useState } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';

const SignUp = ({navigation,}) => {

  const handleSignIn = ({line}) => {
    navigation.navigate("SignIn");
    
  };
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.header_text}>MAYZOR TEST CASE</Text>
      </View>
      <View style={styles.back}></View>

      <View style={styles.sign_container}>
        <View style={styles.sign_top_container}>
          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.sign_text_1}>Giriş Yap</Text>
            {/* <View style={styles.line}></View> */}
          </TouchableOpacity>

          <Image
            style={styles.image}
            source={require('../../assets/signin-sinup-geçiş.png')}></Image>

          <View>
            <Text style={styles.sign_text_2}>Kayıt Ol</Text>
            <View style={styles.line}></View>
          </View>
        </View>
        <View>
          <View styles={styles.register_container}>
            <View styles={styles.register_container_2}>
              <View>
                <View style={styles.text_1_container}>
                  <Text style={styles.text_1}>Şimdi </Text>
                  <Text style={styles.text_1_1}>Kayıt Ol!</Text>
                </View>
                 <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                 <Text style={styles.text_2}>Kayıt ol tab sayfası</Text>
                 </TouchableOpacity>
                
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
