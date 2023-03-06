import {StyleSheet} from 'react-native';
import colorPalette from '../../themes/color';
import {w, h, W, H} from '../../utils/ui/dimensions';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colorPalette.purple,
    height: W(68),
    justifyContent: 'center',
  },
  header_text: {
    color: 'white',
    marginHorizontal: H(8),
    fontSize: 26,
    fontWeight: '500',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  back: {
    backgroundColor: colorPalette.lightBlue,
  },

  sign_container: {
    width: W(82),
    position: 'absolute',
    zIndex: 1,
    marginHorizontal: '12%',
    backgroundColor: 'white',
    top: H(32),
    alignItems: 'center',
    paddingVertical: '6%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    flexDirection: 'column',
  },

  sign_top_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: W(70),
    paddingHorizontal: '10%',
  },

  image: {
    resizeMode: 'contain',
    flex: 1,
    // position:"absolute",
  },
  image_mail: {
    resizeMode: 'contain',
    position: 'absolute',
    height: W(5),
    width: W(5),
    marginLeft: W(6),
  },

  image_mail_1: {
    resizeMode: 'contain',
    position: 'absolute',
    // height: W(2),
    // width: W(2),
    marginLeft: W(8),
  },

  text_Input: {
    flex: 1,
    height: 40,
    borderColor: colorPalette.gray,
    color: colorPalette.gray,
    marginStart: W(16),
    fontSize: 14,
    fontWeight: '400',
    // paddingHorizontal: 10,
  },
  textInput_div: {
    flexDirection: 'row',
    alignItems: 'center',

    width: W(70),
    borderWidth: 1,
    borderColor: colorPalette.lightGray,
    marginHorizontal: W(10),
    marginTop: W(6),
    height: H(10),
    borderRadius: 5,
  },
  sign_text_1: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: colorPalette.purple,
  },
  sign_text_2: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: colorPalette.black,
  },

  line: {
    height: 2,
    flex: 1,
    backgroundColor: colorPalette.orange,
    marginTop: H(3),
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: W(70),
    borderWidth: 1,
    borderColor: colorPalette.lightGray,
    marginHorizontal: W(10),
    marginTop: W(6),
    height: H(9),
    backgroundColor: colorPalette.orange,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  button_text: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
  forget: {
    fontSize: 15,
    color: colorPalette.black,
    fontWeight: '500',
    marginTop: W(8),
  },
  //   register_container:{
  //     paddingVertical:W(1),
  //   }

text_1_container: {
  flexDirection:"row",
  marginHorizontal:W(6),
  marginTop:H(6),
  marginBottom:H(2),
  
},

  text_1: {
    fontSize:20,
    fontWeight:"400",
    color: colorPalette.black,

  },
  text_1_1 :{
    fontSize:20,
    fontWeight:"700",
    color: colorPalette.black,



  },
  text_2: {
    color: colorPalette.black,
    marginHorizontal:W(6),

    
  },
  register_component :{

   

  },
});

export default styles;
