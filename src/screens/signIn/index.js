import React, { useState } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from './style';



const SignIn = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (email === "emre@mayzor.net" && password === 'mayzor'){ 
      navigation.navigate('Home');
    }else
    {
      Alert.alert('Hata', 'Bilgiler Eşleşmedi')};
      console.log(email,password)
  };

  const handleSignIn = () => {
    navigation.navigate("SignUp");
  };


  return (
    <View style={{flex:1}}>
      <View style={styles.header}>
        <Text style={styles.header_text}>MAYZOR TEST CASE</Text>
      </View>
      <View style={styles.back}></View>

      <View style={styles.sign_container}>
        <View style={styles.sign_top_container}>
          <View >
            <Text  style={styles.sign_text_1}>Giriş Yap</Text>
            <View style={styles.line}></View>
          </View>

          <Image
            style={styles.image}
            source={require('../../assets/signin-sinup-geçiş.png')}></Image>

          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.sign_text_2}>Kayıt Ol</Text>
            
          </TouchableOpacity>
        </View>
        <View>
          <View styles={styles.register_container}>
            <View styles={styles.register_container_2}>
              <View>
                <View style={styles.textInput_div}>
                <TextInput style={styles.text_Input}  value={email}
                 onChangeText={(text) => setEmail(text)} 
                placeholder="E-mail Adresi" />
                <Image
                    style={styles.image_mail}
                    source={require('../../assets/email-vektor.png')}></Image>
                </View>
                <View style={styles.textInput_div}>
                <TextInput style={styles.text_Input} value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="Şifre"/>
                  <Image
                    style={styles.image_mail_1}
                    source={require('../../assets/şifre-vektör.png')}></Image>
                    <Image
                    style={styles.image_mail}
                    source={require('../../assets/şifredışçerçeve.png')}></Image>
                </View>
                <View style={{flex:1, alignSelf:"center"}}>
                <Text style={styles.forget}>Şifreni mi Unuttun?</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.button_text}>Şimdi Giriş Yap</Text>
                </TouchableOpacity>
                
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
