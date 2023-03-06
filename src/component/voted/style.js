import {StyleSheet} from 'react-native';
import colorPalette from '../../themes/color';
import {w, h, W, H} from '../../utils/ui/dimensions';

const styles = StyleSheet.create({
  opacity: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: W(40),
    height: H(30),
    alignItems: 'center',
    justifyContent:"center",
    margin: W(5),
    borderRadius: 5,
    position:"absolute",
    zIndex:999,
    flex:1,

  },
  voted: {
    color:"white",
    fontSize:12,
    fontWeight:"500",


  },

  container: {
    width: W(40),
    height: H(30),
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent:"center",
    margin: W(5),
    borderRadius: 5,
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    
  },
  upcontainer: {
    width: W(35),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    // borderBottomWidth:1,
    // borderBottomColor:colorPalette.lightGray,
  },
  discount_container: {
    width: W(26),
    height: H(4),
    backgroundColor: colorPalette.orange,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  discount_text: {
    color: 'white',
    fontSize: 12,
  },
  under_container: {
    // flex:1,
    // backgroundColor:"red",
    // paddingVertical:H(1),
  },
  image: {
    margin: H(2),
    resizeMode: 'contain',
    width:W(12),
    height:H(12)

  },
  image_text: {
    backgroundColor: 'white',
    fontSize: 12,
    fontWeight: '400',
    color: colorPalette.black,
    marginBottom: H(1),
  },
  price_1: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '400',
    color: colorPalette.gray,
    lineHeight: 16,
  },
  price_2: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    color: colorPalette.purple,
  },
});

export default styles;
